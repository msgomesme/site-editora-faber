import { SubpageShell } from "../components/SiteChrome";

const privacyIndex = [
  ["01", "Introdução", "introducao"],
  ["02", "O que é esta Política?", "o-que-e"],
  ["03", "Princípios da LGPD", "principios-lgpd"],
  ["04", "Termos importantes", "termos"],
  ["05", "Controladora e DPO", "controladora"],
  ["06", "A quem se aplica", "aplicacao"],
  ["07", "Dados coletados", "dados-coletados"],
  ["08", "Compartilhamento", "compartilhamento"],
  ["09", "Proteção e armazenamento", "protecao"],
  ["10", "Retenção", "retencao"],
  ["11", "Cookies", "cookies"],
  ["12", "Transferência internacional", "transferencia"],
  ["13", "Direitos do titular", "direitos"],
  ["14", "Considerações finais", "consideracoes"],
];

export default function PrivacidadePage() {
  return (
    <SubpageShell
      eyebrow="Transparência e governança"
      title="Política de Privacidade"
      intro="Entenda quais dados coletamos, como utilizamos, com quem compartilhamos e quais são os seus direitos como titular de dados pessoais."
    >
      <section className="legal-section legal-section-paper">
        <div className="legal-layout">
          <aside className="legal-index" aria-label="Índice da Política de Privacidade">
            <p className="eyebrow eyebrow-dark">Índice</p>
            <h2>Política de Privacidade</h2>
            <ol>
              {privacyIndex.map(([number, title, id]) => (
                <li key={id}>
                  <a href={`#${id}`}>
                    <span>{number}</span>
                    {title}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <div className="legal-prose">
            <article id="introducao">
              <h2>1. Introdução</h2>
              <p>
                A Editora Faber é uma empresa privada com compromisso social,
                fundada pelos presidentes do IRA INTEGRA TEA, Roberto Araújo e
                Elton Henrique. A proteção dos seus dados pessoais é uma
                prioridade para nós. Esta Política de Privacidade descreve como
                coletamos, armazenamos, utilizamos e compartilhamos suas
                informações quando você acessa nosso site ou utiliza nossos
                serviços.
              </p>
            </article>

            <article id="o-que-e">
              <h2>2. O que é esta Política?</h2>
              <p>
                Esta Política estabelece as regras sobre o tratamento de dados
                pessoais coletados por meio do site da Editora Faber e de suas
                plataformas digitais. Ao acessar nosso site, você concorda com
                os termos aqui descritos.
              </p>
            </article>

            <article id="principios-lgpd">
              <h2>3. Princípios da LGPD</h2>
              <p>
                A Editora Faber se compromete a seguir os princípios da Lei Geral
                de Proteção de Dados (Lei nº 13.709/2018):
              </p>
              <ul>
                <li><strong>Legalidade:</strong> tratamento de dados com propósitos específicos, legítimos e informados ao titular.</li>
                <li><strong>Finalidade:</strong> compatibilidade do tratamento com a finalidade informada.</li>
                <li><strong>Necessidade:</strong> coleta e uso apenas de dados essenciais para a finalidade.</li>
                <li><strong>Adequação:</strong> tratamento compatível com as finalidades informadas.</li>
                <li><strong>Transparência:</strong> informações claras e precisas sobre o tratamento de dados.</li>
                <li><strong>Livre acesso:</strong> acesso fácil e gratuito à forma como tratamos os dados.</li>
                <li><strong>Qualidade dos dados:</strong> precisão, clareza e atualização das informações.</li>
                <li><strong>Confidencialidade:</strong> acesso restrito a colaboradores autorizados.</li>
                <li><strong>Segurança:</strong> medidas para prevenir danos, invasões e perda de dados.</li>
              </ul>
            </article>

            <article id="termos">
              <h2>4. Significados de termos importantes</h2>
              <dl className="legal-definition-list">
                <div><dt>ANPD</dt><dd>Autoridade Nacional de Proteção de Dados.</dd></div>
                <div><dt>Bases legais</dt><dd>Fundamentação legal que torna legítimo o tratamento de dados.</dd></div>
                <div><dt>Consentimento</dt><dd>Autorização do titular para tratamento de seus dados.</dd></div>
                <div><dt>Controlador</dt><dd>Quem decide sobre o tratamento dos dados.</dd></div>
                <div><dt>Dados pessoais</dt><dd>Qualquer informação relacionada a pessoa física identificada ou identificável, como nome, CPF, e-mail, endereço IP e cookies.</dd></div>
                <div><dt>DPO</dt><dd>Encarregado de Dados (Data Protection Officer).</dd></div>
                <div><dt>Titular</dt><dd>Pessoa natural a quem os dados se referem.</dd></div>
              </dl>
            </article>

            <article id="controladora">
              <h2>5. Informações sobre a Controladora e o Encarregado de Dados</h2>
              <div className="legal-contact-card">
                <p><strong>Controladora:</strong> Editora Faber</p>
                <p><strong>E-mail Institucional:</strong> <a href="mailto:contato@editorafaber.com.br">contato@editorafaber.com.br</a></p>
                <p><strong>Encarregado de Dados (DPO):</strong> <a href="mailto:privacidade@editorafaber.com.br">privacidade@editorafaber.com.br</a></p>
              </div>
            </article>

            <article id="aplicacao">
              <h2>6. A quem se aplica esta Política</h2>
              <p>
                Aplica-se a todas as pessoas que acessam o site da Editora Faber,
                utilizam seus serviços, adquirem seus produtos ou interagem com
                suas plataformas digitais.
              </p>
            </article>

            <article id="dados-coletados">
              <h2>7. Dados coletados e tratados pela Editora Faber</h2>
              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead>
                    <tr><th>Dados pessoais</th><th>Finalidade</th><th>Base legal</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Nome, e-mail, telefone, cargo, instituição</td><td>Cadastro para contato, newsletter e comunicações</td><td>Consentimento</td></tr>
                    <tr><td>Nome, CPF, endereço, e-mail</td><td>Venda de produtos e emissão de nota fiscal</td><td>Execução de contrato</td></tr>
                    <tr><td>Dados de navegação (IP, cookies, páginas acessadas)</td><td>Melhoria da experiência no site</td><td>Legítimo interesse</td></tr>
                    <tr><td>Dados de autores parceiros (nome, obra, biografia)</td><td>Publicação e divulgação de obras</td><td>Execução de contrato</td></tr>
                  </tbody>
                </table>
              </div>
            </article>

            <article id="compartilhamento">
              <h2>8. Com quem compartilhamos as informações</h2>
              <p>
                A Editora Faber compartilha dados apenas quando necessário para a
                prestação dos serviços, sempre com proteção contratual:
              </p>
              <ul>
                <li><strong>Fornecedores de serviços:</strong> hospedagem de site, plataforma de e-commerce, ferramentas de e-mail marketing e logística.</li>
                <li><strong>Instituições e órgãos públicos:</strong> quando exigido por lei, ordem judicial ou para cumprimento de obrigações regulatórias.</li>
                <li><strong>Parceiros comerciais:</strong> mediante autorização expressa do titular.</li>
              </ul>
              <p>A Editora Faber não comercializa dados pessoais em hipótese alguma.</p>
            </article>

            <article id="protecao">
              <h2>9. Medidas de proteção e armazenamento</h2>
              <p>Adotamos medidas técnicas e administrativas para proteger seus dados:</p>
              <ul>
                <li>Criptografia de dados sensíveis.</li>
                <li>Firewalls e sistemas de segurança.</li>
                <li>Controle de acesso restrito a colaboradores autorizados.</li>
                <li>Registro de acessos e atividades no sistema.</li>
                <li>Auditorias regulares de proteção de dados.</li>
              </ul>
            </article>

            <article id="retencao">
              <h2>10. Períodos de retenção dos dados pessoais</h2>
              <p>Seus dados serão mantidos pelo período necessário para cumprir a finalidade para a qual foram coletados, respeitando:</p>
              <ul>
                <li>A duração do seu relacionamento com a Editora Faber.</li>
                <li>Os prazos estabelecidos por leis aplicáveis, como o Marco Civil da Internet.</li>
                <li>A necessidade de cumprimento de obrigações legais ou contratuais.</li>
              </ul>
            </article>

            <article id="cookies">
              <h2>11. Utilização de cookies</h2>
              <p>Utilizamos cookies para melhorar sua experiência de navegação:</p>
              <div className="legal-table-wrap">
                <table className="legal-table">
                  <thead><tr><th>Tipo</th><th>Descrição</th></tr></thead>
                  <tbody>
                    <tr><td>Necessários</td><td>Imprescindíveis para o funcionamento do site.</td></tr>
                    <tr><td>Análise</td><td>Para melhorar o conteúdo e a navegação.</td></tr>
                    <tr><td>Funcionalidade</td><td>Para aplicar suas preferências de navegação.</td></tr>
                    <tr><td>Marketing</td><td>Para direcionar publicidade relevante.</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Você pode configurar seu navegador para recusar cookies, o que poderá impactar algumas funcionalidades do site.</p>
            </article>

            <article id="transferencia">
              <h2>12. Transferência internacional de dados</h2>
              <p>
                A Editora Faber não realiza transferência internacional de dados
                pessoais como prática regular. Caso venha a ocorrer, será
                realizada em conformidade com a LGPD, para países com nível
                adequado de proteção ou com garantias contratuais específicas.
              </p>
            </article>

            <article id="direitos">
              <h2>13. Seus direitos como titular de dados pessoais</h2>
              <p>A LGPD garante a você os seguintes direitos:</p>
              <ul>
                <li>Confirmar a existência de tratamento dos seus dados.</li>
                <li>Acessar seus dados pessoais.</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
                <li>Solicitar a portabilidade dos dados a outro fornecedor.</li>
                <li>Revogar o consentimento a qualquer tempo.</li>
                <li>Ser informado sobre o compartilhamento com terceiros.</li>
              </ul>
              <p>Para exercer seus direitos, entre em contato pelo e-mail: <a href="mailto:privacidade@editorafaber.com.br">privacidade@editorafaber.com.br</a></p>
            </article>

            <article id="consideracoes">
              <h2>14. Considerações finais</h2>
              <p>
                Esta Política de Privacidade poderá ser atualizada
                periodicamente. Recomendamos que você a revise sempre que
                visitar esta página. Caso haja mudanças substanciais que exijam
                novo consentimento, entraremos em contato.
              </p>
              <p><strong>Última atualização:</strong> julho de 2026</p>
              <p>
                Em caso de dúvidas, entre em contato pelo e-mail: <a href="mailto:privacidade@editorafaber.com.br">privacidade@editorafaber.com.br</a>
              </p>
            </article>
          </div>
        </div>
      </section>
    </SubpageShell>
  );
}
