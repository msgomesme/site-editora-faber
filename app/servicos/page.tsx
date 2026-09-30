import { SubpageShell } from "../components/SiteChrome";

const editorialServices = [
  {
    title: "Publicação Assistida",
    text: "Processo completo do original ao livro impresso. Inclui revisão, diagramação, capa, ISBN, ficha catalográfica, direitos autorais e impressão.",
  },
  {
    title: "Coedição",
    text: "Divisão de custos e riscos entre editora e parceiro.",
  },
  {
    title: "Selo Editorial",
    text: "Marca própria dentro da FABER para parceiros.",
  },
  {
    title: "Impressão por Contrato",
    text: "Estrutura gráfica para imprimir materiais diversos.",
  },
];

const biographyServices = [
  "Biografias autorais",
  "Biografias com ghostwriter",
  "Memorial e livros de família",
  "Coletâneas biográficas",
  "Autobiografias",
];

export default function ServicosPage() {
  return (
    <SubpageShell
      eyebrow="Serviços"
      title="Do original ao livro impresso."
      intro="Serviços editoriais completos e solução gráfica para autores, empresas, instituições e figuras públicas."
    >
      <section className="content-section" aria-labelledby="editorial-title">
        <p className="eyebrow eyebrow-dark">Serviços Editoriais</p>
        <h2 id="editorial-title">Estrutura completa para publicar.</h2>
        <div className="service-list-grid">
          {editorialServices.map((service, index) => (
            <article key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="graphic-services">
        <p className="eyebrow eyebrow-light">Serviços Gráficos</p>
        <h2>Qualidade gráfica com responsabilidade social.</h2>
        <p>
          Impressão digital (POD) e offset, acabamento, laminação, capa dura e
          flexível, papéis especiais, plotagem, encadernação e materiais
          promocionais.
        </p>
        <strong>
          Cada serviço contratado gera recursos para o IRA INTEGRA TEA.
        </strong>
      </section>

      <section className="content-section biography-services">
        <div>
          <p className="eyebrow eyebrow-dark">Biografias e Memórias</p>
          <h2>
            Personalidades, lideranças, profissionais de destaque: seu legado
            merece uma editora à altura.
          </h2>
          <p>
            Itens inclusos: revisão, diagramação, capa, ISBN, ficha catalográfica e
            impressão.
          </p>
        </div>
        <ul>
          {biographyServices.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>

      <section className="bids-section">
        <p className="eyebrow eyebrow-dark">Editais e Licitações</p>
        <h2>
          Participamos de licitações estaduais e municipais de material
          paradidático e serviços gráficos.
        </h2>
        <a className="button section-button" href="mailto:licitacoes@editorafaber.com.br">
          licitacoes@editorafaber.com.br
        </a>
      </section>
    </SubpageShell>
  );
}
