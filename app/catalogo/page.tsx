import { SubpageShell } from "../components/SiteChrome";
import {
  janelasParaOMundo,
  mundoNeurodiverso,
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
            <a className="catalog-details" href={`/catalogo/${book.slug}`}>
              Ver sinopse →
            </a>
            <a
              className="catalog-buy"
              href={`mailto:contato@roeleditora.com.br?subject=${encodeURIComponent(`Quero comprar: ${book.title}`)}`}
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
        <div className="split-panels">
          <article>
            <h3>Coleção Mundo Neurodiverso</h3>
            <p>
              8 livros sobre neurodiversidade. Cada livro acompanha o Roteiro do
              Pertencimento.
            </p>
            <p>
              Oito histórias. Oito protagonistas. Uma única missão: mostrar que
              cada criança tem uma maneira única de aprender, sentir, pensar e
              enxergar o mundo.
            </p>
          </article>
          <article>
            <h3>Coleção Janelas para o Mundo</h3>
            <p>
              5 livros sobre deficiência física e sensorial, em desenvolvimento.
            </p>
            <p>
              Cinco histórias. Cinco protagonistas. Uma missão: mostrar que
              nenhuma deficiência é maior que o potencial de uma criança.
            </p>
          </article>
          <article>
            <h3>Coleção Protagonistas</h3>
            <p>
              Uma coleção dedicada a trajetórias, talentos e conquistas que
              merecem ser conhecidos.
            </p>
            <p>
              Histórias de protagonismo que preservam legados, valorizam
              exemplos e inspiram crianças e jovens a transformar o mundo.
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
    </SubpageShell>
  );
}
