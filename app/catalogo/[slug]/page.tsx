import { SubpageShell } from "../../components/SiteChrome";
import { books, getBookBySlug } from "../books";
import Link from "next/link";

export async function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export default function BookDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const book = getBookBySlug(params.slug);

  if (!book) {
    return (
      <SubpageShell
        eyebrow="Catálogo"
        title="Livro não encontrado."
        intro="Volte ao catálogo para conhecer todas as histórias da ROEL Editora."
      >
        <section className="book-detail book-detail-missing">
          <Link className="button button-dark" href="/catalogo">Voltar ao catálogo →</Link>
        </section>
      </SubpageShell>
    );
  }

  return (
    <SubpageShell
      eyebrow={`${book.collection} · ${book.theme}`}
      title={book.title}
      intro="Uma história para acolher diferentes formas de aprender, sentir e viver."
    >
      <section className={`book-detail book-detail-${book.tone}`}>
        <div className="book-detail-cover">
          {book.coverImage ? (
            <img src={book.coverImage} alt={`Capa de ${book.title}`} loading="lazy" />
          ) : (
            <div className="book-detail-cover-placeholder">
              <span>{book.theme}</span>
              <strong>{book.title}</strong>
            </div>
          )}
        </div>

        <div className="book-detail-copy">
          <p className="eyebrow eyebrow-dark">Sinopse</p>
          {book.synopsis?.length ? (
            book.synopsis.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
          ) : (
            <p>
              A sinopse deste livro está em desenvolvimento. Em breve,
              disponibilizaremos mais detalhes sobre esta história.
            </p>
          )}

          <div className="book-detail-meta">
            <div>
              <span>Coleção</span>
              <strong>{book.collection}</strong>
            </div>
            <div>
              <span>Tema</span>
              <strong>{book.theme}</strong>
            </div>
          </div>

          <div className="book-detail-actions">
            <a
              className="button button-dark"
              href={`mailto:contato@editoraroel.com.br?subject=${encodeURIComponent(`Quero comprar: ${book.title}`)}`}
            >
              Quero este livro →
            </a>
            <Link className="button button-outline" href="/catalogo">
              Voltar ao catálogo
            </Link>
          </div>
        </div>
      </section>
    </SubpageShell>
  );
}
