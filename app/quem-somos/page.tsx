import { SubpageShell } from "../components/SiteChrome";

const team = [
  {
    name: "Roberto Araújo",
    role: "Presidente e Editor Chefe",
    description:
      "Enfermeiro, empresário e presidente do IRA INTEGRA TEA. Diagnosticado com TEA e TDAH aos 48 anos. Autor da Coleção Mundo Neurodiverso.",
  },
  {
    name: "Elton Henrique",
    role: "Presidente e Diretor Administrativo",
    description:
      "Empresário, vice-presidente do IRA INTEGRA TEA. Responsável pela gestão, estrutura e expansão da editora.",
  },
  {
    name: "Fabio Cavalcanti",
    role: "Diretor Pedagógico",
    description:
      "Líder do NAPE (Núcleo de Apoio à Prática Educativa). Responsável pela validação clínica e pedagógica das obras, alinhamento à BNCC, produção de materiais de apoio, curadoria técnica e coordenação de revisores.",
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
      intro="A Editora Faber nasceu da parceria entre Roberto Araújo e Elton Henrique."
    >
      <section className="content-section prose-grid">
        <h2>Uma editora completa</h2>
        <div className="prose-stack">
          <p>
            A <strong>Editora Faber</strong> nasceu da parceria entre Roberto
            Araújo e Elton Henrique, dois empreendedores com vivências
            complementares e um propósito em comum: transformar a literatura e
            a educação em ferramentas de inclusão, desenvolvimento humano e
            transformação social.
          </p>
          <p>
            Roberto Araújo, enfermeiro, empresário e presidente do IRA INTEGRA
            TEA, diagnosticado tardiamente com TEA nível 1 de suporte e TDAH aos
            48 anos, traz a vivência clínica, pessoal e literária. Elton
            Henrique, vice-presidente do IRA INTEGRA TEA, agrega a visão de
            gestão, estrutura e expansão. Juntos, formam a base de uma editora
            completa.
          </p>
          <p>
            A Editora Faber atua em todos os segmentos: ficção e não ficção,
            literatura infantojuvenil, obras paradidáticas, biografias e
            memórias, livros técnicos e científicos, autoajuda e desenvolvimento
            pessoal. Não nos limitamos a gêneros ou nichos. Publicamos livros
            que formam cidadãos, acolhem famílias, inspiram leitores e
            transformam escolas.
          </p>
          <p>
            <strong>Nossas três primeiras coleções:</strong> a{" "}
            <em>Coleção Mundo Neurodiverso</em>, a{" "}
            <em>Coleção Janelas para o Mundo</em> e a{" "}
            <em>Coleção Protagonistas do Amanhã</em>, são coleções
            paradidáticas que nasceram do protagonismo de Roberto Araújo à
            frente do IRA INTEGRA TEA. Elas representam o ponto de partida de um
            catálogo que será tão diverso quanto os leitores que queremos
            alcançar.
          </p>
          <p>
            Além da produção própria, oferecemos serviços editoriais completos e
            solução gráfica para autores independentes, empresas, instituições e
            figuras públicas que desejam publicar suas obras com qualidade
            profissional.
          </p>
          <p>
            Parte do valor arrecadado com as vendas é destinada ao{" "}
            <strong>IRA INTEGRA TEA</strong>, fortalecendo o atendimento a
            autistas e familiares em situação de vulnerabilidade social. Cada
            publicação representa um investimento direto na infância, na
            inclusão e na valorização da diversidade humana. Não vendemos apenas
            livros. Entregamos ferramentas de transformação.
          </p>
        </div>
      </section>

      <section className="quote-section">
        <p>
          Não publicamos apenas livros. Entregamos um universo literário onde
          toda história encontra seu lugar.
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

      <section className="content-section split-panels" aria-labelledby="nape-title">
        <article>
          <p className="eyebrow eyebrow-dark">NAPE</p>
          <h2 id="nape-title">Núcleo de Apoio à Prática Educativa</h2>
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

      <section className="impact-home impact-home-detailed" aria-labelledby="impact-title">
        <p className="eyebrow eyebrow-dark">Impacto Social</p>
        <h2 id="impact-title">Compromisso Social e Legado ODS</h2>
        <p>
          A Editora Faber é uma empresa privada com compromisso social. Parte do
          valor arrecadado com as vendas é destinada ao IRA INTEGRA TEA,
          instituição que presidimos e que foi uma das 1.200 organizações
          selecionadas para o Selo ODS Brasil 2026, integrante do legado da
          Agenda 2030 da ONU.
        </p>
        <p>
          Isso significa que cada livro adquirido, cada serviço contratado e
          cada parceria firmada com a Editora Faber gera impacto social real,
          reconhecido internacionalmente. Não vendemos apenas livros. Entregamos
          ferramentas de transformação.
        </p>
      </section>
    </SubpageShell>
  );
}
