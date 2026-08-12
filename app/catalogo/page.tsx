import { SubpageShell } from "../components/SiteChrome";
import Link from "next/link";
import {
  janelasParaOMundo,
  mundoNeurodiverso,
  protagonistasDoAmanha,
  type CatalogBook,
} from "./books";

function CollectionGrid({
  books,
  startAt = 0,
}: {
  books: CatalogBook[];
  startAt?: number;
}) {
  return (
    <div className="collection-grid">
      {books.map((book, index) => (
        <article
          className={book.coverImage ? "collection-card-has-mockup" : undefined}
          key={book.title}
        >
          <span>{String(startAt + index + 1).padStart(2, "0")}</span>
          <div
            className={`collection-cover${book.coverImage ? " has-mockup" : ""}`}
          >
            {book.coverImage ? (
              <img
                src={book.coverImage}
                alt={`Mockup da capa do livro ${book.title}`}
                loading="lazy"
              />
            ) : (
              <strong>{book.theme}</strong>
            )}
          </div>
          <h3>{book.title}</h3>
          <p>{book.theme}</p>
          <div className="catalog-card-actions">
            <Link
              className="catalog-details"
              href={`/catalogo/${book.slug}`}
              aria-label={`Ver sinopse do livro ${book.title}`}
            >
              Ver sinopse →
            </Link>
            <a
              className="catalog-buy"
              href={`mailto:contato@editoraroel.com.br?subject=${encodeURIComponent(`Quero comprar: ${book.title}`)}`}
              aria-label={`Comprar o livro ${book.title}`}
            >
              Comprar
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function CatalogoPage() {
  return (
    <SubpageShell
      eyebrow="Catálogo de Livros"
      title="Um catálogo em expansão."
      intro="Livros que formam cidadãos, acolhem famílias, inspiram leitores e transformam escolas."
    >
      <section className="content-section collection-intro">
        <p className="eyebrow eyebrow-dark">Nossas Coleções</p>
        <h2>Três coleções paradidáticas que abrem caminho para um catálogo em expansão.</h2>
        <div className="collection-summary-grid">
          <article>
            <h3>Coleção Mundo Neurodiverso</h3>
            <p>
              8 livros sobre neurodiversidade. Cada livro acompanha o Roteiro do
              Pertencimento. Oito histórias. Oito protagonistas. Uma única
              missão: mostrar que cada criança tem uma maneira única de
              aprender, sentir, pensar e enxergar o mundo.
            </p>
          </article>
          <article>
            <h3>Coleção Janelas para o Mundo</h3>
            <p>
              5 livros sobre deficiência visual, surdez, deficiência física,
              amputação e paralisia cerebral. Cada livro acompanha o Roteiro do
              Pertencimento. Cinco histórias. Cinco protagonistas. Uma única
              missão: mostrar que nenhuma limitação define o potencial de uma
              criança.
            </p>
          </article>
          <article>
            <h3>Coleção Protagonistas do Amanhã</h3>
            <p>
              3 livros sobre juventude e descoberta. Cada livro acompanha o
              Roteiro do Pertencimento. Três histórias. Três protagonistas. Uma
              única missão: mostrar que cada jovem tem o poder de transformar
              sua própria história.
            </p>
          </article>
        </div>
      </section>

      <section className="collection-section collection-blue">
        <p className="eyebrow eyebrow-dark">Coleção Mundo Neurodiverso</p>
        <h2>Oito histórias sobre neurodiversidade.</h2>
        <p className="collection-description">
          Ambientada no Colégio Carneirinhos. Cada volume é um projeto
          pedagógico completo: história ilustrada, Roteiro do Pertencimento,
          rodas de conversa e orientações para professores.
        </p>
        <CollectionGrid books={mundoNeurodiverso} />
        <p className="application-line">
          Aplicação: Educação Infantil, Ensino Fundamental, Projetos de leitura,
          Bibliotecas, AEE, Formação de professores e Educação socioemocional.
        </p>
      </section>

      <section className="collection-section collection-pink">
        <p className="eyebrow eyebrow-dark">Coleção Janelas para o Mundo</p>
        <h2>Cinco histórias sobre deficiência física e sensorial.</h2>
        <p className="collection-description">
          Em desenvolvimento. Cinco histórias sobre deficiência física e
          sensorial no Colégio Carneirinhos.
        </p>
        <CollectionGrid books={janelasParaOMundo} startAt={8} />
      </section>

      <section className="collection-section collection-yellow">
        <p className="eyebrow eyebrow-dark">Coleção Protagonistas do Amanhã</p>
        <h2>Três histórias sobre juventude e descoberta.</h2>
        <p className="collection-description">
          Uma coleção dedicada a trajetórias, talentos e conquistas que merecem ser conhecidos.
        </p>
        <CollectionGrid books={protagonistasDoAmanha} startAt={13} />
      </section>
    </SubpageShell>
  );
}
