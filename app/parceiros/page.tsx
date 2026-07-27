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

const partners = [
  "Escolas",
  "Gráficas",
  "Distribuidoras",
  "Autores",
  "Ilustradores",
  "Empresas",
  "Terapeutas",
  "Associações",
  "ONGs",
];

export default function ParceirosPage() {
  return (
    <SubpageShell
      eyebrow="Seja Parceiro"
      title="Parcerias que ampliam o alcance da literatura e da inclusão."
      intro="Escolas, gráficas, distribuidoras, autores, ilustradores, empresas, terapeutas, associações e ONGs."
    >
      <section className="content-section educator-section">
        <div>
          <p className="eyebrow eyebrow-dark">Para Educadores</p>
          <h2>Guias, orientações e formação continuada.</h2>
        </div>
        <div>
          <p>
            Guias e orientações, planos de aula, adoção das coleções, descontos
            para escolas e formação continuada.
          </p>
          <h3>Materiais para download</h3>
          <ul>
            <li>Amostra do Roteiro do Pertencimento</li>
            <li>Guia do professor</li>
            <li>Cartaz do Mural dos Afetos</li>
          </ul>
        </div>
      </section>

      <section className="author-flow-section">
        <p className="eyebrow eyebrow-light">Para Autores</p>
        <h2>Do envio do original à distribuição.</h2>
        <ol>
          {authorFlow.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {step}
            </li>
          ))}
        </ol>
        <p>
          Inclusos: ISBN, ficha catalográfica, registro de direitos autorais e
          distribuição em marketplaces.
        </p>
        <a
          className="button button-dark"
          href="mailto:contato@roeleditora.com.br?subject=Quero publicar um livro"
        >
          Enviar original
        </a>
      </section>

      <section className="content-section">
        <p className="eyebrow eyebrow-dark">Seja Parceiro</p>
        <h2>Parcerias com</h2>
        <div className="partner-grid">
          {partners.map((partner, index) => (
            <div key={partner}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{partner}</strong>
            </div>
          ))}
        </div>
      </section>
    </SubpageShell>
  );
}
