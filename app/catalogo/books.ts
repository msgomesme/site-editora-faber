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
      "Miguel adora ouvir histórias e criar aventuras dentro da própria imaginação. Na Escola das Acácias, ele participa das conversas, faz perguntas interessantes e conhece personagens de livros como poucos colegas. Mas, quando chega a hora de ler sozinho, as palavras parecem brincar de esconde-esconde diante de seus olhos.",
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
      "Clara tem um sorriso que ilumina qualquer lugar. Ela chega no Colégio Carneirinhos e todos sentem sua presença não pelo barulho, mas pelo jeito único que ela tem de abraçar o mundo. Clara abraça com os olhos, com as palavras, com o coração. Ela demora um pouco mais para algumas coisas, mas isso nunca a impediu de tentar.",
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
  },
  {
    slug: "o-menino-que-ouvia-com-os-olhos",
    title: "O Menino que Ouvia com os Olhos",
    theme: "Surdez",
    collection: "Janelas para o Mundo",
    tone: "blue",
  },
  {
    slug: "o-menino-das-rodas-que-levavam-sonhos",
    title: "O Menino das Rodas que Levavam Sonhos",
    theme: "Deficiência Física",
    collection: "Janelas para o Mundo",
    tone: "sage",
  },
  {
    slug: "a-menina-das-maos-corajosas",
    title: "A Menina das Mãos Corajosas",
    theme: "Amputação",
    collection: "Janelas para o Mundo",
    tone: "yellow",
  },
  {
    slug: "o-menino-que-pintava-sonhos",
    title: "O Menino que Pintava Sonhos",
    theme: "Paralisia Cerebral",
    collection: "Janelas para o Mundo",
    tone: "pink",
  },
];

export const mundoNeurodiverso = books.filter(
  (book) => book.collection === "Mundo Neurodiverso",
);

export const janelasParaOMundo = books.filter(
  (book) => book.collection === "Janelas para o Mundo",
);

export function getBookBySlug(slug: string) {
  return books.find((book) => book.slug === slug);
}
