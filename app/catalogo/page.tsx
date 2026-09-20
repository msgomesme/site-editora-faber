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
              href={`mailto:contato@editorafaber.com.br?subject=${encodeURIComponent(`Quero comprar: ${book.title}`)}`}
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
              Oito livros. Oito jeitos completamente diferentes de estar no mundo. Porque, e isso é importante, não existe uma única forma de aprender, de sentir, de processar as coisas. A gente insiste em colocar todo mundo no mesmo molde e depois fica surpreso quando alguém não cabe.
            </p>
            <p>
              Cada história tem um protagonista. Cada protagonista tem seu próprio ritmo, sua própria lógica. E todos eles seguem o Roteiro do Pertencimento, tipo um mapa que diz: "Você não está quebrado. Você está só funcionando diferente." Porque, real, essa é a verdade que a maioria das crianças neurodiversas nunca ouve.
            </p>
          </article>
          <article>
            <h3>Coleção Janelas para o Mundo</h3>
            <p>
              Cinco livros. Cinco histórias. Cinco crianças que não cabem nas
              caixinhas que a gente tenta colocar elas. Um acompanha o outro, o
              Roteiro do Pertencimento, como se fosse um mapa para mostrar que
              deficiência visual, surdez, deficiência física, amputação,
              paralisia cerebral… nenhuma dessas deficiências é o final da
              história. É só o começo.
            </p>
          </article>
          <article>
            <h3>Coleção Protagonistas do Amanhã</h3>
            <p>
              Três livros. Três vidas. Três momentos em que alguém jovem descobre que a história deles não é um script pronto que outras pessoas escreveram.
            </p>
            <p>
              Cada um segue o Roteiro do Pertencimento, aquele fio condutor que conecta as narrativas. E a missão é simples, mas radical: mostrar que transformar sua própria história não é coisa de herói de filme. É coisa de quem acorda um dia e decide que quer ser diferente do que esperavam dela.
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
