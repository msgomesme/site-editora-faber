# Handoff — Site Editora ROEL

Última atualização: 29 de julho de 2026, às 13h.

## Atualização de 29 de julho de 2026

O projeto foi preparado para a próxima etapa de publicação e apresentação aos
diretores. Além das páginas institucionais anteriores, foram concluídos:

- páginas `/compliance`, `/privacidade` e `/faq` para transparência e
  governança;
- Código de Conduta completo, Carta dos Presidentes e Canal de Integridade;
- formulário de integridade com campos de relato, categoria, anexos e protocolo;
- Política de Privacidade completa com índice, tabelas, LGPD, cookies e direitos
  do titular;
- FAQ com 12 perguntas em formato expansível;
- estrutura compartilhada de dados dos livros em `app/catalogo/books.ts`;
- páginas dinâmicas de livro em `/catalogo/[slug]`;
- oito sinopses da Coleção Mundo Neurodiverso cadastradas;
- páginas de detalhe preparadas para os cinco livros de Janelas para o Mundo,
  aguardando suas sinopses;
- Home reduzida para uma seleção de seis livros, com apenas a ação
  “Conhecer livro →”;
- temas como TOD, Ansiedade e TOC removidos dos cards da Home para deixar a
  vitrine mais limpa; essas informações permanecem no Catálogo e nos detalhes;
- exportador cPanel atualizado para incluir as páginas de compliance, FAQ e
  todas as páginas dinâmicas dos livros;
- pacote `Editora-ROEL-cPanel-latest.zip` regenerado com a versão final e com a
  abertura automática dos artigos do Blog por hash;
- versão 3 publicada no Sites a partir do commit `826e92d`, disponível em
  `https://editora-roel-v2.emailbwgomes.chatgpt.site`;
- última compilação validada com `npm run build` sem erros.

## 1. Estado atual

O site institucional da Editora ROEL está funcional, responsivo e com páginas
institucionais, catálogo dinâmico e conteúdo editorial. A última compilação com
`npm run build` foi concluída sem erros.

O projeto contém:

- Home institucional completa;
- catálogo com carrossel automático;
- página de catálogo com as três coleções;
- páginas institucionais, serviços, parceiros, blog, contato, compliance,
  privacidade e FAQ;
- mockups reais dos oito livros da coleção Mundo Neurodiverso;
- sinopses dos oito livros da Coleção Mundo Neurodiverso em páginas individuais;
- páginas individuais preparadas para todos os livros já cadastrados;
- exportador estático para hospedagem via cPanel na subpasta `/editora_V2/`;
- versão local acessível normalmente por `http://localhost:3000`.

O progresso de 28 de julho inclui:

- padronização do nome `Roberto Araújo` em todo o conteúdo visível;
- atualização integral do texto institucional da página `/quem-somos`;
- inclusão da Coleção Protagonistas como o terceiro bloco de coleções;
- atualização das referências de duas para três coleções;
- título principal do catálogo simplificado para “Um catálogo em expansão.”;
- novo texto de impacto social, incluindo o Selo ODS Brasil 2026;
- frase institucional alterada para “Não publicamos apenas livros. Entregamos
  um universo literário onde toda história encontra seu lugar.”;
- redução da tipografia do texto detalhado de impacto social.

## 2. Stack e arquitetura

- Next.js 16;
- React 19;
- Vinext + Vite;
- saída compatível com Cloudflare Workers/Sites;
- App Router, com páginas em `app/`;
- CSS global em `app/globals.css`;
- componentes compartilhados de cabeçalho, anúncio e rodapé em
  `app/components/SiteChrome.tsx`;
- Node.js 22.13 ou superior.

Principais comandos:

```bash
npm run dev
npm run build
npm run test
npm run lint
```

## 3. Rotas

| Rota | Arquivo | Finalidade |
| --- | --- | --- |
| `/` | `app/page.tsx` | Home, hero, apresentação, catálogo, serviços, impacto e newsletter |
| `/quem-somos` | `app/quem-somos/page.tsx` | História e posicionamento institucional |
| `/catalogo` | `app/catalogo/page.tsx` | Coleções e todos os livros |
| `/catalogo/[slug]` | `app/catalogo/[slug]/page.tsx` | Sinopse e detalhes de cada livro |
| `/servicos` | `app/servicos/page.tsx` | Serviços editoriais e gráficos |
| `/parceiros` | `app/parceiros/page.tsx` | Educadores, autores e parcerias |
| `/blog` | `app/blog/page.tsx` | Categorias editoriais |
| `/contato` | `app/contato/page.tsx` | Formulário e FAQ |
| `/compliance` | `app/compliance/page.tsx` | Código de Conduta e Canal de Integridade |
| `/privacidade` | `app/privacidade/page.tsx` | Política de Privacidade e LGPD |
| `/faq` | `app/faq/page.tsx` | Perguntas frequentes de privacidade |

## 4. Direção visual aprovada

Conceito: editorial acolhedor, moderno e inspirado na estrutura visual da
Overlens, sem copiar conteúdo.

Paleta:

- Azul noturno: `#061028`;
- Sálvia: `#b2ac88`;
- Azul de apoio: `#98afc6`;
- Rosa: `#f4c2c2`;
- Amarelo de iluminação: `#fff4a3`;
- Branco editorial: `#fffdf8`.

Decisões importantes:

- família tipográfica global: `ui-sans-serif`;
- botões em formato pill;
- cabeçalho branco e alto, com logo ampliada à esquerda;
- logo sem forma ou cartão atrás;
- animação de letras somente no hero principal;
- capas sem círculos decorativos;
- mockups sem fundo ou contorno branco;
- carrossel do catálogo ocupa a largura total, gira automaticamente, não possui
  barra de rolagem visível e pausa no hover/foco;
- em `prefers-reduced-motion`, o catálogo volta a permitir rolagem manual;
- nomes repetidos das coleções foram removidos debaixo das capas na seção
  “Catálogo em Destaque”.

O CSS recebeu várias rodadas de ajustes. As regras mais recentes, localizadas no
fim de `app/globals.css`, devem prevalecer sobre estilos anteriores.

## 5. Conteúdo e identidade

Headline principal:

> Literatura que acolhe. Histórias que transformam.

O texto institucional oficial já está aplicado no código. Não restaurar textos
antigos sem conferir o conteúdo atual das páginas.

Nome oficial do presidente e editor-chefe:

> Roberto Araújo

Na página `/quem-somos`, a apresentação institucional informa:

- parceria entre Roberto Araújo e Elton Henrique;
- atuação da ROEL em todos os segmentos editoriais;
- três primeiras coleções: Mundo Neurodiverso, Janelas para o Mundo e
  Protagonistas;
- serviços editoriais e solução gráfica;
- destinação de parte das vendas ao IRA INTEGRA TEA;
- reconhecimento do IRA entre as 1.200 organizações selecionadas para o Selo
  ODS Brasil 2026, integrante do legado da Agenda 2030 da ONU.

Frase de destaque vigente:

> Não publicamos apenas livros. Entregamos um universo literário onde toda
> história encontra seu lugar.

Logo principal:

- `public/logo-roel-transparent-cropped.png`;
- versão SVG preservada em `public/logo-roel.svg`.

## 6. Catálogo, sinopses e mockups

Os dados dos livros ficam centralizados em `app/catalogo/books.ts`. Cada livro
possui slug, título, tema, coleção, tom visual, mockup opcional e sinopse em
parágrafos. Para adicionar um novo livro:

1. incluir o objeto no arquivo de dados;
2. criar ou informar o mockup em `public/mockups/`;
3. preencher `synopsis` quando o texto estiver disponível;
4. confirmar que o exportador cPanel inclui o slug, caso a lista de rotas
   deixe de ser estática.

As páginas individuais usam a rota dinâmica `/catalogo/[slug]`. Livros sem
sinopse exibem uma mensagem de conteúdo em desenvolvimento, sem inventar
informações.

Arquivos utilizados pelo site:

| Livro | Arquivo público |
| --- | --- |
| O Menino que Via o Mundo Diferente | `public/mockups/o-menino-que-via-o-mundo-diferente.png` |
| A Menina dos Mil Pensamentos | `public/mockups/a-menina-dos-mil-pensamentos.png` |
| O Menino que Lia de Outro Jeito | `public/mockups/o-menino-que-lia-de-outro-jeito.png` |
| O Menino do Coração Valente | `public/mockups/o-menino-do-coracao-valente.png` |
| A Menina que Carregava Nuvens | `public/mockups/a-menina-que-carregava-nuvens.png` |
| O Menino dos Pequenos Rituais | `public/mockups/o-menino-dos-pequenos-rituais.png` |
| A Menina do Sorriso que Abraçava o Mundo | `public/mockups/a-menina-do-sorriso-que-abracava-o-mundo.png` |
| A Menina das Ideias Brilhantes | `public/mockups/a-menina-das-ideias-brilhantes.png` |

Observações:

- os arquivos originais permanecem em `mockups/`;
- `mockups/o menino do coracao valente` é um PNG sem extensão;
- `mockups/o menino que via o mundo difrente.png` é uma duplicata com nome
  incorreto e não é usada;
- os cinco livros da coleção Janelas para o Mundo ainda não possuem mockups e
  usam capas sólidas da paleta.

## 7. Coleções no catálogo

A apresentação de `/catalogo` possui três blocos:

1. Coleção Mundo Neurodiverso — azul;
2. Coleção Janelas para o Mundo — rosa;
3. Coleção Protagonistas — amarelo.

O título principal da página é:

> Um catálogo em expansão.

A Coleção Protagonistas está descrita como uma coleção dedicada a trajetórias,
talentos e conquistas. Ainda não foram fornecidos títulos, temas ou mockups para
uma grade própria dessa coleção. Portanto, ela aparece apenas no bloco
introdutório, sem livros inventados.

## 8. cPanel e domínio

O site está sendo instalado em:

`https://unioo.online/editora_V2/`

Por isso todos os recursos do pacote cPanel usam a base `/editora_V2/`. O primeiro
pacote apontava para a raiz do domínio e carregava sem CSS; isso já foi
corrigido.

Exportador:

`scripts/export-cpanel.mjs`

Fluxo para gerar um novo pacote:

```bash
npm run build
npm run dev
node scripts/export-cpanel.mjs http://localhost:3000 /editora_V2/ export-cpanel-editora-v2-latest
cd export-cpanel-editora-v2-latest
zip -r ../Editora-ROEL-cPanel-editora-v2-latest.zip .
```

No cPanel, extrair o conteúdo diretamente em:

`public_html/editora_V2`

O `index.html` e o `.htaccess` precisam ficar diretamente nessa pasta.

Os formulários são estáticos: abrem o cliente de e-mail do visitante e enviam
para `contato@roeleditora.com.br`. Não existe backend PHP ou armazenamento de
leads no cPanel.

O arquivo `Editora-ROEL-cPanel-com-coracao-valente.zip` é um pacote antigo,
preservado apenas como referência. Sempre regenerar um pacote novo antes do
envio ao domínio, pois o exportador agora inclui compliance, FAQ, privacidade
atualizada e as páginas individuais dos livros.

Pacote atualizado gerado em 29 de julho de 2026:

`Editora-ROEL-cPanel-editora-v2-latest.zip`

Este é o pacote corrigido para a instalação em `editora_V2`. O pacote anterior
`Editora-ROEL-cPanel-latest.zip` usava a base `/editora/` e não deve ser
reutilizado nessa pasta, pois faria o navegador carregar CSS, imagens e
scripts da instalação antiga.

Ele contém as páginas principais, 13 páginas individuais de livros, CSS,
mockups, fontes, `.htaccess` e as instruções em `LEIA-ME.txt`.

## 9. Sites/Cloudflare

O projeto também possui configuração do Sites em `.openai/hosting.json`.

- projeto: `appgprj_6a6771614f0481918589f0b04fe7d962`;
- URL publicada anteriormente:
  `https://editora-roel-v2.emailbwgomes.chatgpt.site`;
- acesso dessa URL está configurado como privado/custom, somente para o dono;
- a tentativa de torná-la pública foi interrompida por falta de autorização
  explícita para acesso aberto;
- essa publicação é anterior à inclusão dos mockups e pode estar defasada em
  relação ao código local.

Ao trabalhar neste projeto pelo Codex, seguir o fluxo de Sites porque existe
`.openai/hosting.json`. Não publicar nem ampliar acesso sem autorização clara do
usuário.

## 10. Publicação para apresentação aos diretores

O código local e o pacote cPanel são caminhos diferentes:

- para o domínio próprio, usar o ZIP gerado por `scripts/export-cpanel.mjs` e
  extrair diretamente em `public_html/editora_V2` (ou na pasta correspondente ao
  domínio configurado);
- para o Sites/Cloudflare, é necessário salvar uma versão do código e publicar
  pelo projeto já existente em `.openai/hosting.json`;
- o domínio próprio não pode ser conectado automaticamente sem o hostname e os
  acessos/DNS do provedor. Não compartilhar credenciais no chat; basta fornecer
  o hostname e seguir os registros DNS apresentados pelo provedor.

## 11. Pontos que ainda podem evoluir

- obter e adicionar os cinco mockups da coleção Janelas para o Mundo;
- receber títulos, temas e mockups da Coleção Protagonistas;
- integrar newsletter e formulário a um backend real;
- substituir links de compra por URLs definitivas;
- preencher o blog com artigos;
- revisar textos de LGPD com responsável jurídico;
- republicar a versão mais recente no Sites, caso autorizado;
- configurar domínio definitivo diretamente na hospedagem desejada.

## 12. Preferências do usuário

- comunicação em português;
- ajustes visuais iterativos, sempre com prévia local;
- preservar o estilo editorial acolhedor;
- evitar formas, cartões ou fundos brancos atrás de logos e mockups;
- manter botões pill e navegação textual clara;
- entregar um ZIP atualizado para `public_html/editora_V2` após mudanças
  relevantes;
- não alterar textos oficiais sem solicitação.

## 13. Checklist para continuação

1. Ler este arquivo e verificar `git status`.
2. Rodar `npm install` apenas se as dependências não estiverem presentes.
3. Iniciar com `npm run dev`.
4. Conferir Home, `/catalogo`, uma página de livro, `/compliance`,
   `/privacidade` e `/faq`.
5. Após mudanças, executar `npm run build`.
6. Se a mudança precisar ir ao domínio, regenerar o pacote cPanel com
   `scripts/export-cpanel.mjs`.
7. Não versionar as pastas `export-cpanel*` nem arquivos ZIP gerados.
