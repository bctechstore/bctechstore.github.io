// ============================================================
//  PRODUTOS.JS: aqui mudas tudo da loja (produtos, preços, promoções, horário, FAQ...).
//  Só mexes em textos entre aspas "..." e números. Não apagues vírgulas, aspas nem chavetas.
//  Para veres avisos de erros, abre o teu site com ?verificar no fim do endereço.
//  FOTOS: envia a imagem para o mesmo sítio do index.html (nome em minúsculas, sem espaços,
//  por exemplo netflix.jpg) e escreve esse nome no campo imagem: ou logo: do produto.
// ============================================================

// Põe aqui o teu número com código do país, só dígitos. Exemplo Moçambique: "258841234567"
var WHATSAPP = "258842675656";

// Telegram para encomendas e contacto (só o nome de utilizador, sem @)
var TELEGRAM = "Berson258";

// Email de suporte
var EMAIL = "bersonfernandocontact@gmail.com";

// Taxas de câmbio usadas para mostrar o preço em USDT e em Kuanza (Kz).
// Quantos MT e quantos Kz valem 1 USDT. Muda aqui quando o câmbio mudar.
var TAXAS = { usdtMT: 75, usdtKz: 1200 };

// ===== COMO MUDAR OS PRODUTOS =====
// Cada produto é um bloco entre chaves { }, com estes campos:
//   nome:      o título, por exemplo "Netflix 4K Premium — 30 dias"
//   icone:     já não aparece no site. Podes deixar como está.
//   imagem:    o cartaz do produto. Escreve o nome do ficheiro que enviaste, por exemplo "netflix.jpg".
//              Se deixares "" aparece uma letra num quadrado verde.
//   preco:     por exemplo "299 MT" (sempre em MT; o USDT e o Kz são calculados sozinhos). Se deixares "" aparece "Preço pelo WhatsApp".
//   estoque:   número de contas que tens, por exemplo 10.  0 = Esgotado.  "" = só mostra Disponível.
//   logo:      o logo do produto (opcional). Escreve o nome curto do logo, por exemplo "netflix",
//              ou o nome do ficheiro, por exemplo "netflix.png". Se também puseres "imagem", o cartaz tem prioridade.
//   descricao: texto. Usa \n para mudar de linha. A primeira linha aparece também no cartão.
// Campos opcionais (só escreves se quiseres, senão apaga a linha):
//   destaque:  true  = o produto aparece em "Em destaque" no topo.
//   resumo:    frase curta que aparece no cartão (se não puseres, usa a primeira linha da descrição).
//   duracao:   por exemplo "30 dias".
//   inclui:    lista do que está incluído, por exemplo ["Sem anúncios", "Documentos ilimitados"].
//   entrega:   como recebes o produto. Se não puseres, aparece "combinada pelo WhatsApp".
//   garantia:  só escreve se a garantia for real, por exemplo "25 dias".
//   desconto:  percentagem de desconto, por exemplo 10. O site calcula o preço novo e mostra o antigo riscado. Só funciona se o preço estiver em MT.
//   selo:      etiqueta no produto, por exemplo "Popular", "Novo" ou "Promoção". Só escreves se for verdade.
// Exemplo completo:
// { nome: "Netflix 4K Premium — 30 dias", icone: "🎬", imagem: "", preco: "299 MT", estoque: 10, duracao: "30 dias", garantia: "Completa", descricao: "Suporte: telemóvel, computador e TV." },
// TIRAR: apaga o bloco inteiro.  ADICIONAR: copia um bloco e muda o texto.
// MARCAR ESGOTADO: muda estoque para 0.
// Cada bloco acaba com vírgula. Não apagues aspas nem chavetas.
var GROUPS = [
  ["Cursos", [
    { nome: "Guia completo de importação", icone: "📘", imagem: "poster_curso", preco: "197 MT", estoque: "", destaque: true, resumo: "3 e-books passo a passo para importares com segurança.", garantia: "7 dias, ou o dinheiro de volta", entrega: "Acesso imediato aos 3 e-books.", descricao: "Curso completo: 3 e-books passo a passo para importares com segurança e lucrares em Moçambique.\nVais aprender a criar conta e comprar no AliExpress e no Alibaba, escolher fornecedores de confiança, pagar com segurança usando a RedotPay, trazer os produtos para Moçambique e perceber frete, impostos e desalfandegamento.", inclui: ["Guia Completo do AliExpress", "Guia Prático de Importação (Alibaba)", "Conta RedotPay + Cartão Virtual", "Materiais atualizados e práticos", "Suporte até à tua primeira importação"] },
  ]],
  ["Apps e streaming", [
    { nome: "CapCut Pro Team — 1 mês", icone: "🎞️", imagem: "", desconto: 10, selo: "Black Friday -10%", logo: "capcut_team", preco: "348 MT", estoque: "", duracao: "28 a 30 dias", garantia: "Completa", descricao: "Slot Pro Team.\nEnvia o teu email para seres convidado para o slot." },
    { nome: "CapCut Pro Pessoal — 30 dias", icone: "🎞️", imagem: "", desconto: 10, selo: "Black Friday -10%", logo: "capcut_pessoal", preco: "249 MT", estoque: 5, duracao: "30 dias", garantia: "Completa", descricao: "Conta CapCut Pro pessoal." },
    { nome: "Canva Edu — 3 anos", icone: "🎨", imagem: "", selo: "Popular", logo: "canva", preco: "120 MT", estoque: "", duracao: "3 anos", garantia: "1 ano", entrega: "Aguarda a notificação de conclusão.", descricao: "Slot Canva educativo, adicionado à família por 1 ano.\nPode ser usado em cerca de 80% das funções Pro." },
    { nome: "ChatGPT", icone: "💬", imagem: "", selo: "Popular", logo: "chatgpt", preco: "", estoque: "", descricao: "Assistente de IA para escrever, estudar e criar." },
    { nome: "Claude", icone: "🧠", imagem: "", logo: "claude", preco: "Por negociação", estoque: "", descricao: "Só temos APIs do Claude. Vem negociar." },
    { nome: "Grok Plus — 30 dias", icone: "🤖", imagem: "", logo: "grok", preco: "504 MT", estoque: 40, duracao: "30 dias", garantia: "Sem garantia", entrega: "Precisas de ligar à tua conta do X.", descricao: "Acesso às ferramentas Pro do Grok." },
    { nome: "Netflix 4K Premium — 30 dias", icone: "🎬", imagem: "", selo: "Popular", logo: "netflix", preco: "289 MT", estoque: 8, duracao: "30 dias", garantia: "Completa", resumo: "Suporte: telemóvel, computador e TV.", descricao: "Validade aleatória de 25 a 30 dias: quem compra mais tarde pode receber uma conta com menos dias restantes.\nSuporte: telemóvel, computador e TV." },
    { nome: "Amazon Prime Video — 1 mês", icone: "📦", imagem: "", desconto: 10, selo: "Black Friday -10%", logo: "prime", preco: "289 MT", estoque: 7, duracao: "1 mês", garantia: "25 dias", descricao: "Conta privada.\nFilmes, séries e Prime Video em streaming." },
    { nome: "HBO Max — 1 mês", icone: "🎭", imagem: "", desconto: 10, selo: "Black Friday -10%", logo: "hbo", preco: "349 MT", estoque: "", duracao: "1 mês", garantia: "20 dias", descricao: "Streaming com conteúdos da Warner Bros, DC e séries como Game of Thrones." },
    { nome: "YouTube Premium", icone: "▶️", imagem: "", selo: "Popular", logo: "youtube", preco: "99 MT", estoque: "", descricao: "YouTube sem anúncios e com reprodução em segundo plano.\nPossível adicionar família." },
    { nome: "Spotify Premium", icone: "🎧", imagem: "", selo: "Popular", logo: "spotify", preco: "Por negociação", estoque: "", descricao: "Temos vários pacotes. Fala connosco no WhatsApp e vamos negociar." },
    { nome: "Reelshot", icone: "🎬", imagem: "", logo: "reelshot", preco: "99 MT", estoque: "", selo: "Black Friday", garantia: "100%", resumo: "Promoção Black Friday: só 99 MT.", descricao: "Este é um Reelshot. Não vendemos assinatura: temos o app sem anúncios e com todo o conteúdo grátis, com atualizações.\nEm promoção Black Friday por apenas 99 MT." },
    { nome: "Microsoft Office/365", icone: "📊", imagem: "", desconto: 10, selo: "Black Friday -10%", logo: "microsoft", preco: "899 MT", estoque: 7, garantia: "Até 270 dias", descricao: "Word, Excel, PowerPoint e outras aplicações da Microsoft." },
    { nome: "NordVPN", icone: "🛡️", imagem: "", logo: "nordvpn", preco: "", estoque: "", descricao: "VPN para navegar com mais privacidade." },
    { nome: "HMA VPN", icone: "🔒", imagem: "", logo: "hma", preco: "", estoque: "", descricao: "VPN para navegar com mais privacidade." },
    { nome: "Números para WhatsApp", icone: "📱", imagem: "", logo: "whatsapp", preco: "A partir de 150 MT", estoque: "", resumo: "Moçambique 150 MT · Portugal 299 MT", descricao: "Moçambique: 150 MT\nPortugal: 299 MT" },
  ]],
  ["Criação de conteúdo com IA", [
    { nome: "ElevenLabs — 131K créditos", icone: "🎙️", imagem: "", logo: "elevenlabs", preco: "279 MT", estoque: 1114, descricao: "Créditos para voz por IA.\nVia Vibi.Pro, ferramenta de criação de voz com IA parceira da ElevenLabs e da MiniMax." },
    { nome: "Flow Veo 3", icone: "🎥", imagem: "", logo: "flow", preco: "", estoque: 0, descricao: "Indisponível de momento. Preço em actualização." },
    { nome: "Kling", icone: "✨", imagem: "", logo: "kling", preco: "Por negociação", estoque: "", descricao: "Gerador de vídeo por IA." },
    { nome: "HeyGen Pro — 1000 créditos", icone: "🧑‍💼", imagem: "", logo: "heygen", preco: "2778 MT", estoque: 2, garantia: "2 dias", entrega: "Pedido: 1 a 2 horas.", descricao: "Vídeos com avatares de IA.\nConta pré-configurada.\nProduto in-app iOS; a maioria dos clientes usa os 30 dias completos." },
    { nome: "OpenArt", icone: "🖼️", imagem: "", logo: "openart", preco: "Por negociação", estoque: "", descricao: "Criação de imagens por IA." },
  ]],
  ["Estudo e trabalho", [
    { nome: "Grammarly", icone: "✍️", imagem: "", desconto: 10, selo: "Black Friday -10%", logo: "grammarly", preco: "599 MT", estoque: "", garantia: "1 ano", descricao: "Corrector de escrita e gramática." },
    { nome: "Scribd Premium — 1 mês", icone: "📚", imagem: "", logo: "scribd", preco: "149 MT", estoque: 5, duracao: "1 mês", garantia: "Completa", descricao: "Leitura ilimitada.\nSó permite baixar 2 ficheiros: presta atenção antes de comprar." },
    { nome: "Duolingo Super — 3 meses", icone: "🦉", imagem: "", desconto: 10, selo: "Black Friday -10%", logo: "duolingo", preco: "450 MT", estoque: "", duracao: "3 meses", garantia: "Completa", descricao: "Todos os recursos avançados, sem anúncios." },
    { nome: "Quizlet Plus", icone: "🗂️", imagem: "", logo: "quizlet", preco: "199 MT", estoque: "", inclui: ["Estudo sem anúncios", "Flashcards ilimitados", "Criar turmas e grupos de estudo e atribuir tarefas", "Acompanhar o progresso dos alunos", "Atividades de revisão, testes e lições", "Modos Aprender, Teste e flashcards avançados"], descricao: "Conta Quizlet Plus para professores.\nAdequado para professores, tutores e quem ensina online." },
    { nome: "iLovePDF Premium — 1 ano", icone: "📄", imagem: "", logo: "ilovepdf", preco: "129 MT", estoque: 1, duracao: "1 ano", garantia: "Garantia de falha em 24h", entrega: "Recebes o email e a senha da conta.", inclui: ["Acesso a todas as ferramentas do iLovePDF", "Documentos ilimitados", "Web, telemóvel e computador", "Assinatura electrónica", "Sem anúncios", "2000 créditos de IA"], descricao: "Ferramentas para juntar, dividir e converter PDF." },
    { nome: "Notion", icone: "📝", imagem: "", logo: "notion", preco: "", estoque: "", descricao: "Notas, tarefas e organização de projectos." },
    { nome: "Zoom", icone: "📹", imagem: "", logo: "zoom", preco: "", estoque: "", descricao: "Videochamadas e reuniões online." },
    { nome: "LinkedIn Premium", icone: "💼", imagem: "", logo: "linkedin", preco: "Por negociação", estoque: "", descricao: "Mais recursos para emprego e contactos profissionais." },
  ]]
];
// ===== FIM DA LISTA =====

// ===== REDES SOCIAIS (aparecem no rodapé só se escreveres aqui) =====
// Exemplo: { nome: "TikTok", link: "https://www.tiktok.com/@o_teu_perfil" },
var SOCIAL = [
  { nome: "TikTok", link: "https://www.tiktok.com/@bctechdicas" },
  { nome: "YouTube", link: "https://www.youtube.com/@bctechdicas01" },
  { nome: "Facebook", link: "https://www.facebook.com/profile.php?id=100087617343971" },
  { nome: "Telegram", link: "https://t.me/Berson258" },
];

// ===== PROMOÇÃO BLACK FRIDAY =====
// fim: último dia da promoção, no formato ano-mês-dia. Depois desse dia, os descontos e as etiquetas
// Black Friday desaparecem sozinhos e os preços voltam ao normal (os produtos com "desconto").
// Atenção: o Reelshot tem o preço de promoção (99 MT) escrito directamente. Depois do fim, muda o preço dele aqui.
var PROMO = { fim: "2026-12-31" };

// ===== HORÁRIO DE ATENDIMENTO =====
// texto: aparece no site. abre / fecha: horas (0 a 23) que servem para dizer se estás dentro do horário.
// fuso: diferença para a hora universal (Moçambique = 2). Se deixares texto "", o horário não aparece.
var HORARIO = { texto: "todos os dias, das 06h às 20h (hora de Moçambique)", abre: 6, fecha: 20, fuso: 2 };

// ===== POLÍTICAS (aparecem no rodapé só quando escreves o texto) =====
// Escreve o texto entre aspas. Usa \n para mudar de linha. Se deixares "" o link não aparece.
// Podes usar {usdtMT}, {usdtKz} e {email}: o site troca pelos valores certos.
var POLITICAS = [
  { titulo: "Política de garantia", texto: "A garantia depende de cada produto. O prazo e as condições aparecem na página do produto, no campo Garantia (por exemplo, \"25 dias\" ou \"Completa\"). Quando diz \"Sem garantia\", esse produto não tem garantia.\nSe tiveres algum problema com o acesso, fala connosco pelo WhatsApp ou Telegram dentro do prazo indicado.\nPara ajudar, diz-nos qual foi o produto e a data da compra." },
  { titulo: "Política de reembolso", texto: "O curso Guia completo de importação tem garantia de 7 dias, ou o dinheiro de volta.\nAlguns outros produtos não permitem reembolso. Por isso, antes de pagares, pergunta-nos pelo WhatsApp ou Telegram se o produto que escolheste tem reembolso.\nSe houver algum problema com o teu pedido, fala connosco primeiro. Vemos a situação contigo na conversa." },
  { titulo: "Política de cancelamento", texto: "Para cancelar ou alterar um pedido, fala connosco pelo WhatsApp ou Telegram o mais cedo possível.\nComo alguns produtos não permitem reembolso, confirma as condições antes de pagares." },
  { titulo: "Termos e condições", texto: "Ao fazer uma encomenda, aceitas estes termos.\n1. As encomendas são feitas e combinadas pelo WhatsApp ou Telegram. O site serve para escolheres os produtos e preparares a mensagem do pedido.\n2. Os preços estão em Metical (MT). Os valores em USDT e Kuanza (Kz) são calculados com a taxa indicada no site (1 USDT = {usdtMT} MT e 1 USDT = {usdtKz} Kz) e podem mudar.\n3. Aceitamos pagamentos em criptomoedas, Kuanza e Metical. Os detalhes do pagamento são combinados na conversa.\n4. A disponibilidade depende do estoque. Um produto marcado como Esgotado não pode ser encomendado.\n5. A garantia e o reembolso dependem de cada produto. Vê a Política de garantia e a Política de reembolso.\n6. Podemos actualizar preços, produtos e estes termos quando for preciso." },
  { titulo: "Política de privacidade", texto: "Este site não tem contas, formulários nem pagamentos. Não pedimos o teu nome, email ou telefone no site.\nO carrinho fica guardado apenas no teu telemóvel, no teu navegador. Podes esvaziá-lo quando quiseres.\nDe momento, o site não usa cookies de publicidade nem de análise.\nQuando nos contactas pelo WhatsApp ou Telegram, a tua mensagem e o teu número ficam nessas aplicações, sob as regras delas.\nDúvidas? Escreve para {email}." },
  { titulo: "Condições de utilização", texto: "Ao usares este site, aceitas estas condições.\n- Usa o site só para fins legais e de forma correcta.\n- Textos, preços e disponibilidade podem mudar. Confirma sempre os detalhes na conversa antes de pagar.\n- Os nomes e logótipos dos produtos pertencem aos seus donos. Aparecem só para identificar cada produto.\n- Não copies nem reutilizes o conteúdo do site sem autorização.\n- Podemos actualizar estas condições quando for preciso." },
];

// ===== PERGUNTAS FREQUENTES =====
// Cada pergunta: ["pergunta", "resposta"]. Podes usar {horario}, {usdtMT} e {usdtKz}.
var FAQ = [
  ["Como faço uma encomenda?", "Escolhe o produto e toca em Adicionar ao carrinho (ou em Encomendar no WhatsApp). Depois, no carrinho, escolhe como queres pagar (Metical, Kuanza ou Criptomoedas) e toca em Finalizar no WhatsApp ou no Telegram. A mensagem já vai pronta, com os produtos, as quantidades, o total e a moeda que escolheste.\nNo Telegram, a mensagem é copiada e só tens de a colar."],
  ["Como posso pagar?", "Aceitamos pagamentos em criptomoedas, Kuanza e Metical. No site escolhes a moeda, e os dados para pagares são combinados contigo na conversa."],
  ["Quanto tempo demora a entrega?", "Depende do produto. Quando há um prazo definido, aparece na página do produto, em Entrega. Nos outros casos, o prazo é combinado contigo na conversa pelo WhatsApp ou Telegram."],
  ["Os produtos têm garantia?", "Depende do produto. O prazo aparece na página de cada um, em Garantia. Se diz Sem garantia, esse produto não tem. Podes ler mais na Política de garantia, no fim da página."],
  ["Posso pedir reembolso?", "O curso Guia completo de importação tem garantia de 7 dias, ou o dinheiro de volta. Alguns outros produtos não permitem reembolso, por isso pergunta-nos antes de pagares. Podes ler mais na Política de reembolso, no fim da página."],
  ["Qual é o horário de atendimento?", "Atendemos {horario}."],
  ["Como vejo o preço em USDT e Kuanza?", "Abre a página do produto. Lá aparece o preço em MT e também em USDT e Kz, calculados com 1 USDT = {usdtMT} MT e 1 USDT = {usdtKz} Kz. Estas taxas podem mudar."],
  ["Não encontro o que procuro. E agora?", "Fala connosco pelo WhatsApp ou Telegram e dizemos se temos. Alguns produtos aparecem como Por negociação: nesse caso, o preço é combinado na conversa."],
];

// ===== AVALIAÇÕES DE CLIENTES =====
// Só escreves avaliações reais, que os clientes te enviaram. Cada uma é um bloco:
//   { nome: "Maria", estrelas: 5, texto: "Recebi tudo rápido.", data: "Nov 2026" },
// (data é opcional). Enquanto a lista estiver vazia, o site convida os clientes a enviar a sua avaliação.
var AVALIACOES = [
];
