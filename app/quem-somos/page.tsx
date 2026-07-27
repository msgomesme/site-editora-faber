import { SubpageShell } from "../components/SiteChrome";

const team = [
  {
    name: "Roberto Xavier de Araújo",
    role: "Presidente e Editor Chefe",
    description:
      "Enfermeiro, empresário e presidente do IRA INTEGRA TEA. Diagnosticado com TEA e TDAH aos 48 anos. Autor da Coleção Mundo Neurodiverso.",
  },
  {
    name: "Elton Henrique",
    role: "Vice-Presidente e Diretor Administrativo",
    description:
      "Empresário, vice-presidente do IRA INTEGRA TEA. Responsável pela gestão, estrutura e expansão da editora.",
  },
  {
    name: "NAPE",
    role: "Núcleo de Apoio à Prática Educativa",
    description:
      "Equipe pedagógica responsável pela validação clínica e pedagógica de cada obra, alinhamento com a BNCC e produção dos materiais de apoio.",
  },
  {
    name: "Parceiros Editoriais",
    role: "Rede especializada",
    description:
      "Rede de freelancers especializados: revisores, diagramadores, ilustradores, designers, consultores gráficos e ghostwriters.",
  },
];

export default function QuemSomosPage() {
  return (
    <SubpageShell
      eyebrow="Quem Somos"
      title="Literatura e educação como ferramentas de transformação."
      intro="A ROEL Editora nasceu da parceria entre Roberto Xavier de Araújo e Elton Henrique."
    >
      <section className="content-section prose-grid">
        <h2>Uma editora completa</h2>
        <div className="prose-stack">
          <p>
            A ROEL Editora nasceu da parceria entre Roberto Xavier de Araújo e
            Elton Henrique, dois empreendedores com vivências complementares e
            um propósito em comum: transformar a literatura e a educação em
            ferramentas de inclusão, desenvolvimento humano e transformação
            social.
          </p>
          <p>
            Roberto, enfermeiro, empresário e presidente do IRA INTEGRA TEA,
            diagnosticado com TEA e TDAH aos 48 anos, traz a vivência clínica,
            pessoal e literária. Elton, vice-presidente do IRA, agrega a visão de
            gestão, estrutura e expansão. Juntos, formam a base de uma editora
            completa.
          </p>
          <p>
            A ROEL Editora é uma editora completa. Atuamos em todos os
            segmentos: ficção e não ficção, literatura infantojuvenil, obras
            paradidáticas, biografias e memórias, livros técnicos e científicos,
            autoajuda e desenvolvimento pessoal. Não nos limitamos a gêneros ou
            nichos. Publicamos livros que formam cidadãos, acolhem famílias,
            inspiram leitores e transformam escolas.
          </p>
          <p>
            Nossas duas primeiras coleções, a Coleção Mundo Neurodiverso e a
            Coleção Janelas para o Mundo, são coleções paradidáticas que nasceram
            do protagonismo de Roberto à frente do IRA INTEGRA TEA. Elas
            representam o ponto de partida de um catálogo que será tão diverso
            quanto os leitores que queremos alcançar.
          </p>
          <p>
            Além da produção própria, oferecemos serviços editoriais completos e
            solução gráfica para autores independentes, empresas, instituições e
            figuras públicas que desejam publicar suas obras com qualidade
            profissional.
          </p>
          <p>
            Cada publicação representa um investimento direto na infância, na
            inclusão e na valorização da diversidade humana. Não vendemos apenas
            livros. Entregamos ferramentas de transformação.
          </p>
        </div>
      </section>

      <section className="quote-section">
        <p>
          Não estamos construindo apenas uma editora. Estamos construindo um
          universo literário onde toda história encontra seu lugar.
        </p>
      </section>

      <section className="content-section" aria-labelledby="team-title">
        <p className="eyebrow eyebrow-dark">Nossa Equipe</p>
        <h2 id="team-title">Vivências complementares, um propósito comum.</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <article key={member.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{member.name}</h3>
              <strong>{member.role}</strong>
              <p>{member.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section split-panels">
        <article>
          <p className="eyebrow eyebrow-dark">NAPE</p>
          <h2>Núcleo de Apoio à Prática Educativa</h2>
          <p>
            Validação pedagógica e clínica das obras, alinhamento BNCC, produção
            de materiais de apoio, suporte a escolas e formação de educadores.
          </p>
        </article>
        <article>
          <p className="eyebrow eyebrow-dark">Roteiro do Pertencimento</p>
          <h2>Atividades socioemocionais</h2>
          <p>
            Percepção sensorial, expressão de sentimentos, fortalecimento de
            vínculos, valorização da neurodiversidade e rodas de conversa.
          </p>
          <p>Uso: sala de aula, casa, AEE, terapia e rodas com famílias.</p>
        </article>
      </section>

      <section className="impact-home">
        <p className="eyebrow eyebrow-dark">Impacto Social</p>
        <h2>
          A ROEL Editora é um empreendimento do IRA INTEGRA TEA. Recursos são
          revertidos para o atendimento de autistas em situação de
          vulnerabilidade.
        </h2>
        <p>Não vendemos apenas livros. Entregamos ferramentas de transformação.</p>
      </section>
    </SubpageShell>
  );
}
