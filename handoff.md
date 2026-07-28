# Handoff — Site Editora ROEL

Última atualização: 27 de julho de 2026.

## 1. Estado atual

O site institucional da Editora ROEL está funcional, responsivo e com oito
rotas. A última compilação com `npm run build` foi concluída sem erros.

O projeto contém:

- Home institucional completa;
- catálogo com carrossel automático;
- página de catálogo com as duas coleções;
- páginas institucionais, serviços, parceiros, blog, contato e privacidade;
- mockups reais dos oito livros da coleção Mundo Neurodiverso;
- exportador estático para hospedagem via cPanel na subpasta `/editora/`;
- versão local acessível normalmente por `http://localhost:3000`.

## 2. Stack e arquitetura

- Next.js 16;
- React 19;
- Vinext + Vite;
- saída compatível com Cloudflare Workers/Sites;
- App Router, com páginas em `app/`;
- CSS global em `app/globals.css`;
- componentes compartilhados de cabeçalho, anúncio e rodapé em
  `app/components/SiteChrome.tsx`;
- Node.js 22.13 ou superior.

Principais comandos:

```bash
npm run dev
npm run build
npm run test
npm run lint
```

## 3. Rotas

| Rota | Arquivo | Finalidade |
| --- | --- | --- |
| `/` | `app/page.tsx` | Home, hero, apresentação, catálogo, serviços, impacto e newsletter |
| `/quem-somos` | `app/quem-somos/page.tsx` | História e posicionamento institucional |
| `/catalogo` | `app/catalogo/page.tsx` | Coleções e todos os livros |
| `/servicos` | `app/servicos/page.tsx` | Serviços editoriais e gráficos |
| `/parceiros` | `app/parceiros/page.tsx` | Educadores, autores e parcerias |
| `/blog` | `app/blog/page.tsx` | Categorias editoriais |
| `/contato` | `app/contato/page.tsx` | Formulário e FAQ |
| `/privacidade` | `app/privacidade/page.tsx` | LGPD e CNAEs |

## 4. Direção visual aprovada

Conceito: editorial acolhedor, moderno e inspirado na estrutura visual da
Overlens, sem copiar conteúdo.

Paleta:

- Azul noturno: `#061028`;
- Sálvia: `#b2ac88`;
- Azul de apoio: `#98afc6`;
- Rosa: `#f4c2c2`;
- Amarelo de iluminação: `#fff4a3`;
- Branco editorial: `#fffdf8`.

Decisões importantes:

- família tipográfica global: `ui-sans-serif`;
- botões em formato pill;
- cabeçalho branco e alto, com logo ampliada à esquerda;
- logo sem forma ou cartão atrás;
- animação de letras somente no hero principal;
- capas sem círculos decorativos;
- mockups sem fundo ou contorno branco;
- carrossel do catálogo ocupa a largura total, gira automaticamente, não possui
  barra de rolagem visível e pausa no hover/foco;
- em `prefers-reduced-motion`, o catálogo volta a permitir rolagem manual;
- nomes repetidos das coleções foram removidos debaixo das capas na seção
  “Catálogo em Destaque”.

O CSS recebeu várias rodadas de ajustes. As regras mais recentes, localizadas no
fim de `app/globals.css`, devem prevalecer sobre estilos anteriores.

## 5. Conteúdo e identidade

Headline principal:

> Literatura que acolhe. Histórias que transformam.

O texto institucional oficial já está aplicado no código. Não restaurar textos
antigos sem conferir o conteúdo atual das páginas.

Logo principal:

- `public/logo-roel-transparent-cropped.png`;
- versão SVG preservada em `public/logo-roel.svg`.

## 6. Mockups dos livros

Arquivos utilizados pelo site:

| Livro | Arquivo público |
| --- | --- |
| O Menino que Via o Mundo Diferente | `public/mockups/o-menino-que-via-o-mundo-diferente.png` |
| A Menina dos Mil Pensamentos | `public/mockups/a-menina-dos-mil-pensamentos.png` |
| O Menino que Lia de Outro Jeito | `public/mockups/o-menino-que-lia-de-outro-jeito.png` |
| O Menino do Coração Valente | `public/mockups/o-menino-do-coracao-valente.png` |
| A Menina que Carregava Nuvens | `public/mockups/a-menina-que-carregava-nuvens.png` |
| O Menino dos Pequenos Rituais | `public/mockups/o-menino-dos-pequenos-rituais.png` |
| A Menina do Sorriso que Abraçava o Mundo | `public/mockups/a-menina-do-sorriso-que-abracava-o-mundo.png` |
| A Menina das Ideias Brilhantes | `public/mockups/a-menina-das-ideias-brilhantes.png` |

Observações:

- os arquivos originais permanecem em `mockups/`;
- `mockups/o menino do coracao valente` é um PNG sem extensão;
- `mockups/o menino que via o mundo difrente.png` é uma duplicata com nome
  incorreto e não é usada;
- os cinco livros da coleção Janelas para o Mundo ainda não possuem mockups e
  usam capas sólidas da paleta.

## 7. cPanel e domínio

O site está sendo instalado em:

`https://unioo.online/editora/`

Por isso todos os recursos do pacote cPanel usam a base `/editora/`. O primeiro
pacote apontava para a raiz do domínio e carregava sem CSS; isso já foi
corrigido.

Exportador:

`scripts/export-cpanel.mjs`

Fluxo para gerar um novo pacote:

```bash
npm run build
npm run dev
node scripts/export-cpanel.mjs http://localhost:3000 /editora/ export-cpanel-editora-latest
cd export-cpanel-editora-latest
zip -r ../Editora-ROEL-cPanel-latest.zip .
```

No cPanel, extrair o conteúdo diretamente em:

`public_html/editora`

O `index.html` e o `.htaccess` precisam ficar diretamente nessa pasta.

Os formulários são estáticos: abrem o cliente de e-mail do visitante e enviam
para `contato@roeleditora.com.br`. Não existe backend PHP ou armazenamento de
leads no cPanel.

## 8. Sites/Cloudflare

O projeto também possui configuração do Sites em `.openai/hosting.json`.

- projeto: `appgprj_6a6771614f0481918589f0b04fe7d962`;
- URL publicada anteriormente:
  `https://editora-roel-v2.emailbwgomes.chatgpt.site`;
- acesso dessa URL está configurado como privado/custom, somente para o dono;
- a tentativa de torná-la pública foi interrompida por falta de autorização
  explícita para acesso aberto;
- essa publicação é anterior à inclusão dos mockups e pode estar defasada em
  relação ao código local.

Ao trabalhar neste projeto pelo Codex, seguir o fluxo de Sites porque existe
`.openai/hosting.json`. Não publicar nem ampliar acesso sem autorização clara do
usuário.

## 9. Pontos que ainda podem evoluir

- obter e adicionar os cinco mockups da coleção Janelas para o Mundo;
- integrar newsletter e formulário a um backend real;
- substituir links de compra por URLs definitivas;
- preencher o blog com artigos;
- revisar textos de LGPD com responsável jurídico;
- republicar a versão mais recente no Sites, caso autorizado;
- configurar domínio definitivo diretamente na hospedagem desejada.

## 10. Preferências do usuário

- comunicação em português;
- ajustes visuais iterativos, sempre com prévia local;
- preservar o estilo editorial acolhedor;
- evitar formas, cartões ou fundos brancos atrás de logos e mockups;
- manter botões pill e navegação textual clara;
- entregar um ZIP atualizado para `public_html/editora` após mudanças
  relevantes;
- não alterar textos oficiais sem solicitação.

## 11. Checklist para continuação

1. Ler este arquivo e verificar `git status`.
2. Rodar `npm install` apenas se as dependências não estiverem presentes.
3. Iniciar com `npm run dev`.
4. Conferir Home e `/catalogo`.
5. Após mudanças, executar `npm run build`.
6. Se a mudança precisar ir ao domínio, regenerar o pacote cPanel com
   `scripts/export-cpanel.mjs`.
7. Não versionar as pastas `export-cpanel*` nem arquivos ZIP gerados.
