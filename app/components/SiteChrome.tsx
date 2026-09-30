import type { ReactNode } from "react";
import Link from "next/link";

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
      <Link className="brand-logo" href="/" aria-label="Editora FABER — início">
        <img src="/logo-faber-transparent.png" alt="Editora FABER" />
      </Link>
      <nav aria-label="Navegação principal">
        <Link href="/">Início</Link>
        <Link href="/quem-somos">Quem Somos</Link>
        <Link href="/catalogo">Catálogo</Link>
        <Link href="/servicos">Serviços</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      <Link className="header-cta" href="/parceiros">
        Seja nosso parceiro
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-main">

        {/* Coluna esquerda: logo + redes sociais */}
        <div className="footer-brand">
          <Link className="brand-logo footer-logo" href="/" aria-label="Editora FABER — início">
            <img src="/logo-faber-transparent.png" alt="Editora FABER" />
          </Link>
          <div className="footer-social" aria-label="Redes sociais da Editora FABER">
            <a href="#" aria-label="Instagram da Editora FABER" title="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp da Editora FABER" title="WhatsApp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 21l1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
                <path d="M9.5 9.5c.3.8 1.3 2.7 2.5 3.9 1.2 1.2 3.1 2.2 3.9 2.5.3.1.7 0 .9-.3l.6-.8c.2-.3.2-.6 0-.8l-1.2-1.2c-.2-.2-.5-.2-.8 0l-.5.5c-.2.2-.5.2-.7 0-1-.6-2.1-1.7-2.7-2.7-.2-.2-.2-.5 0-.7l.5-.5c.2-.3.2-.6 0-.8L10.6 7.4c-.2-.2-.5-.2-.8 0l-.8.6c-.3.2-.4.6-.3.9z"></path>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn da Editora FABER" title="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" aria-label="YouTube da Editora FABER" title="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            <a href="#" aria-label="Facebook da Editora FABER" title="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Coluna central: frase */}
        <div>
          <h2>
            Não publicamos apenas livros. Entregamos um universo literário onde
            toda história encontra seu lugar.
          </h2>
        </div>

        {/* Coluna direita: botão de contato */}
        <a className="whatsapp" href="mailto:contato@editorafaber.com.br">
          <span>contato<span className="at-symbol">@</span>editorafaber.com.br</span>
        </a>

      </div>

      {/* Barra inferior */}
      <div className="footer-links">
        <div className="footer-company-info">
          <p>Av. Sta. Catarina, 1224 – Sala 01 – Vila Mascote – SP – CEP: 04378-300 – CNPJ: 69.322.762/0001-00</p>
          <p>© 2026 Editora FABER. All Rights Reserved.</p>
        </div>
        <nav aria-label="Links do rodapé">
          <Link href="/quem-somos">Quem Somos</Link>
          <Link href="/catalogo">Catálogo</Link>
          <Link href="/servicos">Serviços</Link>
          <Link href="/contato">Contato</Link>
          <Link href="/compliance">Compliance</Link>
          <Link href="/privacidade">Privacidade</Link>
          <Link href="/faq">FAQ</Link>
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
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Announcement />
      <SiteHeader />
      <main>
        <section className="subpage-hero" id="conteudo" tabIndex={-1}>
          <p className="eyebrow eyebrow-light">{eyebrow}</p>
          <h1>{title}</h1>
          {intro && <p>{intro}</p>}
        </section>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
