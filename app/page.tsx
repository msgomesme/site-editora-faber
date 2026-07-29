"use client";

type Book = {
  title: string;
  theme: string;
  collection: string;
  tone: "pink" | "blue" | "sage" | "yellow";
  coverImage?: string;
};

const books: Book[] = [
  {
    title: "O Menino que Via o Mundo Diferente",
    theme: "TEA",
    collection: "Mundo Neurodiverso",
    tone: "blue",
    coverImage: "/mockups/o-menino-que-via-o-mundo-diferente.png",
  },
  {
    title: "A Menina dos Mil Pensamentos",
    theme: "TDAH",
    collection: "Mundo Neurodiverso",
    tone: "pink",
    coverImage: "/mockups/a-menina-dos-mil-pensamentos.png",
  },
  {
    title: "O Menino que Lia de Outro Jeito",
    theme: "Dislexia",
    collection: "Mundo Neurodiverso",
    tone: "sage",
    coverImage: "/mockups/o-menino-que-lia-de-outro-jeito.png",
  },
  {
    title: "O Menino do Coração Valente",
    theme: "TOD",
    collection: "Mundo Neurodiverso",
    tone: "yellow",
    coverImage: "/mockups/o-menino-do-coracao-valente.png",
  },
  {
    title: "A Menina que Carregava Nuvens",
    theme: "Ansiedade",
    collection: "Mundo Neurodiverso",
    tone: "pink",
    coverImage: "/mockups/a-menina-que-carregava-nuvens.png",
  },
  {
    title: "O Menino dos Pequenos Rituais",
    theme: "TOC",
    collection: "Mundo Neurodiverso",
    tone: "blue",
    coverImage: "/mockups/o-menino-dos-pequenos-rituais.png",
  },
  {
    title: "A Menina do Sorriso que Abraçava o Mundo",
    theme: "Síndrome de Down",
    collection: "Mundo Neurodiverso",
    tone: "sage",
    coverImage: "/mockups/a-menina-do-sorriso-que-abracava-o-mundo.png",
  },
  {
    title: "A Menina das Ideias Brilhantes",
    theme: "Altas Habilidades",
    collection: "Mundo Neurodiverso",
    tone: "yellow",
    coverImage: "/mockups/a-menina-das-ideias-brilhantes.png",
  },
  {
    title: "A Menina que Enxergava com as Mãos",
    theme: "Deficiência Visual",
    collection: "Janelas para o Mundo",
    tone: "pink",
  },
  {
    title: "O Menino que Ouvia com os Olhos",
    theme: "Surdez",
    collection: "Janelas para o Mundo",
    tone: "blue",
  },
  {
    title: "O Menino das Rodas que Levavam Sonhos",
    theme: "Deficiência Física",
    collection: "Janelas para o Mundo",
    tone: "sage",
  },
  {
    title: "A Menina das Mãos Corajosas",
    theme: "Amputação",
    collection: "Janelas para o Mundo",
    tone: "yellow",
  },
  {
    title: "O Menino que Pintava Sonhos",
    theme: "Paralisia Cerebral",
    collection: "Janelas para o Mundo",
    tone: "pink",
  },
];

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
      "Marca própria dentro da ROEL para parceiros que desejam publicar com estrutura profissional.",
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

const letterFieldLines = Array.from({ length: 24 }, (_, index) => {
  const lines = [
    "R O E L · L I T E R A T U R A · I N C L U S Ã O ·",
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
        <span>{book.theme}</span>
        <a
          className="catalog-buy"
          href={`mailto:contato@roeleditora.com.br?subject=${encodeURIComponent(`Quero comprar: ${book.title}`)}`}
          tabIndex={decorative ? -1 : undefined}
        >
          Comprar
        </a>
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
        <a className="brand-logo" href="#inicio" aria-label="ROEL Editora — início">
          <img src="/logo-roel-transparent-cropped.png" alt="ROEL Editora" />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="/quem-somos">Quem Somos</a>
          <a href="/catalogo">Catálogo</a>
          <a href="/servicos">Serviços</a>
          <a href="/blog">Blog</a>
        </nav>
        <a className="header-cta" href="/parceiros">
          Seja nosso parceiro
        </a>
      </header>

      <section className="hero letter-section" id="inicio">
        <LetterBackdrop />
        <div className="hero-copy" id="conteudo">
          <p className="eyebrow">
            <span />
            ROEL Editora
          </p>
          <h1>
            Literatura que acolhe. <em>Histórias que transformam.</em>
          </h1>
          <p className="hero-official-subtitle">
            A ROEL Editora nasce da parceria entre Roberto Araújo e Elton
            Henrique para publicar livros que formam cidadãos, acolhem famílias,
            inspiram leitores e transformam escolas.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#catalogo">
              Conheça nosso catálogo
            </a>
            <a
              className="button button-outline"
              href="mailto:contato@roeleditora.com.br?subject=Quero ser parceiro"
            >
              Seja nosso parceiro
            </a>
          </div>
        </div>
      </section>

      <section className="home-who" id="quem-somos" aria-labelledby="who-title">
        <p className="section-index">01</p>
        <div>
          <p className="eyebrow eyebrow-dark">Quem Somos</p>
          <h2 id="who-title">Uma editora completa.</h2>
        </div>
        <div className="home-who-copy">
          <p>
            A ROEL Editora é uma editora completa, fundada pelos presidentes do
            IRA INTEGRA TEA, Roberto Araújo e Elton Henrique. Atuamos em todos os
            segmentos: ficção e não ficção, literatura infantojuvenil, obras
            paradidáticas, biografias e memórias, livros técnicos e científicos,
            autoajuda e desenvolvimento pessoal. Também oferecemos serviços
            editoriais completos e solução gráfica para terceiros.
          </p>
          <a className="button section-button" href="/quem-somos">
            Saiba mais →
          </a>
        </div>
      </section>

      <section className="catalog" id="catalogo" aria-labelledby="catalog-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-light">Nossas coleções</p>
            <h2 id="catalog-title">Catálogo em Destaque</h2>
          </div>
          <p>
            Três coleções paradidáticas que abrem caminho para um catálogo em
            expansão.
          </p>
        </div>

        <div
          className="book-carousel"
          role="region"
          aria-label="Catálogo em destaque"
        >
          <div className="book-grid">
            {[0, 1].map((group) => (
              <div
                className="book-track-group"
                aria-hidden={group === 1 ? "true" : undefined}
                key={group}
              >
                {books.map((book, index) => (
                  <CatalogBookCard
                    book={book}
                    decorative={group === 1}
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
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="biographies-home" aria-labelledby="biographies-title">
        <p className="section-index">02</p>
        <div>
          <p className="eyebrow eyebrow-dark">Biografias e Memórias</p>
          <h2 id="biographies-title">Você tem uma história para contar?</h2>
        </div>
        <p>
          A ROEL Editora publica biografias e memórias com todo o cuidado
          editorial que a sua trajetória merece. Do original ao livro impresso.
        </p>
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
            <p className="eyebrow eyebrow-dark">Conteúdo ROEL</p>
            <h2 id="blog-title">Blog</h2>
          </div>
        </div>
        <div className="blog-grid">
          {blogCategories.map((category, index) => (
            <article key={category}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{category}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="newsletter" aria-labelledby="news-title">
        <p className="eyebrow eyebrow-dark">ROEL Editora</p>
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

      <footer>
        <div className="footer-main">
          <a className="brand-logo footer-logo" href="#inicio">
            <img src="/logo-roel-transparent-cropped.png" alt="ROEL Editora" />
          </a>
          <div>
            <h2>
              Não estamos construindo apenas uma editora. Estamos construindo
              um universo literário onde toda história encontra seu lugar.
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
            <a href="/privacidade">Privacidade</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
