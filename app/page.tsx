"use client";

import { FormEvent, useMemo, useState } from "react";

type Book = {
  title: string;
  author: string;
  genre: string;
  age: string;
  tone: "pink" | "blue" | "sage" | "yellow";
};

const books: Book[] = [
  {
    title: "A menina que colecionava silêncios",
    author: "Clara Monte",
    genre: "Romance",
    age: "18+",
    tone: "pink",
  },
  {
    title: "O mapa das pequenas coragens",
    author: "Davi Lessa",
    genre: "Infantojuvenil",
    age: "10–14",
    tone: "blue",
  },
  {
    title: "Tudo o que o rio lembrou",
    author: "Helena Paes",
    genre: "Ficção",
    age: "15–17",
    tone: "sage",
  },
  {
    title: "Cartas para um tempo sem pressa",
    author: "Luísa Tavares",
    genre: "Crônicas",
    age: "18+",
    tone: "yellow",
  },
  {
    title: "O menino e a cidade das janelas",
    author: "Ravi Nunes",
    genre: "Infantojuvenil",
    age: "10–14",
    tone: "pink",
  },
  {
    title: "Depois do último verão",
    author: "Miguel Arantes",
    genre: "Romance",
    age: "15–17",
    tone: "blue",
  },
];

const ageFilters = ["Todos", "10–14", "15–17", "18+"];

export default function Home() {
  const [age, setAge] = useState("Todos");
  const [genre, setGenre] = useState("Todos");
  const [formStatus, setFormStatus] = useState("");

  const genres = useMemo(
    () => ["Todos", ...Array.from(new Set(books.map((book) => book.genre)))],
    [],
  );

  const visibleBooks = books.filter(
    (book) =>
      (age === "Todos" || book.age === age) &&
      (genre === "Todos" || book.genre === genre),
  );

  function handleAuthorSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus(
      "Seus dados foram preparados. Conecte o e-mail oficial da editora para ativar o envio.",
    );
  }

  return (
    <main>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <div className="announcement">
        <p>
          Frete grátis em compras acima de R$ 149
          <span aria-hidden="true">✦</span>
          Literatura para toda a vida
        </p>
      </div>

      <header className="site-header">
        <a className="brand-logo" href="#inicio" aria-label="Editora ROEL — início">
          <img src="/logo-roel.svg" alt="Editora ROEL" />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#autores">Autores</a>
          <a href="#sobre">Sobre a ROEL</a>
        </nav>
        <a className="header-cta" href="#catalogo">
          Encontre seu livro <span aria-hidden="true">→</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy" id="conteudo">
          <p className="eyebrow">
            <span />
            Literatura sem idade
          </p>
          <h1>
            Livros que atravessam <em>gerações.</em>
          </h1>
          <p className="hero-intro">
            Histórias para leitores de 10 a 88 anos — feitas para ficar.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#catalogo">
              Explorar catálogo <span aria-hidden="true">→</span>
            </a>
            <a className="button button-outline" href="#autores">
              Envie seu original
            </a>
          </div>
        </div>

        <article className="featured" aria-labelledby="featured-title">
          <div className="floating-dot dot-blue" />
          <div className="floating-dot dot-pink" />
          <div className="book book-featured" aria-hidden="true">
            <div className="book-spine" />
            <p>ROMANCE</p>
            <strong>
              A menina que
              <br />
              colecionava
              <br />
              silêncios
            </strong>
            <div className="cover-shape" />
          </div>
          <div className="featured-copy">
            <span className="tag">Em destaque</span>
            <h2 id="featured-title">A menina que colecionava silêncios</h2>
            <p>
              Uma história delicada sobre tudo aquilo que aprendemos a ouvir
              quando o mundo desacelera.
            </p>
            <a href="#catalogo">Conheça o livro →</a>
          </div>
          <span className="section-number">01</span>
        </article>
      </section>

      <section className="reading-paths" aria-labelledby="paths-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">Escolha seu caminho</p>
            <h2 id="paths-title">Cada leitor, uma nova porta.</h2>
          </div>
          <p>
            Curadorias simples para encontrar a próxima história sem pressa e
            sem complicação.
          </p>
        </div>

        <div className="mosaic">
          <a className="path-card classics" href="#catalogo">
            <span>01</span>
            <div>
              <p>Histórias que permanecem</p>
              <h3>Clássicos</h3>
            </div>
            <b aria-hidden="true">↗</b>
          </a>
          <a className="path-card new-authors" href="#catalogo">
            <span>02</span>
            <div>
              <p>Vozes que estão chegando</p>
              <h3>Novos autores</h3>
            </div>
            <b aria-hidden="true">↗</b>
          </a>
          <a className="path-card young" href="#catalogo">
            <span>03</span>
            <div>
              <p>Imaginação em movimento</p>
              <h3>Infantojuvenil</h3>
            </div>
            <b aria-hidden="true">↗</b>
          </a>
        </div>
      </section>

      <section className="catalog" id="catalogo" aria-labelledby="catalog-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-light">Catálogo interativo</p>
            <h2 id="catalog-title">Encontre a sua próxima leitura.</h2>
          </div>
          <p>
            Filtre por faixa etária e gênero. Os resultados mudam
            imediatamente.
          </p>
        </div>

        <div className="filters" aria-label="Filtros do catálogo">
          <fieldset>
            <legend>Faixa etária</legend>
            <div className="filter-buttons">
              {ageFilters.map((filter) => (
                <button
                  key={filter}
                  className={age === filter ? "active" : ""}
                  onClick={() => setAge(filter)}
                  type="button"
                  aria-pressed={age === filter}
                >
                  {filter}
                </button>
              ))}
            </div>
          </fieldset>
          <label>
            Gênero literário
            <select value={genre} onChange={(event) => setGenre(event.target.value)}>
              {genres.map((filter) => (
                <option key={filter} value={filter}>
                  {filter}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="results-count" aria-live="polite">
          {visibleBooks.length} {visibleBooks.length === 1 ? "livro" : "livros"}{" "}
          para você
        </p>

        <div className="book-grid">
          {visibleBooks.map((book, index) => (
            <article className="book-card" key={book.title}>
              <div className={`book-cover cover-${book.tone}`}>
                <span>{book.genre}</span>
                <strong>{book.title}</strong>
                <i aria-hidden="true">{String(index + 1).padStart(2, "0")}</i>
              </div>
              <div className="book-info">
                <p>{book.genre} · {book.age} anos</p>
                <h3>{book.title}</h3>
                <span>{book.author}</span>
                <button type="button">Ver detalhes →</button>
              </div>
            </article>
          ))}
        </div>

        {visibleBooks.length === 0 && (
          <div className="empty-state">
            <h3>Ainda não há livros nessa combinação.</h3>
            <button
              type="button"
              onClick={() => {
                setAge("Todos");
                setGenre("Todos");
              }}
            >
              Limpar filtros
            </button>
          </div>
        )}
      </section>

      <section className="about" id="sobre" aria-labelledby="about-title">
        <p className="about-number">02</p>
        <div className="about-copy">
          <p className="eyebrow eyebrow-dark">Sobre a ROEL</p>
          <h2 id="about-title">
            Publicar é criar encontros entre mundos.
          </h2>
        </div>
        <div className="about-text">
          <p>
            Acreditamos em histórias que respeitam a inteligência de cada
            leitor, despertam curiosidade e continuam conosco muito depois da
            última página.
          </p>
          <a href="#autores">Conheça nosso trabalho editorial →</a>
        </div>
      </section>

      <section className="authors" id="autores" aria-labelledby="authors-title">
        <div className="author-intro">
          <p className="eyebrow eyebrow-light">Área do autor</p>
          <h2 id="authors-title">Sua história pode começar aqui.</h2>
          <p>
            Conte um pouco sobre o seu original. Nossa equipe valoriza clareza,
            cuidado e retorno humano em cada etapa.
          </p>
          <ol>
            <li><span>1</span> Preencha seus dados e apresente a obra.</li>
            <li><span>2</span> Nossa equipe faz a leitura inicial.</li>
            <li><span>3</span> Você recebe uma resposta sobre os próximos passos.</li>
          </ol>
        </div>

        <form className="author-form" onSubmit={handleAuthorSubmit}>
          <label>
            Seu nome
            <input name="name" required placeholder="Como prefere ser chamado?" />
          </label>
          <label>
            E-mail
            <input name="email" type="email" required placeholder="voce@exemplo.com" />
          </label>
          <label>
            Título do original
            <input name="title" required placeholder="Título provisório ou final" />
          </label>
          <label>
            Gênero literário
            <select name="genre" required defaultValue="">
              <option value="" disabled>Selecione</option>
              <option>Romance</option>
              <option>Contos</option>
              <option>Poesia</option>
              <option>Infantojuvenil</option>
              <option>Não ficção</option>
            </select>
          </label>
          <label className="full-field">
            Apresente sua obra
            <textarea
              name="description"
              required
              rows={4}
              placeholder="Conte a proposta, o público e o estágio do original."
            />
          </label>
          <label className="file-field full-field">
            Arquivo do original
            <input name="manuscript" type="file" accept=".pdf,.doc,.docx" />
            <small>PDF ou Word, até 10 MB. O envio será ativado na integração final.</small>
          </label>
          <button className="button button-sage full-field" type="submit">
            Preparar submissão <span aria-hidden="true">→</span>
          </button>
          {formStatus && (
            <p className="form-status full-field" role="status">
              {formStatus}
            </p>
          )}
        </form>
      </section>

      <section className="newsletter" aria-labelledby="news-title">
        <p className="eyebrow eyebrow-dark">Cartas da ROEL</p>
        <h2 id="news-title">Novidades para quem vive entre páginas.</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const form = event.currentTarget;
            form.reset();
          }}
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Seu melhor e-mail
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Seu melhor e-mail"
          />
          <button type="submit">Quero receber →</button>
        </form>
      </section>

      <footer>
        <div className="footer-main">
          <a className="brand-logo footer-logo" href="#inicio">
            <img src="/logo-roel.svg" alt="Editora ROEL" />
          </a>
          <div>
            <h2>Vamos conversar?</h2>
            <p>Uma dúvida, uma ideia ou vontade de falar sobre livros.</p>
          </div>
          <a
            className="whatsapp"
            href="https://wa.me/?text=Ol%C3%A1%2C%20Editora%20ROEL!%20Gostaria%20de%20falar%20com%20a%20equipe."
            target="_blank"
            rel="noreferrer"
          >
            Falar pelo WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-links">
          <p>© 2026 Editora ROEL. Histórias para toda a vida.</p>
          <nav aria-label="Links do rodapé">
            <a href="#catalogo">Catálogo</a>
            <a href="#autores">Autores</a>
            <a href="#sobre">Institucional</a>
            <a href="#inicio">Voltar ao topo ↑</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
