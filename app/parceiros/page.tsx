import { SubpageShell } from "../components/SiteChrome";

const authorFlow = [
  "Envio do original",
  "Curadoria",
  "Proposta",
  "Produção",
  "ISBN e registro",
  "Impressão",
  "Distribuição",
];

const partnersData = [
  {
    id: "escolas",
    name: "Escolas",
    title: "Uma educação mais inclusiva",
    content: (
      <p>
        Na Faber, acreditamos que toda escola pode ser um lugar de pertencimento. Oferecemos material paradidático com ficha pedagógica alinhada à BNCC, validado clinicamente pelo NAPE. Seus professores ganham tempo, seus alunos ganham acolhimento. Vamos construir juntos uma educação mais inclusiva?
      </p>
    ),
  },
  {
    id: "graficas",
    name: "Gráficas",
    title: "Imprima propósito",
    content: (
      <p>
        Buscamos parceiros que imprimam mais que livros, que imprimam propósito. Com tiragens programadas e contrato contínuo, sua gráfica terá previsibilidade e fará parte de um projeto que leva inclusão para milhares de crianças. Vamos crescer juntos?
      </p>
    ),
  },
  {
    id: "distribuidoras",
    name: "Distribuidoras",
    title: "Leve histórias para todo o Brasil",
    content: (
      <p>
        Nosso catálogo tem um diferencial que o mercado reconhece: livros com selo de qualidade pedagógica e impacto social real. Queremos levar essas histórias para todo o Brasil. Se sua distribuidora busca um produto que vende por propósito, a Faber é a parceira certa.
      </p>
    ),
  },
  {
    id: "autores",
    name: "Autores",
    title: "Uma casa para a sua obra",
    content: (
      <p>
        Seu livro merece uma casa que acredite nele. Na Faber, publicamos sem custo para o autor, com suporte editorial completo, revisão pedagógica pelo NAPE e distribuição em todo o país. Se sua obra tem alma e propósito, queremos conhecê-la.
      </p>
    ),
  },
  {
    id: "ilustradores",
    name: "Ilustradores",
    title: "Dê vida às histórias",
    content: (
      <p>
        Suas ilustrações podem dar rosto e cor a histórias que transformam vidas. Na Faber, você encontra trabalho contínuo em coleções inteiras, fee justo por página e crédito em cada obra. Venha fazer parte do time que dá vida aos personagens da inclusão.
      </p>
    ),
  },
  {
    id: "empresas",
    name: "Empresas",
    title: "Transforme através do patrocínio cultural",
    content: (
      <p>
        Sua empresa pode transformar o jeito que as crianças enxergam a diversidade. Através do patrocínio cultural via Lei Rouanet, você investe em livros infantis sobre inclusão com abatimento fiscal integral. Sua marca associada a um projeto que realmente faz a diferença.
      </p>
    ),
  },
  {
    id: "terapeutas",
    name: "Terapeutas",
    title: "Apoio para o seu trabalho no consultório",
    content: (
      <p>
        Os livros da Faber são desenvolvidos com rigor clínico e pedagógico para apoiar seu trabalho no consultório. Cada obra vem com a Ficha Pertencer, um material de apoio pronto para usar com seus pacientes. Desconto profissional exclusivo para quem cuida.
      </p>
    ),
  },
  {
    id: "associacoes",
    name: "Associações",
    title: "Caminhando lado a lado com sua causa",
    content: (
      <p>
        A Faber nasceu dentro do IRA INTEGRA TEA e tem o terceiro setor no DNA. Queremos caminhar lado a lado com sua associação, oferecendo condições especiais e a oportunidade de validar conteúdos que representem sua causa. Juntos, somos mais fortes.
      </p>
    ),
  },
  {
    id: "ongs",
    name: "ONGs",
    title: "Inclusão real onde mais importa",
    content: (
      <p>
        Levar informação de qualidade a quem mais precisa é a nossa missão. Oferecemos condições especiais para ONGs que levam nossos livros a comunidades vulneráveis. Inclusão real é aquela que chega aonde mais importa. Vamos fazer isso juntos?
      </p>
    ),
  },
];

export default function ParceirosPage() {
  return (
    <SubpageShell
      eyebrow="Seja Parceiro"
      title="Parcerias que ampliam o alcance da literatura e da inclusão."
      intro="Escolas, gráficas, distribuidoras, autores, ilustradores, empresas, terapeutas, associações e ONGs."
    >
      <section className="content-section educator-section" aria-labelledby="educator-title">
        <div>
          <p className="eyebrow eyebrow-dark">Para Educadores</p>
          <h2 id="educator-title">Guias, orientações e formação continuada.</h2>
        </div>
        <div>
          <p>
            Guias e orientações, planos de aula, adoção das coleções, descontos
            para escolas e formação continuada.
          </p>
          <h3>Materiais de Apoio</h3>
          <ul>
            <li>Amostra do Roteiro do Pertencimento</li>
            <li>Guia do professor</li>
            <li>Cartaz do Mural dos Afetos</li>
          </ul>
        </div>
      </section>

      <section className="author-flow-section" aria-labelledby="author-title">
        <p className="eyebrow eyebrow-light">Para Autores</p>
        <h2 id="author-title">Do envio do original à distribuição.</h2>
        <ol>
          {authorFlow.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {step}
            </li>
          ))}
        </ol>
        <p>
          Itens inclusos: ISBN, ficha catalográfica, registro de direitos autorais e
          distribuição em marketplaces.
        </p>
        <a
          className="button button-dark"
          href="mailto:contato@editorafaber.com.br?subject=Quero publicar um livro"
        >
          Enviar original
        </a>
      </section>

      <section className="content-section" aria-labelledby="partners-title">
        <p className="eyebrow eyebrow-dark">Seja Parceiro</p>
        <h2 id="partners-title">Parcerias Estratégicas</h2>
        <div className="blog-post-grid">
          {partnersData.map((partner, index) => (
            <details
              key={partner.id}
              id={partner.id}
              className="blog-post"
              aria-labelledby={`${partner.id}-title`}
            >
              <summary className="blog-post-header">
                <p className="eyebrow eyebrow-dark">
                  {String(index + 1).padStart(2, "0")} · {partner.name}
                </p>
                <span className="summary-title" id={`${partner.id}-title`}>
                  {partner.title || "Conteúdo em desenvolvimento"}
                </span>
              </summary>
              <div className="blog-post-body">
                {partner.content || (
                  <p>Estamos preparando mais informações sobre esta parceria.</p>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>
    </SubpageShell>
  );
}
