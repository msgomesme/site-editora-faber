import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptsDir = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.dirname(scriptsDir);
const previewOrigin = process.argv[2] ?? "http://localhost:3000";
const publicBase = process.argv[3] ?? "/editora_V2/";
const outputName = process.argv[4] ?? "export-cpanel-editora";
const outputDir = path.join(projectDir, outputName);
const routes = [
  "/",
  "/quem-somos",
  "/catalogo",
  "/catalogo/o-menino-que-via-o-mundo-diferente",
  "/catalogo/a-menina-dos-mil-pensamentos",
  "/catalogo/o-menino-que-lia-de-outro-jeito",
  "/catalogo/o-menino-do-coracao-valente",
  "/catalogo/a-menina-que-carregava-nuvens",
  "/catalogo/o-menino-dos-pequenos-rituais",
  "/catalogo/a-menina-do-sorriso-que-abracava-o-mundo",
  "/catalogo/a-menina-das-ideias-brilhantes",
  "/catalogo/a-menina-que-enxergava-com-as-maos",
  "/catalogo/o-menino-que-ouvia-com-os-olhos",
  "/catalogo/o-menino-das-rodas-que-levavam-sonhos",
  "/catalogo/a-menina-das-maos-corajosas",
  "/catalogo/o-menino-que-pintava-sonhos",
  "/servicos",
  "/parceiros",
  "/blog",
  "/contato",
  "/compliance",
  "/privacidade",
  "/faq",
];

await rm(outputDir, { recursive: true, force: true });
await mkdir(path.join(outputDir, "assets"), { recursive: true });

const assetFiles = await readdir(path.join(projectDir, "dist/client/assets"));
const cssFile = assetFiles.find((file) => file.endsWith(".css") && !file.startsWith("._"));

if (!cssFile) {
  throw new Error("O CSS compilado não foi encontrado.");
}

let css = await readFile(
  path.join(projectDir, "dist/client/assets", cssFile),
  "utf8",
);

if (publicBase !== "/") {
  css = css.replace(
    /url\((["']?)\/(?!\/)/g,
    `url($1${publicBase}`,
  );
}

await writeFile(path.join(outputDir, "assets/site-v2.css"), css, "utf8");

for (const entry of await readdir(path.join(projectDir, "public"))) {
  await cp(
    path.join(projectDir, "public", entry),
    path.join(outputDir, entry),
    { recursive: true },
  );
}

for (const route of routes) {
  const response = await fetch(`${previewOrigin}${route}`);

  if (!response.ok) {
    throw new Error(`Falha ao gerar ${route}: HTTP ${response.status}`);
  }

  const rendered = await response.text();
  const htmlDocument = rendered.match(/<!DOCTYPE html>[\s\S]*?<\/html>/i)?.[0];

  if (!htmlDocument) {
    throw new Error(`HTML inválido em ${route}`);
  }

  let cleaned = htmlDocument
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*\/?>/gi, "")
    .replace(
      /<link\b[^>]*rel=["']stylesheet["'][^>]*\/?>/gi,
      '<link rel="stylesheet" href="/assets/site-v2.css"/>',
    )
    .replace(/<meta\b[^>]*property=["']og:url["'][^>]*\/?>/gi, "")
    .replaceAll(previewOrigin, "")
    .replace(
      "</head>",
      '<meta name="generator" content="Editora FABER — versão cPanel"/></head>',
    )
    .replace(
      "</body>",
      '<script src="/assets/site-v2.js" defer></script></body>',
    );

  if (publicBase !== "/") {
    cleaned = cleaned.replace(
      /(href|src)=("|')\/(?!\/)/g,
      `$1=$2${publicBase}`,
    );
  }

  const routeDir =
    route === "/" ? outputDir : path.join(outputDir, route.slice(1));
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), cleaned, "utf8");
}

const staticScript = `document.addEventListener("submit", function (event) {
  var form = event.target;
  if (!(form instanceof HTMLFormElement)) return;

  if (form.classList.contains("contact-form")) {
    event.preventDefault();
    var data = new FormData(form);
    var assunto = String(data.get("subject") || "Contato pelo site");
    var corpo = [
      "Nome: " + String(data.get("name") || ""),
      "E-mail: " + String(data.get("email") || ""),
      "",
      String(data.get("message") || "")
    ].join("\\n");
    window.location.href =
      "mailto:contato@editorafaber.com.br?subject=" +
      encodeURIComponent(assunto) +
      "&body=" +
      encodeURIComponent(corpo);
    return;
  }

  if (form.closest(".newsletter")) {
    event.preventDefault();
    var emailInput = form.querySelector('input[type="email"]');
    var email = emailInput ? emailInput.value : "";
    window.location.href =
      "mailto:contato@editorafaber.com.br?subject=" +
      encodeURIComponent("Cadastro na newsletter") +
      "&body=" +
      encodeURIComponent("Quero assinar a newsletter com o e-mail: " + email);
  }
});

function openBlogArticleFromHash() {
  var id = window.location.hash.slice(1);
  if (!id) return;

  var article = document.getElementById(id);
  if (!article || article.tagName.toLowerCase() !== "details") return;

  article.open = true;
  window.requestAnimationFrame(function () {
    article.scrollIntoView({ block: "start", behavior: "smooth" });
  });
}

openBlogArticleFromHash();
window.addEventListener("hashchange", openBlogArticleFromHash);
`;

const htaccess = `Options -Indexes
DirectoryIndex index.html

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.+?)/?$ $1/index.html [L]
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 7 days"
  ExpiresByType application/javascript "access plus 7 days"
  ExpiresByType font/woff2 "access plus 30 days"
  ExpiresByType image/png "access plus 30 days"
  ExpiresByType image/svg+xml "access plus 30 days"
</IfModule>
`;

const instructions = `EDITORA FABER — PACOTE PARA ${publicBase}

1. Abra o Gerenciador de Arquivos do cPanel.
2. Entre na pasta public_html${publicBase.replace(/\/$/, "")}.
3. Substitua somente os arquivos do pacote anterior.
4. Envie este arquivo ZIP e clique em Extrair.
5. Confirme que index.html e .htaccess ficaram diretamente nessa pasta.
6. Atualize o site com Ctrl+F5 ou Cmd+Shift+R.

Os formulários abrem o aplicativo de e-mail do visitante e direcionam as
mensagens para contato@editorafaber.com.br.
`;

await writeFile(path.join(outputDir, "assets/site-v2.js"), staticScript, "utf8");
await writeFile(path.join(outputDir, ".htaccess"), htaccess, "utf8");
await writeFile(path.join(outputDir, "LEIA-ME.txt"), instructions, "utf8");

import { execSync } from "node:child_process";
try { execSync("find . -type f -name \"._*\" -delete", { cwd: outputDir }); } catch (e) {}

for (const requiredPath of [
  "index.html",
  "assets/site-v2.css",
  "assets/site-v2.js",
  ".htaccess",
  "mockups/o-menino-que-via-o-mundo-diferente.png",
  "mockups/a-menina-dos-mil-pensamentos.png",
  "mockups/o-menino-que-lia-de-outro-jeito.png",
  "mockups/o-menino-do-coracao-valente.png",
  "mockups/a-menina-que-carregava-nuvens.png",
  "mockups/o-menino-dos-pequenos-rituais.png",
  "mockups/a-menina-do-sorriso-que-abracava-o-mundo.png",
  "mockups/a-menina-das-ideias-brilhantes.png",
]) {
  await readFile(path.join(outputDir, requiredPath));
}

console.log(outputDir);
