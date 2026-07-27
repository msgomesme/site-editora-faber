import { SubpageShell } from "../components/SiteChrome";

const categories = [
  "Neurodiversidade",
  "Educação Inclusiva",
  "Dicas para Pais e Educadores",
  "Lançamentos",
  "Impacto Social",
  "Bastidores",
];

export default function BlogPage() {
  return (
    <SubpageShell
      eyebrow="Blog"
      title="Conteúdo para famílias, educadores e leitores."
    >
      <section className="content-section">
        <div className="blog-grid">
          {categories.map((category, index) => (
            <article key={category}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{category}</h3>
            </article>
          ))}
        </div>
      </section>
    </SubpageShell>
  );
}
