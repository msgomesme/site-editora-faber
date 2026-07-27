import { SubpageShell } from "../components/SiteChrome";

const cnaes = [
  ["5811-5/00", "Edição de livros"],
  ["5821-2/00", "Edição integrada à impressão de livros"],
  ["1811-3/02", "Impressão de livros, revistas e outras publicações periódicas"],
  ["1813-0/01", "Impressão de material para uso publicitário"],
  ["1821-1/00", "Serviços de pré-impressão"],
  ["1822-9/01", "Serviços de acabamentos gráficos"],
  ["5819-1/00", "Edição de cadastros, listas e outros produtos gráficos"],
  ["4761-0/01", "Comércio varejista de livros"],
  ["4761-0/03", "Comércio varejista de artigos de papelaria e escritório"],
  ["7490-1/04", "Intermediação e agenciamento de serviços e negócios"],
  ["7410-2/02", "Atividades de design gráfico"],
  ["7319-0/02", "Promoção de vendas"],
  ["7020-4/00", "Consultoria em gestão empresarial"],
  ["8599-6/99", "Outras atividades de ensino"],
  ["6319-4/00", "Portais, provedores de conteúdo e outros serviços de informação na internet"],
];

const privacyTopics = [
  "Dados coletados",
  "Uso dos dados",
  "Compartilhamento",
  "Direitos do titular",
  "DPO",
];

export default function PrivacidadePage() {
  return (
    <SubpageShell
      eyebrow="Política de Privacidade"
      title="LGPD"
      intro="Dados coletados, uso, compartilhamento, direitos do titular e DPO."
    >
      <section className="content-section">
        <div className="privacy-grid">
          {privacyTopics.map((topic, index) => (
            <article key={topic}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{topic}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="cnae-section">
        <p className="eyebrow eyebrow-dark">CNAEs do CNPJ</p>
        <h2>Principal</h2>
        <div className="cnae-primary">
          <strong>5811-5/00</strong>
          <span>Edição de livros</span>
        </div>
        <h2>Secundários</h2>
        <div className="cnae-list">
          {cnaes.slice(1).map(([code, description]) => (
            <div key={code}>
              <strong>{code}</strong>
              <span>{description}</span>
            </div>
          ))}
        </div>
      </section>
    </SubpageShell>
  );
}
