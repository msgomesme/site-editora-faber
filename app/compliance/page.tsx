import { SubpageShell } from "../components/SiteChrome";

const codeIndex = [
  ["01", "Sobre a ROEL Editora", "sobre-roel"],
  ["02", "Propósito e valores", "proposito-valores"],
  ["03", "Sobre este Código de Conduta", "sobre-codigo"],
  ["04", "Integridade nas negociações", "negociacoes"],
  ["05", "Compromissos definidos", "compromissos"],
  ["06", "Recomendações para o ambiente de trabalho", "ambiente-trabalho"],
  ["07", "Relacionamento com setores públicos", "setores-publicos"],
  ["08", "PNLD", "pnld"],
  ["09", "Diretrizes para autores", "diretrizes-autores"],
  ["10", "O que não toleramos", "nao-toleramos"],
  ["11", "Medidas disciplinares", "medidas-disciplinares"],
  ["12", "Canal de Integridade", "canal-integridade"],
  ["13", "Comitê de Integridade", "comite-integridade"],
];

export default function CompliancePage() {
  return (
    <SubpageShell
      eyebrow="Transparência e governança"
      title="Compliance"
      intro="Princípios, compromissos e canais para uma relação ética, transparente e responsável com todos os públicos da ROEL Editora."
    >
      <section className="legal-section legal-section-paper" id="carta-presidente">
        <div className="legal-prose legal-prose-narrow">
          <p className="eyebrow eyebrow-dark">Carta do Presidente</p>
          <h2>Um compromisso que vai além do mercado editorial.</h2>
          <p>Aos nossos autores, parceiros, colaboradores e leitores,</p>
          <p>
            A ROEL Editora nasceu de um propósito que vai além do mercado
            editorial. Fundada por nós, Roberto Araújo e Elton Henrique,
            presidentes do IRA INTEGRA TEA, a editora foi criada para preencher
            uma lacuna essencial na literatura brasileira: a oferta de obras
            que tratem a neurodiversidade, as deficiências físicas e sensoriais
            e o protagonismo juvenil com a profundidade pedagógica e a
            sensibilidade humana que merecem.
          </p>
          <p>
            Desde o primeiro título, estabelecemos um compromisso que não
            negociamos: toda obra publicada pela ROEL Editora deve respeitar e
            promover a inclusão, a diversidade e a ética. Este Código de
            Conduta é a materialização desse compromisso. Ele não é apenas um
            documento formal, é o reflexo dos valores que nos guiam como
            empresa, como instituição e como pessoas.
          </p>
          <p>
            Acreditamos que integridade não se declara, se pratica. Por isso,
            este código estabelece diretrizes claras para nossos colaboradores,
            parceiros e autores, abrangendo desde a conduta no ambiente de
            trabalho até o relacionamento com o setor público, passando pela
            transparência nas negociações e pelo respeito absoluto às leis que
            regem o mercado editorial e educacional brasileiro.
          </p>
          <p>
            Convidamos cada um de vocês a ler, compreender e incorporar estes
            princípios. A ROEL Editora é uma empresa privada com compromisso
            social, e parte do valor arrecadado com nossas obras é destinada ao
            IRA INTEGRA TEA, fortalecendo o atendimento a autistas e familiares
            em situação de vulnerabilidade. Este código é mais uma ferramenta
            para garantir que esse ciclo de confiança e impacto positivo se
            mantenha sólido.
          </p>
          <p>
            Contamos com o engajamento de todos para fazer da ROEL Editora uma
            referência não apenas em qualidade editorial, mas também em
            conduta ética e responsabilidade social.
          </p>
          <div className="legal-signatures" aria-label="Presidentes da ROEL Editora">
            <div>
              <strong>Roberto Araújo</strong>
              <span>Presidente ROEL Editora</span>
            </div>
            <div>
              <strong>Elton Henrique</strong>
              <span>Presidente ROEL Editora</span>
            </div>
          </div>
        </div>
      </section>

      <section className="legal-section legal-section-night" id="codigo-de-conduta">
        <div className="legal-layout">
          <aside className="legal-index" aria-label="Índice do Código de Conduta">
            <p className="eyebrow eyebrow-light">Índice</p>
            <h2>Código de Conduta</h2>
            <ol>
              {codeIndex.map(([number, title, id]) => (
                <li key={id}>
                  <a href={`#${id}`}>
                    <span>{number}</span>
                    {title}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <div className="legal-prose legal-prose-light">
            <p className="eyebrow eyebrow-light">Código de Conduta ROEL Editora</p>
            <h2>Integridade como prática diária.</h2>

            <article id="sobre-roel">
              <h3>1. Sobre a ROEL Editora</h3>
              <p>
                A ROEL Editora é uma empresa privada com compromisso social,
                fundada pelos presidentes do IRA INTEGRA TEA, Roberto Araújo e
                Elton Henrique. Atuamos como editora completa em todos os
                segmentos literários, com serviços editoriais e gráficos para
                publicações de todos os gêneros. Nossas três primeiras coleções
                são paradidáticas, mas nosso catálogo está aberto a obras de
                todos os tipos. Parte do valor arrecadado é destinada ao IRA
                INTEGRA TEA, fortalecendo o atendimento a autistas e familiares
                em situação de vulnerabilidade.
              </p>
            </article>

            <article id="proposito-valores">
              <h3>2. Propósito e valores</h3>
              <p><strong>Missão:</strong> Produzir e disseminar literatura que acolhe e transforma, fornecendo ferramentas pedagógicas que promovam a inclusão real e o desenvolvimento da autonomia.</p>
              <p><strong>Visão:</strong> Ser a principal referência nacional em literatura paradidática voltada à neurodiversidade e ao empreendedorismo jovem até 2030.</p>
              <p><strong>Valores:</strong> Inclusão radical, rigor pedagógico, excelência gráfica, ética comercial e responsabilidade social.</p>
            </article>

            <article id="sobre-codigo">
              <h3>3. Sobre este Código de Conduta</h3>
              <p>
                Este Código de Conduta estabelece as diretrizes éticas e de
                comportamento que orientam todos os colaboradores, autores,
                parceiros, fornecedores e prestadores de serviço da ROEL
                Editora. Seu cumprimento é obrigatório e inegociável.
              </p>
            </article>

            <article id="negociacoes">
              <h3>4. Integridade nas negociações</h3>
              <p>
                Todas as negociações da ROEL Editora devem ser pautadas pela
                transparência, honestidade e boa-fé. É vedado oferecer ou
                receber vantagens indevidas, brindes excessivos ou qualquer
                forma de benefício que possa influenciar decisões comerciais.
                Conflitos de interesses devem ser declarados imediatamente ao
                Comitê de Integridade.
              </p>
            </article>

            <article id="compromissos">
              <h3>5. Compromissos definidos</h3>
              <p>A ROEL Editora se compromete a:</p>
              <ul>
                <li>Cumprir rigorosamente a legislação brasileira, em especial as Leis nº 12.764/2012 e nº 13.146/2015.</li>
                <li>Respeitar os direitos autorais e de propriedade intelectual.</li>
                <li>Manter a qualidade pedagógica e gráfica em todas as obras publicadas.</li>
                <li>Garantir que parte do valor arrecadado seja destinada ao IRA INTEGRA TEA.</li>
                <li>Promover a inclusão e a diversidade em todo o seu catálogo.</li>
              </ul>
            </article>

            <article id="ambiente-trabalho">
              <h3>6. Recomendações para o ambiente de trabalho</h3>
              <p>
                O ambiente de trabalho na ROEL Editora deve ser pautado pelo
                respeito mútuo, pela colaboração e pela valorização da
                diversidade. Não será tolerado qualquer tipo de assédio moral,
                sexual ou discriminação por raça, gênero, religião, orientação
                sexual, deficiência ou condição neurológica.
              </p>
            </article>

            <article id="setores-publicos">
              <h3>7. Relacionamento com setores públicos</h3>
              <p>
                A ROEL Editora mantém relacionamento com órgãos públicos
                exclusivamente por meio de processos transparentes e legalmente
                previstos, como licitações, editais públicos (PNLD, licitações
                estaduais e municipais) e convênios. É vedada qualquer prática
                de favorecimento, tráfico de influência ou pagamento de
                vantagens a agentes públicos.
              </p>
            </article>

            <article id="pnld">
              <h3>8. PNLD — Programa Nacional do Livro e do Material Didático</h3>
              <p>
                A participação da ROEL Editora no PNLD e demais programas
                governamentais será conduzida com estrita observância às normas
                do FNDE e do MEC, garantindo a lisura de todo o processo, desde
                a inscrição até a distribuição das obras.
              </p>
            </article>

            <article id="diretrizes-autores">
              <h3>9. Diretrizes para autores</h3>
              <p>Todo autor que publica com a ROEL Editora deve:</p>
              <ul>
                <li>Respeitar os valores de inclusão e diversidade da editora.</li>
                <li>Garantir a originalidade de sua obra e a inexistência de plágio.</li>
                <li>Cumprir os prazos e condições estabelecidos em contrato.</li>
                <li>Autorizar a destinação de parte dos recursos ao IRA INTEGRA TEA.</li>
              </ul>
            </article>

            <article id="nao-toleramos">
              <h3>10. O que não toleramos</h3>
              <ul>
                <li>Fraude, corrupção ou suborno em qualquer nível.</li>
                <li>Assédio moral, sexual ou discriminação de qualquer natureza.</li>
                <li>Plágio ou violação de direitos autorais.</li>
                <li>Desvio de recursos ou materiais da editora.</li>
                <li>Conflito de interesses não declarado.</li>
                <li>Qualquer forma de retaliação contra denunciantes de boa-fé.</li>
              </ul>
            </article>

            <article id="medidas-disciplinares">
              <h3>11. Medidas disciplinares</h3>
              <p>
                O descumprimento deste Código de Conduta sujeitará o infrator a
                medidas disciplinares proporcionais à gravidade da falta,
                podendo incluir:
              </p>
              <ul>
                <li>Advertência verbal ou escrita.</li>
                <li>Suspensão temporária.</li>
                <li>Rescisão contratual ou de parceria.</li>
                <li>Comunicação às autoridades competentes, quando couber.</li>
              </ul>
            </article>

            <article id="comite-integridade">
              <h3>13. Comitê de Integridade</h3>
              <p>
                O Comitê de Integridade é o órgão responsável por receber,
                apurar e deliberar sobre as denúncias encaminhadas ao Canal de
                Integridade, garantindo imparcialidade, confidencialidade e
                respeito ao direito de defesa em todos os processos.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="legal-section legal-section-sage" id="canal-integridade">
        <div className="legal-layout legal-layout-channel">
          <div className="legal-prose">
            <p className="eyebrow eyebrow-dark">12 · Canal de Integridade</p>
            <h2>Fale com o Comitê de Integridade.</h2>
            <p>
              A ROEL Editora mantém um Canal de Integridade permanente,
              acessível a todos os colaboradores, autores, parceiros,
              fornecedores e ao público em geral, para o recebimento de
              denúncias, dúvidas e orientações relacionadas a condutas éticas e
              ao cumprimento deste Código de Conduta.
            </p>
            <h3>O que pode ser reportado</h3>
            <ul>
              <li>Violações ao Código de Conduta.</li>
              <li>Condutas antiéticas ou ilegais.</li>
              <li>Fraudes, corrupção ou suborno.</li>
              <li>Conflitos de interesses não declarados.</li>
              <li>Desvios de recursos ou materiais.</li>
              <li>Assédio moral, sexual ou discriminação.</li>
              <li>Irregularidades em processos licitatórios e contratos públicos.</li>
              <li>Qualquer outra situação que contrarie os princípios da ROEL Editora.</li>
            </ul>
            <h3>Como funciona</h3>
            <p>
              O Canal de Integridade é sigiloso e garante o anonimato do
              denunciante. Todas as denúncias são recebidas e tratadas pelo
              Comitê de Integridade, que analisa cada caso com imparcialidade,
              confidencialidade e respeito.
            </p>
            <h3>Princípios do canal</h3>
            <ul>
              <li><strong>Sigilo absoluto:</strong> a identidade do denunciante é protegida em todas as etapas.</li>
              <li><strong>Não retaliação:</strong> é vedada qualquer forma de retaliação contra denunciantes de boa-fé.</li>
              <li><strong>Apuração justa:</strong> toda denúncia é investigada de forma imparcial, garantindo o direito de defesa.</li>
              <li><strong>Registro documental:</strong> cada denúncia recebe um número de protocolo e é documentada integralmente.</li>
            </ul>
            <p className="legal-contact">
              E-mail: <a href="mailto:integridade@roeleditora.com.br">integridade@roeleditora.com.br</a>
            </p>
            <p>
              O Comitê de Integridade tem até 30 dias corridos para concluir a
              apuração preliminar, prorrogável por mais 30 dias mediante
              justificativa.
            </p>
          </div>

          <form
            className="integrity-form"
            action="mailto:integridade@roeleditora.com.br"
            method="post"
            encType="multipart/form-data"
          >
            <p className="eyebrow eyebrow-dark">Formulário de relato</p>
            <label>
              Nome <span>(opcional)</span>
              <input name="nome" type="text" placeholder="Como prefere ser chamado?" />
            </label>
            <label>
              E-mail <span>(opcional)</span>
              <input name="email" type="email" placeholder="voce@exemplo.com" />
            </label>
            <label>
              Tipo de relato
              <select name="tipo" defaultValue="">
                <option value="" disabled>Selecione</option>
                <option>Denúncia</option>
                <option>Dúvida</option>
                <option>Orientação</option>
              </select>
            </label>
            <label>
              Categoria
              <select name="categoria" defaultValue="">
                <option value="" disabled>Selecione</option>
                <option>Violação ao Código de Conduta</option>
                <option>Fraude ou corrupção</option>
                <option>Conflito de interesses</option>
                <option>Assédio ou discriminação</option>
                <option>Irregularidade em licitação/contrato público</option>
                <option>Desvio de recursos</option>
                <option>Outros</option>
              </select>
            </label>
            <label className="integrity-form-full">
              Relato
              <textarea name="relato" required placeholder="Descreva o que aconteceu" />
            </label>
            <label className="integrity-form-full">
              Anexar arquivos <span>(opcional, até 10 MB)</span>
              <input name="anexo" type="file" />
            </label>
            <label className="integrity-form-full">
              Número de protocolo anterior <span>(opcional)</span>
              <input name="protocolo" type="text" placeholder="Se aplicável" />
            </label>
            <button className="button button-dark" type="submit">Enviar relato →</button>
            <p className="form-note">O envio abre o aplicativo de e-mail configurado no seu dispositivo.</p>
          </form>
        </div>
      </section>
    </SubpageShell>
  );
}
