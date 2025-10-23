// Lista de produtos (12 slots)
const produtos = [
  {
    nome: "Relógio Digital Esportivo",
    descricao: "À prova d'água com cronômetro e LED.",
    preco: "89,90",
    foto: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    link: "#"
  },
  {
    nome: "Playbox Jogos Retrô",
    descricao: "Video Game Com Diversos Jogos Retro",
    preco: "64.90",
    foto: "https://s3.amazonaws.com/production.kirvano.com/products/6a87ac58-42cf-42ec-8fe3-86682eedd908/cover-1732246291698.webp",
    link: "https://pay.kirvano.com/ab8baf5c-67a9-4e22-9d59-de308dc88213?aff=1bee9b62-1656-453e-ab5e-65fc21619d63"
  },
  {
    nome: "Detetive Digital",
    descricao: "Seja o herói digital que o mundo precisa! Em Detetive Digital, você vai aprender as estratégias essenciais para identificar, evitar e combater golpes online como um verdadeiro especialista. Inspirado",
    preco: "4.90",
    foto: "https://s3.amazonaws.com/production.kirvano.com/products/62b48d57-aff7-4dac-b7ae-835666845d40/cover-1757976630395.webp",
    link: "https://pay.kirvano.com/25701e9b-57fa-4fc2-8631-68fa2697604b?aff=2428858d-5e1c-47aa-86fd-fb2d3bad794d"
  },
  {
    nome: "CineFlick Card",
    descricao: "O CineFlic Ofereçe um aplicativo totalmente exclusivo compatível com seu celular, televisores aparelhos de TV Box, videogame e muito mais. Mais de 100.000 conteúdos em nosso aplicativo, você pode assistir todos os filmes, até mesmo os lançamentos",
    preco: "19.90/mes",
    foto: "https://s3.amazonaws.com/production.kirvano.com/products/cbb433be-6b46-45fe-853a-27ca4e89bfa3/cover-1746737876688.webp",
    link: "https://pay.kirvano.com/1721d6a3-0d8f-4226-8dee-9889e6a7e11c?aff=910ee81c-9e30-46d8-b373-d30a976f295e"
  },
  {
    nome: "LunaTv",
    descricao: " O melhor serviço de streaming do Brasil! Tenha acesso a conteúdo de qualidade em sua casa, e garanta diversão para sua família! Assista de qualquer dispositivo, seja televisão, notebook ou celular",
    preco: "24.90 Permanente",
    foto: "https://s3.amazonaws.com/production.kirvano.com/products/d4a307b0-5605-496a-8fd0-9fc060922ca7/cover-1736548712958.webp",
    link: "https://pay.kirvano.com/3aac96c1-7db8-4bed-900a-a51664129a81?aff=755cc630-2fc5-408e-aeb1-a7698fa20a22"
  },
  {
    nome: "SoccerBOT 🤖",
    descricao: "Receba as melhores análises todos os dias de forma automatizada!",
    preco: "10.00",
    foto: "https://s3.amazonaws.com/production.kirvano.com/products/1ce2b019-b654-4fcb-befa-f06562c2de4d/cover-1719260433017.webp",
    link: "https://pay.kirvano.com/8da94861-0a56-488a-9bee-9732ec45e35f?aff=af279327-434c-4d8c-9114-7d1dd7208ad7"
  },
  {
    nome: "Creatina Monohidratada em Pote 300G",
    descricao: "O que você precisa saber sobre este produto: Dark Lab é uma renomada empresa internacional, agraciada com múltiplos prêmios por sua busca incessante pela excelência na pureza. Revolucionando o mercado de suplementação ao introduzir inovação de maneiras inéditas. Com abordagem pioneira se baseia na utilização exclusiva de matérias-primas importadas, cuidadosamente selecionadas por sua qualidade insuperável.",
    preco: "39,89",
    foto: "https://http2.mlstatic.com/D_NQ_NP_2X_694030-MLA94937903130_102025-F.webp",
    link: "https://mercadolivre.com/sec/2ZfHth8"
  },
  {
    nome: "Creatina Monohidratada Pura 500g Dark Lab Unidade",
    descricao: "Apresentamos a Creatina da Dark Lab: pureza comprovada em todos os aspectos. Passando por rigorosos testes de qualidade, garantindo sua excelência. A análise conduzida pela Abenutri registrou uma impressionante pureza de 98,1%, enquanto o teste realizado pelo Felix Bonfin atestou uma pureza impecável de 100%.",
    preco: "49.00",
    foto: "https://http2.mlstatic.com/D_NQ_NP_2X_780402-MLA94915803900_102025-F.webp",
    link: "https://mercadolivre.com/sec/2nJ6chG"
  },
  {
    nome: "Destravando o Iceberg (CRIAÇÃO DE CONTEÚDO)",
    descricao: "Transforme seu conteúdo em fonte de renda, pare de consumir e comece a produzir.",
    preco: "49.90",
    foto: "https://destravandoiceberg.com/wp-content/uploads/2025/05/destravando-iceberg-sem-fundo-PNG-1024x1024.png",
    link: "https://cakto.app/CUkDKKj/?affiliate=m9PvNxzk"
  },
  {
    nome: "Como Fazer Sua Primeira Venda ",
    descricao: "Primeira Venda em 24H 3.0: Estratégias comprovadas para fazer sua primeira venda online em menos de 24 horas, mesmo que você seja iniciante. Método rápido e eficaz para alcançar resultados reais.",
    preco: "19.90",
    foto: "https://cdn-checkout.cakto.com.br/products/01-LOGOp24.png",
    link: "https://cakto.app/9zYZSBK/?affiliate=Nv4uwvyf"
  },
 
];

// Gera os produtos na tela
const lista = document.getElementById("product-list");

produtos.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("product");
  card.innerHTML = `
    <img src="${p.foto}" alt="${p.nome}">
    <h3>${p.nome}</h3>
    <p>${p.descricao}</p>
    <div class="price">R$ ${p.preco}</div>
    <button onclick="window.open('${p.link}', '_blank')">Comprar</button>
  `;
  lista.appendChild(card);
});