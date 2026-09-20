export type CatalogBook = {
  slug: string;
  title: string;
  theme: string;
  collection: string;
  tone: "pink" | "blue" | "sage" | "yellow";
  coverImage?: string;
  synopsis?: string[];
};

export const books: CatalogBook[] = [
  {
    slug: "o-menino-que-via-o-mundo-diferente",
    title: "O Menino que Via o Mundo Diferente",
    theme: "TEA",
    collection: "Mundo Neurodiverso",
    tone: "blue",
    coverImage: "/mockups/o-menino-que-via-o-mundo-diferente.png",
    synopsis: [
      "Robertinho enxerga o mundo de um jeito muito especial.",
      "Enquanto muitas pessoas passam apressadas pelos pequenos detalhes do dia, ele encontra beleza no voo de uma borboleta, no caminho de uma joaninha, no canto dos passarinhos e nas pequenas descobertas que quase ninguém percebe.",
      "No acolhedor Colégio Carneirinhos, cercado por professores, amigos e profissionais que acreditam no potencial de cada criança, Robertinho descobrirá que sua maneira de observar o mundo não é uma fraqueza, mas um talento capaz de inspirar outras pessoas.",
      "Em uma história sensível, emocionante e repleta de memórias afetivas, crianças, famílias e educadores são convidados a refletir sobre empatia, pertencimento, amizade e respeito às diferentes formas de aprender, sentir e viver.",
      "Mais do que uma história sobre diferenças, este livro celebra a infância, o poder transformador da escola e a importância de enxergar o extraordinário nas pequenas coisas.",
      "Porque toda criança merece ser acolhida exatamente como é.",
    ],
  },
  {
    slug: "a-menina-dos-mil-pensamentos",
    title: "A Menina dos Mil Pensamentos",
    theme: "TDAH",
    collection: "Mundo Neurodiverso",
    tone: "pink",
    coverImage: "/mockups/a-menina-dos-mil-pensamentos.png",
    synopsis: [
      "Sofia tem a cabeça cheia de perguntas. Enquanto observa um raio de sol, já imagina estradas para borboletas. Enquanto ouve o vento, inventa histórias. Enquanto desenha, já está pensando no próximo desenho antes mesmo de terminar o primeiro.",
      "No acolhedor Colégio Carneirinhos, Sofia descobrirá que ter mil pensamentos ao mesmo tempo não é um problema, é uma forma muito especial de enxergar o mundo. Ao lado da Professora Viviane, de Robertinho, Miguel e de todos os amigos que já conhecemos no primeiro livro, ela aprenderá que criatividade, curiosidade e imaginação podem abrir caminhos extraordinários.",
      "Uma história delicada sobre amizade, autoestima, confiança e o maravilhoso universo das crianças que nunca deixam de fazer perguntas.",
    ],
  },
  {
    slug: "o-menino-que-lia-de-outro-jeito",
    title: "O Menino que Lia de Outro Jeito",
    theme: "Dislexia",
    collection: "Mundo Neurodiverso",
    tone: "sage",
    coverImage: "/mockups/o-menino-que-lia-de-outro-jeito.png",
    synopsis: [
      "Miguel adora ouvir histórias e criar aventuras dentro da própria imaginação. No Colégio Carneirinhos, ele participa das conversas, faz perguntas interessantes e conhece personagens de livros como poucos colegas. Mas, quando chega a hora de ler sozinho, as palavras parecem brincar de esconde-esconde diante de seus olhos.",
      "Enquanto alguns amigos aprendem rapidamente, Miguel começa a acreditar que talvez nunca consiga acompanhar a turma. Felizmente, sua professora, Robertinho, Sofia e os demais colegas mostram que aprender não significa seguir exatamente o mesmo caminho que todas as outras crianças.",
      "Com incentivo, paciência e novas estratégias, Miguel descobre que cada conquista tem seu próprio tempo e que acreditar em si mesmo é tão importante quanto aprender a ler. Uma história emocionante sobre perseverança, amizade e confiança, mostrando que o verdadeiro aprendizado acontece quando cada criança é respeitada em sua maneira de aprender.",
    ],
  },
  {
    slug: "o-menino-do-coracao-valente",
    title: "O Menino do Coração Valente",
    theme: "TOD",
    collection: "Mundo Neurodiverso",
    tone: "yellow",
    coverImage: "/mockups/o-menino-do-coracao-valente.png",
    synopsis: [
      "Lucas tem um coração valente. Ele não tem medo de dizer o que pensa, de questionar as regras ou de enfrentar o que considera injusto. Mas, às vezes, sua coragem parece bravura. Sua força parece teimosia. E seu desejo de proteger os outros acaba afastando as pessoas.",
      "No Colégio Carneirinhos, Lucas encontrará a Professora Viviane, que enxerga além dos comportamentos difíceis. Com a ajuda de Robertinho, Sofia, Miguel e de toda a turma, ele descobrirá que ser forte também significa saber pedir ajuda, que a coragem verdadeira está em reconhecer os próprios sentimentos e que até os corações mais valentes precisam de acolhimento.",
      "Uma história sensível sobre o Transtorno Opositivo-Desafiante (TOD), mostrando que por trás de cada comportamento desafiador existe uma criança que só precisa ser ouvida.",
    ],
  },
  {
    slug: "a-menina-que-carregava-nuvens",
    title: "A Menina que Carregava Nuvens",
    theme: "Ansiedade",
    collection: "Mundo Neurodiverso",
    tone: "pink",
    coverImage: "/mockups/a-menina-que-carregava-nuvens.png",
    synopsis: [
      "Helena tem um segredo que ninguém vê: dentro dela, existe um céu inteiro. Às vezes, o sol brilha forte e ela se sente leve. Outras vezes, nuvens escuras chegam sem avisar, e seu peito fica pesado, apertado, cheio de medos que ela mesma não consegue explicar.",
      "No Colégio Carneirinhos, Helena aprendeu a esconder bem suas nuvens. Sorria quando precisava sorrir. Respondia quando perguntavam. Mas, por dentro, carregava tempestades que ninguém imaginava. Até que um dia, a Professora Viviane percebeu.",
      "E, com a ajuda de Robertinho, Sofia, Miguel, Lucas e de toda a turma, Helena descobriu que não precisava carregar suas nuvens sozinha. Que pedir ajuda não é fraqueza. E que, depois de toda tempestade, o sol sempre volta a brilhar.",
    ],
  },
  {
    slug: "o-menino-dos-pequenos-rituais",
    title: "O Menino dos Pequenos Rituais",
    theme: "TOC",
    collection: "Mundo Neurodiverso",
    tone: "blue",
    coverImage: "/mockups/o-menino-dos-pequenos-rituais.png",
    synopsis: [
      "Pedro tem seus rituais. Antes de entrar na sala, precisa tocar a maçaneta três vezes. Antes de escrever, organiza os lápis em ordem perfeita. Antes de dormir, verifica se a porta está fechada exatamente sete vezes. Se algo sai do lugar, uma sensação estranha toma conta do seu peito, como se o mundo fosse desabar se ele não repetir o gesto mais uma vez.",
      "No Colégio Carneirinhos, Pedro tenta esconder seus rituais. Mas a Professora Viviane percebe. E, com a ajuda de Robertinho, Sofia, Miguel, Lucas, Helena e de toda a turma, Pedro descobrirá que não precisa ter vergonha de seus rituais e que existem maneiras de lidar com eles sem se sentir sozinho.",
      "Uma história sensível sobre o Transtorno Obsessivo-Compulsivo (TOC), mostrando que os rituais podem ser compreendidos, acolhidos e, aos poucos, transformados.",
    ],
  },
  {
    slug: "a-menina-do-sorriso-que-abracava-o-mundo",
    title: "A Menina do Sorriso que Abraçava o Mundo",
    theme: "Síndrome de Down",
    collection: "Mundo Neurodiverso",
    tone: "sage",
    coverImage: "/mockups/a-menina-do-sorriso-que-abracava-o-mundo.png",
    synopsis: [
      "Clara tem um sorriso que ilumina qualquer lugar. Ela chega ao Colégio Carneirinhos e todos sentem sua presença não pelo barulho, mas pelo jeito único que ela tem de abraçar o mundo. Clara abraça com os olhos, com as palavras, com o coração. Ela demora um pouco mais para algumas coisas, mas isso nunca a impediu de tentar.",
      "No Colégio Carneirinhos, Clara encontrará a Professora Viviane, que sabe que cada criança tem seu próprio tempo. Com a ajuda de Robertinho, Sofia, Miguel, Lucas, Helena, Pedro e de toda a turma, ela mostrará que ter Síndrome de Down não define o que alguém é capaz de fazer e que o verdadeiro valor de uma pessoa está na forma como ela ama, como ela persiste e como ela abraça o mundo ao seu redor.",
    ],
  },
  {
    slug: "a-menina-das-ideias-brilhantes",
    title: "A Menina das Ideias Brilhantes",
    theme: "Altas Habilidades/Superdotação",
    collection: "Mundo Neurodiverso",
    tone: "yellow",
    coverImage: "/mockups/a-menina-das-ideias-brilhantes.png",
    synopsis: [
      "Lara tem ideias que não param de chegar. Enquanto a turma aprende uma matéria, ela já pensou em três perguntas diferentes, duas conexões com outros assuntos e uma invenção que poderia mudar o mundo. Sua mente funciona como um foguete rápido, intenso, sempre em busca de novos horizontes.",
      "Mas ter tantas ideias também pode ser solitário. Lara às vezes se sente diferente dos outros colegas. Suas perguntas são complexas demais, seus interesses são profundos demais, e seu jeito de pensar parece não encontrar eco.",
      "No Colégio Carneirinhos, Lara encontrará a Professora Viviane, que sabe que mentes brilhantes também precisam de acolhimento. Com a ajuda de Robertinho, Sofia, Miguel, Lucas, Helena, Pedro, Clara e de toda a turma, ela descobrirá que suas ideias não são um problema, são um presente. E que o verdadeiro brilho está em compartilhar o que se sabe com quem está ao redor.",
      "Uma história inspiradora sobre Altas Habilidades/Superdotação, mostrando que inteligência sem conexão não brilha e que todos têm algo único a oferecer.",
    ],
  },
  {
    slug: "a-menina-que-enxergava-com-as-maos",
    title: "A Menina que Enxergava com as Mãos",
    theme: "Deficiência Visual",
    collection: "Janelas para o Mundo",
    tone: "pink",
    synopsis: [
      "Lara tem 8 anos e não enxerga com os olhos. Ela enxerga com as mãos, os ouvidos, o olfato e o coração. Na Escola Primavera, ela descobre que seu jeito de ver o mundo é uma força, não um problema. Uma história sobre deficiência visual, inclusão e amizade."
    ]
  },
  {
    slug: "o-menino-que-ouvia-com-os-olhos",
    title: "O Menino que Ouvia com os Olhos",
    theme: "Surdez",
    collection: "Janelas para o Mundo",
    tone: "blue",
    synopsis: [
      "Gabriel tem 8 anos e não ouve como a maioria das pessoas. Ele ouve com os olhos, com as mãos, com o corpo. Surdo desde o nascimento, Gabriel se comunica por sinais, gestos e expressões. Quando chega à Escola Primavera, ele encontra um mundo feito para ouvintes. Mas, com a ajuda do novo amigo Lucas e da professora Elisa, a escola inteira descobre que existem muitas formas de ouvir e de falar. Uma história sobre surdez, inclusão e a descoberta de que a comunicação vai muito além do som."
    ]
  },
  {
    slug: "o-menino-das-rodas-que-levavam-sonhos",
    title: "O Menino das Rodas que Levavam Sonhos",
    theme: "Deficiência Física",
    collection: "Janelas para o Mundo",
    tone: "sage",
    synopsis: [
      "Lucas tem 9 anos e usa uma cadeira de rodas que ele chama de \"nave espacial\". Na Escola Primavera, ele enfrenta barreiras físicas e atitudinais, mas mostra que sua capacidade de sonhar e realizar não tem limites. Uma história sobre deficiência física, acessibilidade e empatia."
    ]
  },
  {
    slug: "a-menina-das-maos-corajosas",
    title: "A Menina das Mãos Corajosas",
    theme: "Amputação / Diferenças de Membros",
    collection: "Janelas para o Mundo",
    tone: "yellow",
    synopsis: [
      "Sofia tem 8 anos e nasceu com uma agenesia de membro no braço esquerdo. Ela aprendeu a fazer tudo à sua maneira, com muita criatividade. Ao entrar na Escola Primavera, ensina aos colegas que ser diferente é normal e que cada pessoa tem suas próprias marcas. Uma história sobre amputação, superação e autoestima."
    ]
  },
  {
    slug: "o-menino-que-pintava-sonhos",
    title: "O Menino que Pintava Sonhos",
    theme: "Paralisia Cerebral",
    collection: "Janelas para o Mundo",
    tone: "pink",
    synopsis: [
      "Davi tem 10 anos e uma forma única de se expressar. Ele tem paralisia cerebral, seu corpo não obedece com a mesma facilidade que o das outras crianças, mas suas ideias são livres como pássaros. Davi se comunica por um tablet e desenha com os olhos. Sim, com os olhos. Quando a Escola Primavera organiza uma exposição de arte, Davi precisa decidir se vai mostrar seus desenhos para todo mundo. Com a ajuda de seus amigos Sofia, Miguel, Gabriel, Lucas e Clara, e da professora Elisa, ele descobrirá que a arte não está nas mãos, está no olhar. Uma história sobre paralisia cerebral, comunicação alternativa e a descoberta de que todos têm algo a dizer."
    ]
  },
  {
    slug: "o-menino-que-fez-acontecer",
    title: "O Menino que Fez Acontecer",
    theme: "Empreendedorismo",
    collection: "Protagonistas do Amanhã",
    tone: "yellow",
    synopsis: [
      "Leo é um garoto de 12 anos que aprendeu cedo que as coisas não vêm fáceis. Filho de um pai motorista de aplicativo e de uma mãe costureira, ele conhece na prática o valor do trabalho e o peso das contas no final do mês.",
      "Tudo começa quando Leo descobre que seu cachorro de estimação, Totó, precisa de uma cirurgia que a família não tem condições de pagar. Em vez de aceitar a situação como inevitável, Leo decide agir. Inspirado por uma conversa com seu tio, dono de uma pequena lanchonete no bairro, ele tem uma ideia: começar um pequeno negócio de lavagem de carros e bicicletas na vizinhança.",
      "O que Leo não esperava é que empreender seria tão difícil. Ele precisa aprender a calcular preços, administrar o dinheiro, lidar com clientes difíceis e, principalmente, continuar firme quando as vendas caem e a desanimação bate à porta. Cada erro vira um aprendizado. Cada cliente insatisfeito, uma lição de melhoria.",
      "O conflito central acontece quando Leo se depara com um dilema ético: ganhar mais dinheiro rapidamente aceitando uma proposta duvidosa, ou manter o caráter e construir algo em que acredita. É nesse momento que ele descobre que o verdadeiro empreendedorismo não é sobre dinheiro fácil, é sobre caráter, escolhas e construir algo com propósito.",
      "Leo tem TDAH, e sua mente acelerada, que sempre foi vista como um problema, se revela uma vantagem no empreendedorismo. Sua capacidade de hiperfoco, criatividade e energia incansável viram seus maiores aliados."
    ]
  },
  {
    slug: "a-menina-que-descobriu-o-proprio-norte",
    title: "A Menina que Descobriu o Próprio Norte",
    theme: "Autoconhecimento",
    collection: "Protagonistas do Amanhã",
    tone: "sage",
    synopsis: [
      "Rebeca tem 14 anos e uma sensação que não sai do peito: todo mundo parece saber o que quer ser quando crescer, menos ela. Nas rodas de conversa da escola, os amigos falam com segurança sobre carreiras, faculdades e planos para o futuro. João quer ser engenheiro. Marina já decidiu que vai fazer medicina. Mas quando perguntam a Rebeca o que ela quer ser, a resposta não vem.",
      "Na família, a pressão chega de outro jeito. O pai sonha em vê-la seguindo uma profissão tradicional. A mãe quer que ela tenha estabilidade. E Rebeca, no meio disso tudo, sente que qualquer escolha que fizer vai decepcionar alguém. Tudo muda quando a escola anuncia um projeto diferente: cada aluno vai realizar uma pesquisa de campo sobre uma profissão que desperte curiosidade, entrevistando profissionais de verdade e passando um dia de observação. Rebeca não tem a menor ideia de qual profissão escolher para o projeto.",
      "É aí que entra a Professora Alda, orientadora da turma, que propõe um exercício simples e transformador: antes de escolher uma profissão, Rebeca precisa primeiro se conhecer. Ela recebe um caderno em branco e uma missão: durante um mês, vai responder perguntas sobre seus valores, seus talentos, seus medos e o que realmente a faz feliz.",
      "O livro acompanha Rebeca nessa jornada de autoconhecimento. A cada capítulo, ela descobre algo novo sobre si mesma. Aprende que talento não é a mesma coisa que paixão. Que pressão externa não é bússola. Que errar na escolha não é fracasso, é aprendizado."
    ]
  },
  {
    slug: "o-jovem-que-plantou-o-futuro",
    title: "O Jovem que Plantou o Futuro",
    theme: "Impacto Social",
    collection: "Protagonistas do Amanhã",
    tone: "blue",
    synopsis: [
      "Francisco tem 15 anos e uma certeza que incomoda: o mundo está cheio de problemas que parecem grandes demais para um jovem resolver. Desigualdade, fome, solidão, desperdício, ele vê tudo isso ao seu redor e sente um aperto no peito. O que um garoto pode fazer diante de tanta coisa errada?",
      "Tudo muda quando Francisco conhece Seu Lauro, um senhor que cuida de uma horta comunitária no bairro. Enquanto ajudam a plantar, Seu Lauro ensina algo que vai além da jardinagem: \"Toda grande mudança começa com uma semente. E uma semente não pergunta se o mundo está pronto. Ela simplesmente brota.\"",
      "Inspirado por essa lição, Francisco decide criar um projeto que une jovens da comunidade para transformar um terreno baldio em uma horta comunitária. Mas ele descobre rapidamente que plantar mudanças é mais difícil que plantar alface. Burocracia, desinteresse, conflitos internos e a desconfiança dos adultos são obstáculos que testam sua determinação.",
      "O conflito central acontece quando o projeto cresce rápido demais e Francisco precisa escolher entre controlar tudo sozinho ou confiar no coletivo. É aí que ele descobre que o verdadeiro protagonismo não é individual, é saber plantar sementes que outros vão regar, crescer e colher.",
      "Uma história sobre protagonismo coletivo, impacto social e a descoberta de que as melhores mudanças são aquelas que a gente começa, mesmo sem ver o resultado final."
    ]
  }
];

export const mundoNeurodiverso = books.filter(
  (book) => book.collection === "Mundo Neurodiverso",
);

export const janelasParaOMundo = books.filter(
  (book) => book.collection === "Janelas para o Mundo",
);

export const protagonistasDoAmanha = books.filter(
  (book) => book.collection === "Protagonistas do Amanhã",
);

export function getBookBySlug(slug: string) {
  return books.find((book) => book.slug === slug);
}
