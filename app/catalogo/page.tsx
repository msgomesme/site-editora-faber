import { SubpageShell } from "../components/SiteChrome";

const mundoNeurodiverso = [
  ["O Menino que Via o Mundo Diferente", "TEA"],
  ["A Menina dos Mil Pensamentos", "TDAH"],
  ["O Menino que Lia de Outro Jeito", "Dislexia"],
  ["O Menino do Coração Valente", "TOD"],
  ["A Menina que Carregava Nuvens", "Ansiedade"],
  ["O Menino dos Pequenos Rituais", "TOC"],
  ["A Menina do Sorriso que Abraçava o Mundo", "Síndrome de Down"],
  ["A Menina das Ideias Brilhantes", "Altas Habilidades"],
];

const janelasParaOMundo = [
  ["A Menina que Enxergava com as Mãos", "Deficiência Visual"],
  ["O Menino que Ouvia com os Olhos", "Surdez"],
  ["O Menino das Rodas que Levavam Sonhos", "Deficiência Física"],
  ["A Menina das Mãos Corajosas", "Amputação"],
  ["O Menino que Pintava Sonhos", "Paralisia Cerebral"],
];

function CollectionGrid({
  books,
  startAt = 0,
}: {
  books: string[][];
  startAt?: number;
}) {
  return (
    <div className="collection-grid">
      {books.map(([title, theme], index) => (
        <article key={title}>
          <span>{String(startAt + index + 1).padStart(2, "0")}</span>
          <h3>{title}</h3>
          <p>{theme}</p>
          <a
            className="catalog-buy"
            href={`mailto:contato@roeleditora.com.br?subject=${encodeURIComponent(`Quero comprar: ${title}`)}`}
          >
            Comprar
          </a>
        </article>
      ))}
    </div>
  );
}

export default function CatalogoPage() {
  return (
    <SubpageShell
      eyebrow="Catálogo de Livros"
      title="Duas coleções paradidáticas. Um catálogo em expansão."
      intro="Livros que formam cidadãos, acolhem famílias, inspiram leitores e transformam escolas."
    >
      <section className="content-section collection-intro">
        <p className="eyebrow eyebrow-dark">Nossas Coleções</p>
        <h2>Duas coleções paradidáticas que abrem caminho para um catálogo em expansão.</h2>
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
