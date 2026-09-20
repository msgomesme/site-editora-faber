import { SubpageShell } from "../components/SiteChrome";

const questions = [
  [
    "A Editora Faber vende meus dados para terceiros?",
    "Não. A Editora Faber não comercializa dados pessoais em hipótese alguma. Compartilhamos informações apenas quando necessário para a prestação dos serviços, como entrega de produtos, emissão de nota fiscal e envio de comunicados, ou por obrigação legal.",
  ],
  [
    "Quais dados a Editora Faber coleta?",
    "Coletamos nome, e-mail, telefone, CPF, endereço, dados de navegação (cookies e IP) e, no caso de autores parceiros, informações relacionadas às obras publicadas. A coleta é limitada ao necessário para cada finalidade.",
  ],
  [
    "Como posso acessar ou corrigir meus dados?",
    "Basta enviar um e-mail para privacidade@editorafaber.com.br solicitando acesso ou correção. Responderemos em até 15 dias úteis.",
  ],
  [
    "Como posso solicitar a exclusão dos meus dados?",
    "Envie um e-mail para privacidade@editorafaber.com.br solicitando a exclusão. Seus dados serão apagados, exceto quando a lei exigir a manutenção por prazos específicos, como no caso de notas fiscais.",
  ],
  [
    "O que são cookies e como posso controlá-los?",
    "Cookies são pequenos arquivos que armazenam preferências de navegação. Você pode configurar seu navegador para aceitar, recusar ou excluir cookies a qualquer momento.",
  ],
  [
    "A Editora Faber compartilha dados com o IRA INTEGRA TEA?",
    "A Editora Faber é uma empresa privada com compromisso social. Parte do valor arrecadado é destinada ao IRA INTEGRA TEA, mas os dados pessoais dos clientes não são compartilhados com a instituição sem autorização prévia.",
  ],
  [
    "Meus dados estão seguros com a Editora Faber?",
    "Sim. Utilizamos criptografia, firewalls, controle de acesso restrito e auditorias regulares para proteger suas informações.",
  ],
  [
    "Por quanto tempo meus dados ficam armazenados?",
    "Pelo tempo necessário para cumprir a finalidade da coleta, respeitando prazos legais, como 6 meses para registros de acesso e 5 anos para notas fiscais.",
  ],
  [
    "Como saber se houve mudanças nesta Política?",
    "Recomendamos visitar a página de Política de Privacidade periodicamente. Alterações relevantes serão comunicadas por e-mail quando necessário.",
  ],
  [
    "O que é a LGPD?",
    "É a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), que regula como empresas devem coletar, armazenar, tratar e compartilhar dados pessoais de cidadãos brasileiros.",
  ],
  [
    "Quem é o Encarregado de Dados (DPO) da Editora Faber?",
    "O DPO pode ser contatado pelo e-mail privacidade@editorafaber.com.br para qualquer dúvida ou solicitação relacionada à proteção dos dados.",
  ],
  [
    "O que fazer se eu identificar algum problema com meus dados?",
    "Entre em contato imediatamente pelo e-mail privacidade@editorafaber.com.br. Em caso de incidente de segurança, notificaremos você e a ANPD sempre que necessário.",
  ],
];

export default function FaqPage() {
  return (
    <SubpageShell
      eyebrow="Transparência e governança"
      title="Perguntas frequentes"
      intro="Respostas claras para as dúvidas mais comuns sobre privacidade, dados pessoais e segurança na Editora Faber."
    >
      <section className="faq-section">
        <div className="faq-intro">
          <p className="eyebrow eyebrow-dark">FAQ</p>
          <h2>Informação acessível também é cuidado.</h2>
          <p>
            Não encontrou o que procura? Fale com nosso Encarregado de Dados
            pelo e-mail <a href="mailto:privacidade@editorafaber.com.br">privacidade@editorafaber.com.br</a>.
          </p>
        </div>
        <div className="faq-list">
          {questions.map(([question, answer], index) => (
            <details key={question}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {question}
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </SubpageShell>
  );
}
