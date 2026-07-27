"use client";

import { SubpageShell } from "../components/SiteChrome";

const subjects = [
  "Quero comprar livros",
  "Quero publicar um livro",
  "Quero serviços gráficos",
  "Quero ser parceiro",
  "Imprensa",
  "Outro",
];

const faq = [
  [
    "O que é um livro paradidático?",
    "Complemento pedagógico alinhado à BNCC.",
  ],
  ["Como comprar os livros?", "Amazon e em breve loja própria."],
  [
    "Aceitam compras de escolas?",
    "Sim, com descontos para adoções.",
  ],
  [
    "Como publicar um livro?",
    "Envie original pelo formulário Para Autores.",
  ],
  [
    "Imprimem materiais de terceiros?",
    "Sim, serviços gráficos completos.",
  ],
  [
    "O que é o NAPE?",
    "Núcleo de Apoio à Prática Educativa.",
  ],
  [
    "Comprar ajuda o IRA?",
    "Sim. A ROEL é um empreendimento social.",
  ],
  [
    "Participam de licitações?",
    "Sim. Email: licitacoes@roeleditora.com.br",
  ],
  [
    "Publicam biografias?",
    "Sim. Autorais, com ghostwriter, memórias e coletâneas.",
  ],
];

export default function ContatoPage() {
  return (
    <SubpageShell
      eyebrow="Contato"
      title="Fale com a ROEL Editora."
      intro="contato@roeleditora.com.br"
    >
      <section className="contact-section">
        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            window.location.href =
              "mailto:contato@roeleditora.com.br?subject=Contato pelo site";
          }}
        >
          <label>
            Nome
            <input name="name" required />
          </label>
          <label>
            E-mail
            <input name="email" type="email" required />
          </label>
          <label className="full-field">
            Assunto
            <select name="subject" required defaultValue="">
              <option value="" disabled>
                Selecione
              </option>
              {subjects.map((subject) => (
                <option key={subject}>{subject}</option>
              ))}
            </select>
          </label>
          <label className="full-field">
            Mensagem
            <textarea name="message" rows={6} required />
          </label>
          <button className="button button-sage full-field" type="submit">
            Enviar
          </button>
        </form>
      </section>

      <section className="faq-section" aria-labelledby="faq-title">
        <p className="eyebrow eyebrow-dark">FAQ</p>
        <h2 id="faq-title">Perguntas frequentes</h2>
        <div>
          {faq.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </SubpageShell>
  );
}
