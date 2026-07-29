import type { ReactNode } from "react";

export function Announcement() {
  return (
    <div className="announcement">
      <div className="announcement-track">
        {[0, 1].map((group) => (
          <div
            className="announcement-group"
            aria-hidden={group === 1}
            key={group}
          >
            <span>LITERATURA QUE ACOLHE. HISTÓRIAS QUE TRANSFORMAM.</span>
            <b aria-hidden="true">✦</b>
            <span>LITERATURA QUE ACOLHE. HISTÓRIAS QUE TRANSFORMAM.</span>
            <b aria-hidden="true">✦</b>
            <span>LITERATURA QUE ACOLHE. HISTÓRIAS QUE TRANSFORMAM.</span>
            <b aria-hidden="true">✦</b>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand-logo" href="/" aria-label="ROEL Editora — início">
        <img src="/logo-roel-transparent-cropped.png" alt="ROEL Editora" />
      </a>
      <nav aria-label="Navegação principal">
        <a href="/">Início</a>
        <a href="/quem-somos">Quem Somos</a>
        <a href="/catalogo">Catálogo</a>
        <a href="/servicos">Serviços</a>
        <a href="/blog">Blog</a>
      </nav>
      <a className="header-cta" href="/parceiros">
        Seja nosso parceiro
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-main">
        <a className="brand-logo footer-logo" href="/">
          <img src="/logo-roel-transparent-cropped.png" alt="ROEL Editora" />
        </a>
        <div>
          <h2>
            Não publicamos apenas livros. Entregamos um universo literário onde
            toda história encontra seu lugar.
          </h2>
        </div>
        <a className="whatsapp" href="mailto:contato@roeleditora.com.br">
          contato@roeleditora.com.br
        </a>
      </div>
      <div className="footer-links">
        <p>ROEL Editora</p>
        <nav aria-label="Links do rodapé">
          <a href="/quem-somos">Quem Somos</a>
          <a href="/catalogo">Catálogo</a>
          <a href="/servicos">Serviços</a>
          <a href="/contato">Contato</a>
          <a href="/compliance">Compliance</a>
          <a href="/privacidade">Privacidade</a>
          <a href="/faq">FAQ</a>
        </nav>
      </div>
    </footer>
  );
}

export function SubpageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <main>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Announcement />
      <SiteHeader />
      <section className="subpage-hero" id="conteudo">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
      </section>
      {children}
      <SiteFooter />
    </main>
  );
}
