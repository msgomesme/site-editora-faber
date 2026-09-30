"use client";

import { useEffect } from "react";
import { SubpageShell } from "../components/SiteChrome";

export default function BlogPage() {
  useEffect(() => {
    const openArticleFromHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;

      const article = document.getElementById(id);
      if (!(article instanceof HTMLDetailsElement)) return;

      article.open = true;
      window.requestAnimationFrame(() => {
        article.scrollIntoView({ block: "start", behavior: "smooth" });
      });
    };

    openArticleFromHash();
    window.addEventListener("hashchange", openArticleFromHash);
    return () => window.removeEventListener("hashchange", openArticleFromHash);
  }, []);

  return (
    <SubpageShell
      eyebrow="Blog"
      title="Conteúdo para famílias, educadores e leitores."
    >
      <section className="content-section">
        <div className="blog-post-grid">
        <details
          id="neurodiversidade"
          className="blog-post"
          aria-labelledby="neurodiversidade-title"
        >
          <summary className="blog-post-header">
            <p className="eyebrow eyebrow-dark">01 · Neurodiversidade</p>
            <span className="summary-title" id="neurodiversidade-title">
              O que é e por que esse conceito importa na educação
            </span>
          </summary>

          <div className="blog-post-body">
            <p>
              Você já ouviu falar em neurodiversidade? O termo foi criado pela
              socióloga australiana Judy Singer nos anos 1990 e propõe uma
              mudança de olhar: em vez de enxergar condições como autismo, TDAH,
              dislexia, discalculia, TOD, TOC, síndrome de Down e altas
              habilidades como “transtornos” ou “doenças a serem curadas”, a
              neurodiversidade as reconhece como variações naturais do cérebro
              humano.
            </p>
            <p>
              Assim como existe biodiversidade na natureza, diferentes espécies,
              climas e ecossistemas, existe diversidade entre os cérebros
              humanos. Cada pessoa processa informações, sente emoções, aprende
              e se comunica de um jeito único. E isso não é um defeito. É
              diversidade.
            </p>

            <h3>O que diz a legislação brasileira</h3>
            <p>
              No Brasil, a Lei Berenice Piana (Lei nº 12.764/2012) instituiu a
              Política Nacional de Proteção dos Direitos da Pessoa com
              Transtorno do Espectro Autista e garantiu, entre outros direitos,
              o acesso à educação inclusiva. Já a Lei Brasileira de Inclusão da
              Pessoa com Deficiência (Lei nº 13.146/2015) assegura que nenhuma
              pessoa com deficiência, incluindo autistas, disléxicos e pessoas
              com TDAH, pode ser excluída do sistema educacional sob alegação de
              sua condição.
            </p>
            <p>
              O Ministério da Educação (MEC), por meio da Política Nacional de
              Educação Especial na Perspectiva da Educação Inclusiva (PNEEPEI),
              orienta que as escolas brasileiras devem acolher todos os alunos,
              independentemente de suas condições neurológicas, oferecendo os
              recursos e adaptações necessários para que cada um aprenda e se
              desenvolva.
            </p>

            <h3>Por que falar sobre neurodiversidade na escola</h3>
            <p>
              Cerca de 15 a 20% da população mundial é neurodivergente, segundo
              estimativas da Organização Mundial da Saúde (OMS). Isso significa
              que, em uma sala de aula com 30 alunos, entre 4 e 6 crianças podem
              ter alguma condição neurodivergente, muitas vezes sem diagnóstico,
              sem acompanhamento e sem o acolhimento adequado.
            </p>
            <p>
              Quando a escola ignora a neurodiversidade, o resultado é evasão
              escolar, baixa autoestima, bullying e sofrimento emocional. Quando
              a escola acolhe a neurodiversidade, o resultado é pertencimento,
              aprendizado significativo e desenvolvimento pleno.
            </p>
            <p>
              Na Editora FABER, acreditamos que a literatura é uma ponte poderosa
              para esse acolhimento. Nossos livros paradidáticos foram escritos
              para ajudar crianças, famílias e educadores a entenderem e
              celebrarem a neurodiversidade, porque toda história merece ser
              contada, e toda mente merece ser compreendida.
            </p>

            <h3>Fontes consultadas</h3>
            <ul className="blog-post-sources">
              <li>BRASIL. Lei nº 12.764, de 27 de dezembro de 2012 (Lei Berenice Piana).</li>
              <li>BRASIL. Lei nº 13.146, de 6 de julho de 2015 (Lei Brasileira de Inclusão).</li>
              <li>MEC. Política Nacional de Educação Especial na Perspectiva da Educação Inclusiva (2008).</li>
              <li>OMS. Organização Mundial da Saúde. Classificação Internacional de Doenças (CID-11).</li>
            </ul>
          </div>
        </details>

        <details
          id="educacao-inclusiva"
          className="blog-post"
          aria-labelledby="educacao-inclusiva-title"
        >
          <summary className="blog-post-header">
            <p className="eyebrow eyebrow-dark">02 · Educação Inclusiva</p>
            <span className="summary-title" id="educacao-inclusiva-title">
              O direito de aprender junto
            </span>
          </summary>

          <div className="blog-post-body">
            <p>
              Educação inclusiva não é apenas matricular todos os alunos na
              mesma escola. É garantir que cada criança e adolescente,
              independentemente de suas condições físicas, sensoriais,
              neurológicas ou sociais, tenha acesso ao aprendizado, participe
              ativamente da vida escolar e se desenvolva em todas as suas
              dimensões.
            </p>

            <h3>O que diz a legislação brasileira</h3>
            <p>
              A Constituição Federal de 1988 já estabelecia, em seu artigo 205,
              a educação como direito de todos e dever do Estado. Mas foi com a
              Política Nacional de Educação Especial na Perspectiva da Educação
              Inclusiva (PNEEPEI), publicada pelo MEC em 2008, que o Brasil
              assumiu formalmente o compromisso de transformar o sistema
              educacional para acolher a diversidade.
            </p>
            <p>
              A PNEEPEI determina que o atendimento educacional especializado
              (AEE) deve ser oferecido no turno inverso ao ensino regular, nunca
              substituindo a sala de aula comum. O aluno com deficiência,
              transtorno ou altas habilidades tem direito de estudar com seus
              pares, recebendo os recursos e adaptações necessários para
              aprender.
            </p>
            <p>
              A Lei Brasileira de Inclusão (Lei nº 13.146/2015) reforça esse
              princípio no artigo 28, inciso I, ao determinar que o poder
              público deve assegurar <q>sistema educacional inclusivo em todos
              os níveis e modalidades, vedando a exclusão do sistema regular de
              ensino sob alegação de deficiência</q>.
            </p>

            <h3>O que a realidade mostra</h3>
            <p>
              Segundo o Censo Escolar 2024 do INEP/MEC, o Brasil tem mais de 1,8
              milhão de alunos com deficiência, transtornos globais do
              desenvolvimento ou altas habilidades, matriculados na educação
              básica, o maior número da série histórica. Destes, cerca de 90%
              estudam em salas de aula comuns, o que mostra um avanço
              significativo na inclusão escolar.
            </p>
            <p>
              No entanto, os desafios permanecem. A mesma pesquisa aponta que
              milhares de escolas ainda não possuem infraestrutura acessível,
              salas de recursos multifuncionais ou professores capacitados para
              o atendimento especializado.
            </p>

            <h3>Inclusão de verdade começa na representação</h3>
            <p>
              Uma criança neurodivergente que só vê personagens “típicos” nos
              livros que lê recebe uma mensagem silenciosa: você não pertence a
              este lugar. Por isso a literatura paradidática é tão importante.
              Livros que retratam personagens com autismo, TDAH, dislexia ou
              deficiências físicas de forma respeitosa e protagonista não são
              apenas histórias, são ferramentas de pertencimento.
            </p>
            <p>
              Na Editora FABER, cada título paradidático é pensado para ser lido
              por todas as crianças da sala de aula, promovendo empatia,
              representatividade e acolhimento. Acreditamos que a educação
              inclusiva se constrói um livro de cada vez.
            </p>

            <h3>Fontes consultadas</h3>
            <ul className="blog-post-sources">
              <li>BRASIL. Constituição Federal (1988), art. 205.</li>
              <li>BRASIL. Lei nº 13.146, de 6 de julho de 2015 (Lei Brasileira de Inclusão).</li>
              <li>MEC. Política Nacional de Educação Especial na Perspectiva da Educação Inclusiva (2008).</li>
              <li>INEP. Censo Escolar da Educação Básica 2024.</li>
            </ul>
          </div>
        </details>

        <details
          id="dicas-familias"
          className="blog-post"
          aria-labelledby="dicas-familias-title"
        >
          <summary className="blog-post-header">
            <p className="eyebrow eyebrow-dark">03 · Dicas para Pais e Educadores</p>
            <span className="summary-title" id="dicas-familias-title">
              Como identificar e apoiar uma criança neurodivergente
            </span>
          </summary>

          <div className="blog-post-body">
            <p>
              Muitos pais e educadores sentem que algo diferente está
              acontecendo com uma criança, mas não sabem exatamente o que é,
              nem como agir. O caminho até um diagnóstico de autismo, TDAH,
              dislexia ou outra condição neurodivergente pode ser longo e cheio
              de dúvidas. Este texto reúne orientações práticas baseadas em
              diretrizes oficiais do Ministério da Saúde, Ministério da
              Educação e das principais sociedades médicas do Brasil.
            </p>

            <h3>Sinais que merecem atenção</h3>
            <p>
              Não existe um único sinal que feche um diagnóstico. O que os
              especialistas orientam é observar um conjunto de comportamentos ao
              longo do tempo. O Caderno de Atenção Primária do Ministério da
              Saúde (2022) recomenda que pais e educadores fiquem atentos a:
            </p>

            <h4>Na primeira infância (0 a 5 anos)</h4>
            <ul>
              <li>Atraso na fala ou regressão de habilidades já adquiridas.</li>
              <li>Pouco contato visual, dificuldade em responder ao próprio nome.</li>
              <li>Interesse restrito a poucos brinquedos ou objetos, com brincadeiras repetitivas.</li>
              <li>Dificuldade para interagir com outras crianças da mesma idade.</li>
              <li>Sensibilidade exagerada a sons, texturas, luzes ou cheiros.</li>
            </ul>

            <h4>Na idade escolar (6 a 12 anos)</h4>
            <ul>
              <li>Dificuldade persistente para aprender a ler, escrever ou fazer contas, apesar de esforço e acompanhamento.</li>
              <li>Desatenção que atrapalha o aprendizado, mesmo em atividades que a criança gosta.</li>
              <li>Agitação motora, impulsividade, dificuldade em esperar a vez.</li>
              <li>Dificuldade em interpretar situações sociais, entender ironias ou fazer amigos.</li>
              <li>Crises de desregulação emocional em situações de mudança de rotina ou sobrecarga sensorial.</li>
            </ul>

            <h4>Na adolescência (13 a 17 anos)</h4>
            <ul>
              <li>Dificuldade em organizar tarefas, gerenciar o tempo e cumprir prazos.</li>
              <li>Ansiedade social intensa, isolamento ou evitação de situações coletivas.</li>
              <li>Sensação de ser “diferente” sem entender por quê.</li>
              <li>Interesses muito intensos e específicos que ocupam grande parte do tempo.</li>
            </ul>

            <h3>O que fazer ao perceber esses sinais</h3>
            <p>
              O Ministério da Saúde, por meio da Política Nacional de Atenção
              Integral à Saúde da Criança (PNAISC), orienta que o primeiro passo
              é procurar a Unidade Básica de Saúde (UBS) de referência. O médico
              da família ou pediatra pode aplicar instrumentos de triagem como o
              M-CHAT (para autismo) e, se necessário, encaminhar para avaliação
              com especialistas.
            </p>
            <p>
              Paralelamente, a escola deve ser acionada. A Lei Brasileira de
              Inclusão (Lei nº 13.146/2015) e a Política Nacional de Educação
              Especial na Perspectiva da Educação Inclusiva (MEC, 2008) garantem
              que toda criança com suspeita ou diagnóstico confirmado tem direito
              a:
            </p>
            <ul>
              <li>Atendimento Educacional Especializado (AEE) no turno inverso ao regular.</li>
              <li>Adaptações curriculares e metodológicas conforme sua necessidade.</li>
              <li>Acompanhamento por profissional de apoio quando necessário.</li>
              <li>Não retenção por motivo da deficiência.</li>
            </ul>

            <h3>O papel dos pais e educadores juntos</h3>
            <p>
              A parceria entre família e escola é o fator mais importante para o
              desenvolvimento da criança neurodivergente. O MEC orienta que:
            </p>
            <ul>
              <li>Pais devem compartilhar com a escola as orientações dos profissionais de saúde.</li>
              <li>Educadores devem registrar e comunicar à família os progressos e dificuldades observados em sala.</li>
              <li>Ambos devem trabalhar juntos na construção de um plano individualizado de apoio.</li>
            </ul>

            <h3>O que evitar</h3>
            <ul>
              <li>Não espere um “laudo fechado” para começar a apoiar. A intervenção precoce é mais importante que o diagnóstico formal.</li>
              <li>Não compare a criança com outras da mesma idade. Cada neurodivergente tem seu próprio tempo de desenvolvimento.</li>
              <li>Não rotule ou use termos negativos. “Preguiçoso”, “mal-educado” e “desleixado” são palavras que machucam e não ajudam.</li>
              <li>Não ignore a intuição dos pais. A mãe e o pai são quem mais conhece a criança.</li>
            </ul>

            <h3>Onde buscar informação confiável</h3>
            <ul>
              <li>Ministério da Saúde — Linhas de Cuidado para TEA, TDAH e outras condições (gov.br/saude).</li>
              <li>Ministério da Educação — PNEEPEI e diretrizes para educação inclusiva (gov.br/mec).</li>
              <li>Sociedade Brasileira de Pediatria (SBP) — Manuais de orientação para pais e educadores (sbp.com.br).</li>
              <li>Instituto Nacional de Estudos e Pesquisas Educacionais (INEP) — Censo Escolar e dados sobre inclusão (gov.br/inep).</li>
            </ul>

            <h3>Fontes consultadas</h3>
            <ul className="blog-post-sources">
              <li>BRASIL. Ministério da Saúde. Caderno de Atenção Primária: Saúde da Criança (2022).</li>
              <li>BRASIL. Lei nº 13.146, de 6 de julho de 2015 (Lei Brasileira de Inclusão).</li>
              <li>MEC. Política Nacional de Educação Especial na Perspectiva da Educação Inclusiva (2008).</li>
              <li>SBP. Manual de Orientação sobre Transtorno do Espectro Autista (2023).</li>
            </ul>
          </div>
        </details>

        <details
          id="lancamentos"
          className="blog-post"
          aria-labelledby="lancamentos-title"
        >
          <summary className="blog-post-header">
            <p className="eyebrow eyebrow-dark">04 · Lançamentos</p>
            <span className="summary-title" id="lancamentos-title">
              Acompanhe as novidades da Editora FABER
            </span>
          </summary>

          <div className="blog-post-body">
            <p>
              A Editora FABER está construindo um catálogo que nasce da
              experiência real de quem vive a neurodiversidade e a inclusão no
              dia a dia. Cada lançamento é pensado para levar às escolas, às
              famílias e aos leitores obras que educam, acolhem e transformam.
            </p>

            <h3>O que já está disponível</h3>
            <p>
              <strong>Coleção Mundo Neurodiverso</strong> — 8 títulos
              paradidáticos para Educação Infantil e Ensino Fundamental (Anos
              Iniciais). Cada livro aborda uma condição neurodivergente com
              sensibilidade, rigor pedagógico e protagonismo infantil. Os temas
              são: TEA, TDAH, Dislexia, TOD, Ansiedade, TOC, Síndrome de Down e
              Altas Habilidades. Todos acompanham o Roteiro do Pertencimento,
              caderno de atividades socioemocionais alinhado à BNCC, desenvolvido
              pelo NAPE (Núcleo de Apoio à Prática Educativa).
            </p>

            <h3>O que está em desenvolvimento</h3>
            <p>
              <strong>Coleção Janelas para o Mundo</strong> — série
              paradidática focada em deficiências físicas e sensoriais (visual,
              auditiva e motora), promovendo visibilidade, autonomia e
              representatividade. Também para Educação Infantil e Ensino
              Fundamental (Anos Iniciais).
            </p>
            <p>
              <strong>Coleção Protagonistas do Amanhã</strong> — três títulos voltados aos
              Anos Finais do Ensino Fundamental e Ensino Médio, com foco em
              empreendedorismo, protagonismo e autonomia juvenil:
            </p>
            <ul>
              <li><em>O Menino que Fez Acontecer</em> (Leo, 11 a 13 anos).</li>
              <li><em>A Menina que Descobriu o Próprio Norte</em> (Rebeca, 13 a 15 anos).</li>
              <li><em>O Jovem que Plantou o Futuro</em> (Francisco, 15 a 17 anos).</li>
            </ul>

            <h3>Como acompanhar</h3>
            <p>
              O blog da Editora FABER será o primeiro canal a anunciar cada novo
              lançamento, com informações sobre pré-venda, disponibilidade e
              eventos de lançamento. Também divulgaremos as obras por meio de
              parcerias com redes de ensino, secretarias de educação e
              instituições parceiras.
            </p>
            <p>
              Para escolas e redes de ensino interessadas em adquirir os
              títulos, a Editora FABER participa de editais públicos (PNLD,
              licitações estaduais e municipais) e também atende pedidos
              diretos. Entre em contato pelo canal “Seja Nosso Parceiro” no
              site.
            </p>

            <h3>Fontes consultadas</h3>
            <ul className="blog-post-sources">
              <li>BRASIL. Ministério da Educação. Base Nacional Comum Curricular (BNCC), 2018.</li>
              <li>BRASIL. Lei nº 13.146, de 6 de julho de 2015 (Lei Brasileira de Inclusão).</li>
              <li>FNDE. Programa Nacional do Livro e do Material Didático (PNLD) — gov.br/fnde.</li>
            </ul>
          </div>
        </details>

        <details
          id="impacto-social"
          className="blog-post"
          aria-labelledby="impacto-social-title"
        >
          <summary className="blog-post-header">
            <p className="eyebrow eyebrow-dark">05 · Impacto Social</p>
            <span className="summary-title" id="impacto-social-title">Compromisso social que transforma</span>
          </summary>

          <div className="blog-post-body">
            <p>
              A Editora FABER é uma empresa privada com compromisso social. Parte
              do valor arrecadado com as vendas é destinada ao IRA INTEGRA TEA,
              instituição que presidimos e que foi uma das 1.200 organizações
              selecionadas para o Selo ODS Brasil 2026, integrante do legado da
              Agenda 2030 da ONU.
            </p>
            <p>
              Isso significa que cada livro adquirido, cada serviço contratado e
              cada parceria firmada com a Editora FABER gera impacto social real,
              reconhecido internacionalmente. Não vendemos apenas livros.
              Entregamos ferramentas de transformação.
            </p>
          </div>
        </details>

        <details
          id="bastidores"
          className="blog-post"
          aria-labelledby="bastidores-title"
        >
          <summary className="blog-post-header">
            <p className="eyebrow eyebrow-dark">06 · Bastidores</p>
            <span className="summary-title" id="bastidores-title">
              Como nasce um livro na Editora FABER
            </span>
          </summary>

          <div className="blog-post-body">
            <p>
              Você já se perguntou o que acontece antes de um livro chegar às
              suas mãos? Na Editora FABER, cada título percorre um caminho
              cuidadosamente planejado, que une sensibilidade humana, rigor
              pedagógico e excelência gráfica.
            </p>

            <h3>Da ideia ao papel</h3>
            <p>
              Tudo começa com uma história que precisa ser contada. Roberto
              Araújo, autor e presidente do IRA INTEGRA TEA, desenvolve cada
              narrativa a partir de vivências reais, suas próprias e de centenas
              de famílias atendidas pela instituição. Cada personagem, cada
              desafio e cada superação nascem de casos reais, transformados em
              literatura com o cuidado de quem vive a neurodiversidade na pele.
            </p>

            <h3>O papel do NAPE</h3>
            <p>
              Antes de ir para a gráfica, cada obra passa pelo NAPE (Núcleo de
              Apoio à Prática Educativa), nosso braço técnico-pedagógico. É lá
              que o Roteiro do Pertencimento é desenvolvido, um caderno de
              atividades socioemocionais alinhado à BNCC que acompanha cada
              livro. Isso garante que a obra não seja apenas lida, mas trabalhada
              em sala de aula como ferramenta pedagógica de verdade.
            </p>

            <h3>A produção gráfica</h3>
            <p>
              Com o conteúdo aprovado, a obra segue para a produção gráfica.
              Trabalhamos com impressão sob demanda (POD) para tiragens iniciais
              e testes de mercado, e com offset para grandes volumes, como os
              exigidos por editais públicos e redes de ensino. Cada detalhe, do
              papel à diagramação, é pensado para oferecer qualidade
              profissional.
            </p>

            <h3>O que está por vir</h3>
            <p>
              A Editora FABER está em plena expansão. A Coleção Mundo
              Neurodiverso já está disponível com 8 títulos. A Coleção Janelas
              para o Mundo e a Coleção Protagonistas estão em desenvolvimento. E,
              em breve, novos anúncios virão por aqui.
            </p>
            <p>
              Acompanhe os bastidores pelas nossas redes e fique por dentro de
              cada novidade antes de todo mundo.
            </p>
          </div>
        </details>
        </div>
      </section>
    </SubpageShell>
  );
}
