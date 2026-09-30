"use client";

import { books } from "./catalogo/books";
import type { CatalogBook as Book } from "./catalogo/books";
import { SiteFooter } from "./components/SiteChrome";
import Link from "next/link";

const featuredBooks = books.slice(0, 6);

const services = [
  {
    title: "Publicação Assistida",
    description:
      "Processo completo do original ao livro impresso: revisão, diagramação, capa, ISBN, ficha catalográfica, direitos autorais e impressão.",
  },
  {
    title: "Serviços Gráficos",
    description:
      "Impressão digital e offset, acabamento, laminação, capas, papéis especiais, plotagem, encadernação e materiais promocionais.",
  },
  {
    title: "Coedição",
    description:
      "Divisão de custos e riscos entre a editora e o parceiro.",
  },
  {
    title: "Selo Editorial",
    description:
      "Marca própria dentro da FABER para parceiros que desejam publicar com estrutura profissional.",
  },
];

const blogCategories = [
  "Neurodiversidade",
  "Educação Inclusiva",
  "Dicas para Pais e Educadores",
  "Lançamentos",
  "Impacto Social",
  "Bastidores",
];

const blogCategorySlugs = [
  "neurodiversidade",
  "educacao-inclusiva",
  "dicas-familias",
  "lancamentos",
  "impacto-social",
  "bastidores",
];

const letterFieldLines = Array.from({ length: 24 }, (_, index) => {
  const lines = [
    "F A B E R · L I T E R A T U R A · I N C L U S Ã O ·",
    "E D U C A Ç Ã O · C I D A D A N I A · H I S T Ó R I A S ·",
    "F A M Í L I A S · E S C O L A S · L E I T O R E S ·",
    "T R A N S F O R M A Ç Ã O · D I V E R S I D A D E ·",
  ];

  return lines[index % lines.length];
});

function LetterBackdrop({ tone = "dark" }: { tone?: "light" | "dark" }) {
  return (
    <div
      className={`section-letterfield hero-letterfield letter-tone-${tone}`}
      aria-hidden="true"
    >
      <div className="letter-cloud letter-cloud-left">
        {letterFieldLines.map((line, index) => (
          <span
            key={`left-${index}`}
            style={{ animationDelay: `${index * -0.24}s` }}
          >
            {line}
          </span>
        ))}
      </div>
      <div className="letter-cloud letter-cloud-right">
        {letterFieldLines.map((line, index) => (
          <span
            key={`right-${index}`}
            style={{ animationDelay: `${index * -0.24}s` }}
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}

function CatalogBookCard({
  book,
  index,
  decorative = false,
}: {
  book: Book;
  index: number;
  decorative?: boolean;
}) {
  return (
    <article
      className="book-card"
      aria-hidden={decorative ? "true" : undefined}
    >
      <div
        className={`book-cover cover-${book.tone}${book.coverImage ? " book-cover-mockup" : ""}`}
      >
        {book.coverImage ? (
          <img
            src={book.coverImage}
            alt={`Mockup da capa do livro ${book.title}`}
            loading="lazy"
          />
        ) : (
          <>
            <span>{book.collection}</span>
            <strong>{book.title}</strong>
            <i aria-hidden="true">{String(index + 1).padStart(2, "0")}</i>
          </>
        )}
      </div>
      <div className="book-info">
        <h3>{book.title}</h3>
        <Link
          className="book-details-link"
          href={`/catalogo/${book.slug}`}
          tabIndex={decorative ? -1 : undefined}
        >
          Conhecer livro →
        </Link>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

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

      <header className="site-header">
        <Link className="brand-logo" href="#inicio" aria-label="Editora FABER — início">
          <img src="/logo-faber-transparent.png" alt="Editora FABER" />
        </Link>
        <nav aria-label="Navegação principal">
          <Link href="#inicio">INÍCIO</Link>
          <Link href="/quem-somos">QUEM SOMOS</Link>
          <Link href="/catalogo">CATÁLOGO</Link>
          <Link href="/servicos">SERVIÇOS</Link>
          <Link href="/blog">BLOG</Link>
        </nav>
        <Link className="header-cta" href="/parceiros">
          SEJA NOSSO PARCEIRO
        </Link>
      </header>

      <section className="hero letter-section" id="inicio">
        <LetterBackdrop />
        <div className="hero-copy" id="conteudo">
          <p className="eyebrow">
            <span />
            EDITORA FABER
          </p>
          <h1>
            <span className="hero-line">Literatura que acolhe.</span>
            <span className="hero-line">Histórias que transformam.</span>
          </h1>
          <p className="hero-official-subtitle">
            A Editora FABER nasce da parceria entre Roberto Araújo e Fabio Cavalcanti
            para publicar livros que formam cidadãos, acolhem famílias,
            inspiram leitores e transformam escolas.
          </p>
          <div className="hero-actions">
            <Link className="button button-hero-white" href="#catalogo">
              CONHEÇA NOSSO CATÁLOGO
            </Link>
            <a
              className="button button-hero-white"
              href="mailto:contato@editorafaber.com.br?subject=Quero ser parceiro"
            >
              SEJA NOSSO PARCEIRO
            </a>
          </div>
        </div>
      </section>

      <section className="home-who" id="quem-somos" aria-labelledby="who-title">
        <div>
          <p className="eyebrow eyebrow-dark">Quem Somos</p>
          <h2 id="who-title">Uma editora completa.</h2>
        </div>
        <div className="home-who-copy">
          <p>
            A Editora FABER é uma editora completa, fundada pelos presidentes do
            IRA INTEGRA TEA, Roberto Araújo e Fabio Cavalcanti. Atuamos em todos os
            segmentos: ficção e não ficção, literatura infantojuvenil, obras
            paradidáticas, biografias e memórias, livros técnicos e científicos,
            autoajuda e desenvolvimento pessoal. Também oferecemos serviços
            editoriais completos e solução gráfica para terceiros.
          </p>
          <Link className="button section-button" href="/quem-somos">
            Saiba mais →
          </Link>
        </div>
      </section>

      <section className="catalog" id="catalogo" aria-labelledby="catalog-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-light">NOSSAS COLEÇÕES</p>
            <h2 id="catalog-title">CATÁLOGO EM DESTAQUE</h2>
          </div>
          <p>
            Uma seleção de oito livros para conhecer o universo da Editora FABER.
          </p>
        </div>

        <div
          className="book-carousel"
          role="region"
          aria-label="Catálogo em destaque"
        >
          <div className="book-grid">
            {[0, 1, 2, 3].map((group) => (
              <div
                className="book-track-group"
                aria-hidden={group > 0 ? "true" : undefined}
                key={group}
              >
                {featuredBooks.map((book, index) => (
                  <CatalogBookCard
                    book={book}
                    decorative={group > 0}
                    index={index}
                    key={`${group}-${book.title}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-home" id="servicos" aria-labelledby="services-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">Soluções completas</p>
            <h2 id="services-title">Nossos Serviços</h2>
          </div>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="biographies-home" aria-labelledby="biographies-title">
        <div>
          <p className="eyebrow eyebrow-dark">Biografias e Memórias</p>
          <h2 id="biographies-title">Você tem uma história para contar?</h2>
        </div>
        <div>
          <p>
            A Editora FABER publica biografias e memórias com todo o cuidado
            editorial que a sua trajetória merece. Do original ao livro impresso.
          </p>
          <Link className="button section-button" href="/servicos#biografias">
            Saiba mais →
          </Link>
        </div>
      </section>

      <section className="impact-home" aria-labelledby="impact-title">
        <p className="eyebrow eyebrow-dark">Impacto Social</p>
        <h2 id="impact-title">
          Cada livro adquirido fortalece o IRA INTEGRA TEA e contribui para o
          atendimento de autistas em situação de vulnerabilidade.
        </h2>
        <p>Não vendemos apenas livros. Entregamos ferramentas de transformação.</p>
      </section>

      <section className="blog-home" id="blog" aria-labelledby="blog-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">Conteúdo FABER</p>
            <h2 id="blog-title">Blog</h2>
          </div>
        </div>
        <div className="blog-grid">
          {blogCategories.map((category, index) => (
            <article key={category}>
              <a
                className="blog-home-card-link"
                href={`/blog#${blogCategorySlugs[index]}`}
                aria-label={`Ler artigo: ${category}`}
              >
                <span className="blog-home-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{category}</h3>
                <span className="blog-home-card-action">Ler artigo →</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="newsletter" aria-labelledby="news-title">
        <p className="eyebrow eyebrow-dark">Editora FABER</p>
        <h2 id="news-title">Newsletter</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            event.currentTarget.reset();
          }}
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Seu e-mail
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Seu e-mail"
          />
          <button type="submit">Assinar</button>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
