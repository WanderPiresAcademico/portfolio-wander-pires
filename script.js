/* ==========================================================
   PORTFÓLIO MODERNO – Wander Pires Silva Coelho
   JavaScript: Arrays de objetos + renderização dinâmica
   ========================================================== */

// ===== ARRAY DE OBJETOS COM OS PROJETOS =====
let projetos = [
  {
    titulo: "Portfólio Pessoal",
    descricao:
      "Meu portfólio profissional com HTML5, CSS3 e JavaScript puro — layout responsivo, partículas animadas e renderização dinâmica.",
    tecnologias: ["HTML5", "CSS3", "JavaScript"],
    link: "#",
    emoji: "🌐",
  },
  {
    emoji: "img/projeto-1.jpg",
    titulo: "Gerenciador de Bibliotecas",
    descricao:
      "Controle Escolar Inteligente - Gerenciamento de Biblioteca",
    tecnologias: ["Construído com Tecnologia React 19 - Material UI - Supabase - Express.js - MercadoPago SDK - ZXing / html5-qrcode - Hospedagem via GitHub Pages e no Surge - JavaScript - Node.js/Express."],
    link: "https://cei-sistema-biblioteca.surge.sh",
    imgZoom: 0.3,
  },
  {
    emoji: "img/projeto-2.jpg",
    titulo: "EduSync-PRO - Sistema Criador de Horário de Aula Escolar",
    descricao:
      "EduSync-PRO é um Sistema Criador de Horário de Aula Escolar profissional, acompanhado de gerador de horário emergencial, frequência de professores, calendário escolar, painel eletrônico, comunicação ao vivo com envio de mensagens e muitos relatórios.",
    tecnologias: ["Construído com Tecnologia React 19 - Material UI - Supabase - Express.js - MercadoPago SDK - ZXing / html5-qrcode - Hospedagem via GitHub Pages e no Surge - JavaScript - Node.js/Express."],
    link: "https://criador-horario-aula.surge.sh/#/login",
    imgZoom: 0.3,
  },
  {
    emoji: "img/projeto-3.jpg",
    titulo: "Anamnese Integrativa",
    descricao:
      "Anamnese Integrativa é um sistema completo de apoio ao terapêuta, fornecedo-lhe segurança às indicações  suplementares e fitoterápicas, acompanhamento nas análises e anamnese e tratamentos terapêuticos a interagentes..",
    tecnologias: ["Construído com Tecnologia React 19 - Material UI - Supabase - Express.js - MercadoPago SDK - ZXing / html5-qrcode - Hospedagem via GitHub Pages e no Surge - JavaScript - Node.js/Express."],
    link: "https://anamneseintegrativa.surge.sh/",
    imgZoom: 0.3,
  },
  {
    emoji: "img/projeto-4.jpg",
    titulo: "Gerador de Certificados",
    descricao:
      "O Sistema Gerador de Certificados é um facilitador para o trabalho da gestão escolar por gerar Certificados totalmente editáveis em massa, acompanhado pelo Hist´rorico Escolar do Estudante., tendo como modelos primários os Certificados e Hstóricos da Rede Estadual da Educação do Estado Piauí.",
    tecnologias: ["Construído com Tecnologia React 19 - Material UI - Supabase - Express.js - MercadoPago SDK - ZXing / html5-qrcode - Hospedagem via GitHub Pages e no Surge - JavaScript - Node.js/Express."],
    link: "https://gerador-certificados.surge.sh/login.html",
    imgZoom: 0.3,
  },
];

// ===== ARRAY DE OBJETOS COM FORMAÇÕES E CURSOS (ordem cronológica) =====
let formacoes = [
  {
    tipo: "Ensino Médio",
    instituicao: 'Escola Estadual Dr. "Mariano da Rocha"',
    curso: "Ensino Médio Completo",
    local: "Teixeiras - MG",
    periodo: "Concluído",
  },
  {
    tipo: "Graduação",
    instituicao: "Universidade Estadual do Piauí – UESPI",
    curso: "Licenciatura Plena em Letras / Inglês",
    local: "Teresina - PI",
    periodo: "Jan/2001 a Dez/2004 · 2.220 h/a",
  },
  {
    tipo: "Experiência Profissional",
    instituicao: "Rede Municipal de Educação de Curimatá - PI",
    curso: "Professor Efetivo",
    local: "Curimatá - PI",
    periodo: "Desde Fev/2006",
  },
  {
    tipo: "Experiência Profissional",
    instituicao: "Rede Estadual de Educação do Estado do Piauí",
    curso: "Professor Efetivo",
    local: "Piauí",
    periodo: "Desde Fev/2006",
  },
  {
    tipo: "Pós-Graduação",
    instituicao: "Instituto Superior de Teologia Aplicada",
    curso: "Especialização em Metodologia do Ensino Língua Inglesa",
    local: "Sobral - CE",
    periodo: "Jan/2007 a Jul/2008 · 360 h/a",
  },
  {
    tipo: "Pós-Graduação",
    instituicao: "Universidade Estadual do Piauí – UESPI",
    curso: "Especialização em Educação: Pedagogia do Ensino Fundamental e Médio",
    local: "Teresina - PI",
    periodo: "Jan/2007 a Fev/2008 · 400 h/a",
  },
  {
    tipo: "Pós-Graduação",
    instituicao: "Faculdade Latino-Americana de Educação – FLATED",
    curso: "Especialização em Gestão Escolar com Habilitação em Supervisão Escolar",
    local: "Fortaleza - CE",
    periodo: "Mar/2009 a Jul/2010 · 390 h/a",
  },
  {
    tipo: "Curso Livre",
    instituicao: "Portal Educação",
    curso: "Gestão Escolar",
    local: "São Paulo - SP",
    periodo: "Jan/2010 · 60 h/a",
  },
  {
    tipo: "Experiência Profissional",
    instituicao: "CETI Desembargador Amaral",
    curso: "Diretor Escolar",
    local: "Curimatá - PI",
    periodo: "Desde Jan/2010",
  },
  {
    tipo: "Curso Livre",
    instituicao: "Universidade de Brasília",
    curso: "Prevenção do Uso de Drogas para Educadores de Escolas Públicas",
    local: "Brasília - DF",
    periodo: "Ago/2012 a Abr/2013 · 180 h/a",
  },
  {
    tipo: "Curso Técnico",
    instituicao: "SAM Cursos, Treinamento, Serviços e Comércio",
    curso: "Eletricista de Rede, Alta e Baixa Tensão",
    local: "Curimatá - PI",
    periodo: "Abr/2016 a Mai/2016 · 120 h/a",
  },
  {
    tipo: "Curso Técnico",
    instituicao: "SAM Cursos, Treinamento, Serviços e Comércio",
    curso: "NR10 – Complementar - SEP",
    local: "Curimatá - PI",
    periodo: "Mai/2016 · 40 h/a",
  },
  {
    tipo: "Curso Técnico",
    instituicao: "SAM Cursos, Treinamento, Serviços e Comércio",
    curso: "NR35 – Trabalho em Altura",
    local: "Curimatá - PI",
    periodo: "Mai/2016 · 8 h/a",
  },
  {
    tipo: "Curso Livre",
    instituicao: "Portal Educação",
    curso: "Introdução à Rede de Computadores",
    local: "São Paulo - SP",
    periodo: "2016 · 80 h/a",
  },
  {
    tipo: "Curso Livre",
    instituicao: "Portal Educação",
    curso: "Educação Infantil",
    local: "São Paulo - SP",
    periodo: "Abr/2016 a Jun/2016 · 60 h/a",
  },
  {
    tipo: "Graduação",
    instituicao: "Universidade Estadual do Piauí – UESPI",
    curso: "Licenciatura Plena em Pedagogia",
    local: "Teresina - PI",
    periodo: "2018 · 1.455 h/a",
  },
  {
    tipo: "Curso Livre",
    instituicao: "SEDUC – 15ª GRE",
    curso: "A Lei Maria da Penha nas Escolas: Desconstruindo a Violência",
    local: "Corrente - PI",
    periodo: "Ago/2018 · 10 h/a",
  },
  {
    tipo: "Curso Livre",
    instituicao: "Secretaria da Educação e Cultura do Piauí – SEDUC",
    curso: "Formação de Gestores Escolares",
    local: "Teresina - PI",
    periodo: "Out/2023 · 40 h/a",
  },
  {
    tipo: "Curso Livre",
    instituicao: "Instituto Viva Melhor",
    curso: "Naturopatia Integrativa e Iridologia",
    local: "Campinas - SP",
    periodo: "Fev/2024 a Jun/2024 · 600 h/a",
  },
  {
    tipo: "Curso Livre",
    instituicao: "ABRATH",
    curso: "Congresso Luso-brasileiro de Práticas Naturais e Integrativas",
    local: "Fortaleza - CE",
    periodo: "2024 · 48 h/a",
  },
  {
    tipo: "Pós-Graduação",
    instituicao: "UniBF – Centro Universitário",
    curso: "Naturopatia com Ênfase em Medicina Integrativa (Lato Sensu)",
    local: "Paraíso do Norte - PR",
    periodo: "Jun/2024 a Out/2025 · 1.240 h/a",
  },
  {
    tipo: "Pós-Graduação",
    instituicao: "Instituto Viva Melhor",
    curso: "Naturopatia Integrativa e Iridologia",
    local: "Campinas - SP",
    periodo: "Jun/2024 a Jul/2025 · 1.240 h/a",
  },
  {
    tipo: "Curso Livre",
    instituicao: "Universidade Online de Viçosa",
    curso: "Capacitação de Manipulador de Medicamentos",
    local: "Viçosa - MG",
    periodo: "Jun/2024 · 60 h/a",
  },
  {
    tipo: "Curso Livre",
    instituicao: "Faculdade UNIFTB - VENES",
    curso: "Farmacologia Clínica e Terapêutica e Boas Práticas de Prescrição",
    local: "Juazeiro do Norte - CE",
    periodo: "Out/2024 a Nov/2024 · 40 h/a",
  },
  {
    tipo: "Curso Livre",
    instituicao: "Faculdade UNIFTB - VENES",
    curso: "Noções de Primeiros Socorros",
    local: "Juazeiro do Norte - CE",
    periodo: "Out/2024 a Nov/2024 · 180 h/a",
  },
  {
    tipo: "Curso Livre",
    instituicao: "Faculdade UNIFTB - VENES",
    curso: "Farmacoterapia e Atenção Farmacêutica",
    local: "Juazeiro do Norte - CE",
    periodo: "Out/2024 a Nov/2024 · 180 h/a",
  },
  {
    tipo: "Curso Livre",
    instituicao: "Instituto Emmanoel Fernandes (IEF)",
    curso: "Biorressonância Magnética na Prática",
    local: "Florianópolis - SC",
    periodo: "Out/2024 · 30 h/a",
  },
  {
    tipo: "Curso Livre",
    instituicao: "Instituto Emmanoel Fernandes (IEF)",
    curso: "Soroterapia Ortomolecular",
    local: "Florianópolis - SC",
    periodo: "Out/2024 · 30 h/a",
  },
  {
    tipo: "Curso Livre",
    instituicao: "Go Kursos – Inovações Educacionais LTDA",
    curso: "Conexão EAD: Nivelamento em Português",
    local: "",
    periodo: "Jan/2025 · 10 h/a",
  },
  {
    tipo: "Curso Livre",
    instituicao: "Projeto Plátano - UNIQUANTI",
    curso: "Atualização em Iridologia Moderna com John Andrews",
    local: "Inglaterra",
    periodo: "Abr/2025 · 20 h/a",
  },
  {
    tipo: "Curso Livre",
    instituicao: "ABRATH",
    curso: "Formação em Fitoterapia e Plantas Medicinais – Terapeuta em Fitoterapia Integrativa",
    local: "Fortaleza - CE",
    periodo: "2025 · 600 h/a",
  },
  {
    tipo: "Curso Livre",
    instituicao: "Fraternidade Farmacêutica",
    curso: "Formação em Farmácia Integrativa",
    local: "Igarapé - MG",
    periodo: "2025 · 100 h/a",
  },
  {
    tipo: "Curso Livre",
    instituicao: "Fundação Getúlio Vargas - FGV",
    curso: "Gestão Escolar na Prática: Dimensão Político-Institucional",
    local: "Rio de Janeiro - RJ",
    periodo: "2025 · 48 h/a",
  },
  {
    tipo: "Curso Livre",
    instituicao: "Fraternidade Farmacêutica",
    curso: "Formação em Interpretação de Exames Laboratoriais",
    local: "Igarapé - MG",
    periodo: "2025 · 10 h/a",
  },
];

// ===== FILTRO ATIVO =====
let filtroAtual = "Todos";

// ===== PERFIL "SOBRE MIM" (dinâmico) =====
let sobreParagrafos = [
  'Olá! Meu nome é <strong>Wander Pires Silva Coelho</strong>, nasci em <strong>20 de maio de 1979</strong>, natural de <strong>São Paulo - SP</strong>. Sou educador, naturopata e estudante de programação web. Atuo como Diretor Escolar do CETI Desembargador Amaral em Curimatá-PI desde 2010 e sou professor efetivo das redes municipal e estadual de educação do Piauí.',
  'Este portfólio foi construído com <strong>HTML5</strong>, <strong>CSS3</strong> e <strong>JavaScript</strong>, demonstrando estrutura semântica, responsividade e interatividade.',
];

let habilidades = [];

// ===== DADOS PESSOAIS (editáveis) =====
let dadosPessoais = {
  nome: "Wander Pires Silva Coelho",
  nascimento: "20 de maio de 1979",
  naturalidade: "São Paulo - SP",
  endereco: "Av. Valdecir Rodrigues de Albuquerque",
  cidade: "Curimatá",
  estado: "Piauí",
  celular: "(89) 9 8139 8723",
  email: "wanderpsc@gmail.com",
  profissao: "Educador / Naturopata / Desenvolvedor Web",
  cargo: "Diretor Escolar – C.E.T.I. Desembargador Amaral",
};

let camposLabels = {
  nome: "Nome Completo",
  nascimento: "Data de Nascimento",
  naturalidade: "Naturalidade",
  endereco: "Endereço",
  cidade: "Cidade",
  estado: "Estado",
  celular: "Celular / WhatsApp",
  email: "E-mail",
  profissao: "Profissão",
  cargo: "Cargo Atual",
};

let editandoDados = false;
let modoEdicao = false;

// ===== CONTATOS (editáveis) =====
let contatos = [
  { tipo: "email", label: "E-mail", valor: "wanderpsc@gmail.com" },
  { tipo: "link", label: "WhatsApp", valor: "(89) 9 8139 8723" },
];

// ===== PERSISTÊNCIA COM LOCALSTORAGE =====
function salvarDados() {
  localStorage.setItem("portfolio_projetos", JSON.stringify(projetos));
  localStorage.setItem("portfolio_formacoes", JSON.stringify(formacoes));
  localStorage.setItem("portfolio_dados", JSON.stringify(dadosPessoais));
  localStorage.setItem("portfolio_campos_labels", JSON.stringify(camposLabels));
  localStorage.setItem("portfolio_sobre_paragrafos", JSON.stringify(sobreParagrafos));
  localStorage.setItem("portfolio_habilidades", JSON.stringify(habilidades));
  localStorage.setItem("portfolio_contatos", JSON.stringify(contatos));
}

async function carregarDados() {
  // 1. Buscar dados.json como fonte principal (publicado no GitHub)
  try {
    const resp = await fetch("dados.json");
    if (resp.ok) {
      const dados = await resp.json();
      if (dados.projetos) projetos = dados.projetos;
      if (dados.formacoes) formacoes = dados.formacoes;
      if (dados.dadosPessoais) dadosPessoais = dados.dadosPessoais;
      if (dados.camposLabels) camposLabels = dados.camposLabels;
      if (dados.sobreParagrafos) sobreParagrafos = dados.sobreParagrafos;
      if (dados.habilidades) habilidades = dados.habilidades;
      if (dados.contatos) contatos = dados.contatos;
    }
  } catch (e) {
    // Se falhar, usa os defaults hardcoded do script
  }

  // 2. Em modo edição, localStorage sobrescreve (preview local)
  if (localStorage.getItem("portfolio_modo_edicao") === "true") {
    const p = localStorage.getItem("portfolio_projetos");
    const f = localStorage.getItem("portfolio_formacoes");
    const d = localStorage.getItem("portfolio_dados");
    const cl = localStorage.getItem("portfolio_campos_labels");
    const sp = localStorage.getItem("portfolio_sobre_paragrafos");
    const h = localStorage.getItem("portfolio_habilidades");
    const ct = localStorage.getItem("portfolio_contatos");
    if (p) projetos = JSON.parse(p);
    if (f) formacoes = JSON.parse(f);
    if (d) dadosPessoais = JSON.parse(d);
    if (cl) camposLabels = JSON.parse(cl);
    if (sp) sobreParagrafos = JSON.parse(sp);
    if (h) habilidades = JSON.parse(h);
    if (ct) contatos = JSON.parse(ct);
  }
}

// ===== PUBLICAR ALTERAÇÕES (baixar dados.json atualizado) =====
function publicarDados() {
  const dados = {
    projetos,
    formacoes,
    dadosPessoais,
    camposLabels,
    sobreParagrafos,
    habilidades,
    contatos,
  };
  const blob = new Blob([JSON.stringify(dados, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "dados.json";
  a.click();
  URL.revokeObjectURL(a.href);
  alert("Arquivo dados.json baixado!\nSubstitua-o na pasta do projeto e faça push para o GitHub.");
}

// ===== MODO EDIÇÃO (Ctrl + Shift + E) =====
function toggleModoEdicao() {
  modoEdicao = !modoEdicao;
  document.body.classList.toggle("modo-edicao", modoEdicao);
  localStorage.setItem("portfolio_modo_edicao", modoEdicao);

  // Botão flutuante "Publicar" (visível apenas em modo edição)
  let btnPublicar = document.getElementById("btnPublicarDados");
  if (!btnPublicar) {
    btnPublicar = document.createElement("button");
    btnPublicar.id = "btnPublicarDados";
    btnPublicar.textContent = "🚀 Publicar Alterações";
    btnPublicar.addEventListener("click", publicarDados);
    document.body.appendChild(btnPublicar);
  }
  btnPublicar.style.display = modoEdicao ? "block" : "none";
}

function carregarModoEdicao() {
  modoEdicao = localStorage.getItem("portfolio_modo_edicao") === "true";
  document.body.classList.toggle("modo-edicao", modoEdicao);
}

// ===== PARTÍCULAS DE FUNDO (Canvas) =====
function iniciarParticulas() {
  const canvas = document.getElementById("particulas");
  const ctx = canvas.getContext("2d");
  let particulas = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  // Cria partículas
  for (let i = 0; i < 60; i++) {
    particulas.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacidade: Math.random() * 0.4 + 0.1,
    });
  }

  function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particulas.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 212, 255, ${p.opacidade})`;
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    // Linhas de conexão
    for (let i = 0; i < particulas.length; i++) {
      for (let j = i + 1; j < particulas.length; j++) {
        const dist = Math.hypot(
          particulas[i].x - particulas[j].x,
          particulas[i].y - particulas[j].y
        );
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particulas[i].x, particulas[i].y);
          ctx.lineTo(particulas[j].x, particulas[j].y);
          ctx.strokeStyle = `rgba(0, 212, 255, ${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(desenhar);
  }

  desenhar();
}

// ===== RENDERIZAÇÃO DINÂMICA DOS PROJETOS =====
function renderizarProjetos() {
  const grid = document.getElementById("projetosGrid");
  grid.innerHTML = "";

  projetos.forEach((projeto, i) => {
    const card = document.createElement("article");
    card.classList.add("projeto-card");
    card.style.animationDelay = `${i * 0.1}s`;

    const tagsHTML = projeto.tecnologias
      .map((tech) => `<span class="tag">${tech}</span>`)
      .join("");

    const imgZoom = projeto.imgZoom || 1;
    const isImagem = projeto.emoji.startsWith("data:image") || /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(projeto.emoji);
    const emojiHTML = isImagem
      ? `<img src="${projeto.emoji}" alt="Imagem do projeto" class="projeto-card__img-foto" style="transform: scale(${imgZoom})">`
      : projeto.emoji;

    const zoomHTML = isImagem
      ? `<div class="projeto-card__zoom">
          <label>🔍</label>
          <input type="range" class="projeto-card__zoom-range" data-index="${i}" min="0.3" max="3" step="0.05" value="${imgZoom}">
          <span class="projeto-card__zoom-valor">${imgZoom.toFixed(1)}×</span>
        </div>`
      : "";

    card.innerHTML = `
      <div class="projeto-card__acoes">
        <button class="projeto-card__btn-editar" data-index="${i}" title="Editar">&#9998;</button>
        <button class="projeto-card__btn-remover" data-index="${i}" title="Remover">&times;</button>
      </div>
      <div class="projeto-card__img">${emojiHTML}</div>
      ${zoomHTML}
      <div class="projeto-card__body">
        <h3 class="projeto-card__titulo">${projeto.titulo}</h3>
        <p class="projeto-card__descricao">${projeto.descricao}</p>
        <div class="projeto-card__techs">${tagsHTML}</div>
        <a href="${projeto.link}" class="projeto-card__link" target="_blank" rel="noopener">
          Ver Projeto
        </a>
      </div>
    `;

    grid.appendChild(card);
  });

  // Botões de remover
  grid.querySelectorAll(".projeto-card__btn-remover").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index, 10);
      projetos.splice(idx, 1);
      salvarDados();
      renderizarProjetos();
    });
  });

  // Botões de editar
  grid.querySelectorAll(".projeto-card__btn-editar").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index, 10);
      if (typeof abrirModalProjetoEditar === "function") {
        abrirModalProjetoEditar(idx);
      }
    });
  });

  // Zoom das imagens dos projetos
  grid.querySelectorAll(".projeto-card__zoom-range").forEach((range) => {
    range.addEventListener("input", () => {
      const idx = parseInt(range.dataset.index, 10);
      const z = parseFloat(range.value);
      projetos[idx].imgZoom = z;
      // Atualizar imagem visualmente sem re-renderizar
      const card = range.closest(".projeto-card");
      const img = card.querySelector(".projeto-card__img-foto");
      const label = card.querySelector(".projeto-card__zoom-valor");
      if (img) img.style.transform = `scale(${z})`;
      if (label) label.textContent = z.toFixed(1) + "×";
      salvarDados();
    });
  });
}

// ===== RENDERIZAÇÃO DINÂMICA DAS FORMAÇÕES =====
function renderizarFormacoes() {
  const lista = document.getElementById("formacaoLista");
  lista.innerHTML = "";

  const itens =
    filtroAtual === "Todos"
      ? formacoes
      : formacoes.filter((f) => f.tipo === filtroAtual);

  itens.forEach((formacao, index) => {
    // Descobrir o index real no array original
    const idxReal = formacoes.indexOf(formacao);

    const card = document.createElement("div");
    card.classList.add("formacao-card");

    const detalhes = [formacao.local, formacao.periodo]
      .filter(Boolean)
      .join(" · ");

    card.innerHTML = `
      <button class="formacao-card__btn-remover" data-index="${idxReal}" title="Remover">&times;</button>
      <div class="formacao-card__tipo">${formacao.tipo}</div>
      <h3 class="formacao-card__curso">${formacao.curso}</h3>
      <p class="formacao-card__instituicao">${formacao.instituicao}</p>
      ${detalhes ? `<p class="formacao-card__detalhes">${detalhes}</p>` : ""}
    `;

    lista.appendChild(card);
  });

  // Botões de remover
  lista.querySelectorAll(".formacao-card__btn-remover").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.index, 10);
      formacoes.splice(idx, 1);
      salvarDados();
      renderizarFormacoes();
    });
  });
}

// ===== FILTROS DA FORMAÇÃO =====
function configurarFiltros() {
  const container = document.getElementById("filtrosFormacao");

  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".filtro-btn");
    if (!btn) return;

    container
      .querySelectorAll(".filtro-btn")
      .forEach((b) => b.classList.remove("ativo"));
    btn.classList.add("ativo");

    filtroAtual = btn.dataset.filtro;
    renderizarFormacoes();
  });
}

// ===== MODAL DE ADICIONAR FORMAÇÃO =====
function configurarModal() {
  const btnAdd = document.getElementById("btnAddFormacao");
  const overlay = document.getElementById("modalFormacao");
  const btnFechar = document.getElementById("modalFechar");
  const form = document.getElementById("formFormacao");

  function abrirModal() {
    overlay.classList.add("ativo");
  }

  function fecharModal() {
    overlay.classList.remove("ativo");
    form.reset();
  }

  btnAdd.addEventListener("click", abrirModal);
  btnFechar.addEventListener("click", fecharModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) fecharModal();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const novaFormacao = {
      tipo: document.getElementById("campoTipo").value.trim(),
      instituicao: document.getElementById("campoInstituicao").value.trim(),
      curso: document.getElementById("campoCurso").value.trim(),
      local: document.getElementById("campoLocal").value.trim(),
      periodo: document.getElementById("campoPeriodo").value.trim(),
    };

    formacoes.push(novaFormacao);
    salvarDados();
    renderizarFormacoes();
    fecharModal();
  });
}

// ===== MODAL DE ADICIONAR/EDITAR PROJETO =====
function configurarModalProjeto() {
  const btnAdd = document.getElementById("btnAddProjeto");
  const overlay = document.getElementById("modalProjeto");
  const btnFechar = document.getElementById("modalProjetoFechar");
  const form = document.getElementById("formProjeto");
  const modalTitulo = overlay.querySelector(".modal__titulo");
  const btnSalvar = form.querySelector(".modal__btn-salvar");

  // Elementos do campo emoji/imagem
  const emojiInputArea = document.getElementById("emojiInputArea");
  const emojiPreview = document.getElementById("emojiPreview");
  const campoEmoji = document.getElementById("campoEmoji");
  const btnEmojiImg = document.getElementById("btnEmojiImg");
  const inputEmojiImg = document.getElementById("inputEmojiImg");

  let emojiValor = ""; // guarda emoji texto ou data-URL da imagem
  let editandoIndex = -1; // -1 = criando, >= 0 = editando

  // Atualiza o preview do campo emoji
  function atualizarEmojiPreview(valor) {
    emojiValor = valor;
    if (!valor) {
      emojiPreview.innerHTML = '<span class="emoji-input__placeholder">Cole um emoji ou imagem (Ctrl+V)</span>';
      return;
    }
    if (valor.startsWith("data:image")) {
      emojiPreview.innerHTML = '<img src="' + valor + '" alt="Imagem do projeto" class="emoji-input__img">';
      campoEmoji.value = "";
    } else {
      emojiPreview.innerHTML = '<span class="emoji-input__emoji">' + valor + '</span>';
    }
  }

  // Processa um arquivo de imagem e atualiza o preview
  function processarImagem(arquivo) {
    if (!arquivo || !arquivo.type.startsWith("image/")) return;
    const leitor = new FileReader();
    leitor.onload = (ev) => atualizarEmojiPreview(ev.target.result);
    leitor.readAsDataURL(arquivo);
  }

  // Colar imagem (Ctrl+V) na área do emoji
  emojiInputArea.addEventListener("paste", (e) => {
    const items = e.clipboardData && e.clipboardData.items;
    if (!items) return;
    for (const item of items) {
      if (item.type.startsWith("image/")) {
        e.preventDefault();
        processarImagem(item.getAsFile());
        return;
      }
    }
  });

  // Arrastar e soltar imagem
  emojiInputArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    emojiInputArea.classList.add("emoji-input--drag");
  });
  emojiInputArea.addEventListener("dragleave", () => {
    emojiInputArea.classList.remove("emoji-input--drag");
  });
  emojiInputArea.addEventListener("drop", (e) => {
    e.preventDefault();
    emojiInputArea.classList.remove("emoji-input--drag");
    const arquivo = e.dataTransfer.files && e.dataTransfer.files[0];
    if (arquivo) processarImagem(arquivo);
  });

  // Botão para escolher imagem do disco
  btnEmojiImg.addEventListener("click", () => inputEmojiImg.click());
  inputEmojiImg.addEventListener("change", (e) => {
    const arquivo = e.target.files[0];
    if (arquivo) processarImagem(arquivo);
  });

  // Quando o usuário digita um emoji no campo texto, atualizar preview
  campoEmoji.addEventListener("input", () => {
    const val = campoEmoji.value.trim();
    if (val) {
      atualizarEmojiPreview(val);
    } else if (!emojiValor.startsWith("data:image")) {
      atualizarEmojiPreview("");
    }
  });

  function abrirModal() {
    editandoIndex = -1;
    modalTitulo.textContent = "Novo Projeto";
    btnSalvar.textContent = "Salvar";
    overlay.classList.add("ativo");
  }

  function fecharModal() {
    overlay.classList.remove("ativo");
    form.reset();
    atualizarEmojiPreview("");
    inputEmojiImg.value = "";
    editandoIndex = -1;
  }

  // Abrir modal para editar projeto existente
  function abrirParaEditar(index) {
    const projeto = projetos[index];
    if (!projeto) return;

    editandoIndex = index;
    modalTitulo.textContent = "Editar Projeto";
    btnSalvar.textContent = "Atualizar";

    // Preencher campos com os dados atuais
    atualizarEmojiPreview(projeto.emoji);
    if (!projeto.emoji.startsWith("data:image")) {
      campoEmoji.value = projeto.emoji;
    }
    document.getElementById("campoTituloProjeto").value = projeto.titulo;
    document.getElementById("campoDescricaoProjeto").value = projeto.descricao;
    document.getElementById("campoTecnologias").value = projeto.tecnologias.join(", ");
    document.getElementById("campoLinkProjeto").value = projeto.link === "#" ? "" : projeto.link;

    overlay.classList.add("ativo");
  }

  // Expor globalmente para o renderizarProjetos chamar
  window.abrirModalProjetoEditar = abrirParaEditar;

  btnAdd.addEventListener("click", abrirModal);
  btnFechar.addEventListener("click", fecharModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) fecharModal();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Prioridade: imagem colada > texto do campo emoji
    const emojiFinal = emojiValor || campoEmoji.value.trim() || "📂";

    const dadosProjeto = {
      emoji: emojiFinal,
      titulo: document.getElementById("campoTituloProjeto").value.trim(),
      descricao: document.getElementById("campoDescricaoProjeto").value.trim(),
      tecnologias: document.getElementById("campoTecnologias").value
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      link: document.getElementById("campoLinkProjeto").value.trim() || "#",
    };

    if (editandoIndex >= 0) {
      // Editar projeto existente — preservar imgZoom
      const zoomAtual = projetos[editandoIndex].imgZoom;
      projetos[editandoIndex] = dadosProjeto;
      if (zoomAtual) projetos[editandoIndex].imgZoom = zoomAtual;
    } else {
      // Criar novo projeto
      projetos.push(dadosProjeto);
    }

    salvarDados();
    renderizarProjetos();
    fecharModal();
  });
}

// ===== TROCAR FOTO DE PERFIL + ZOOM =====
function configurarTrocaFoto() {
  const btnTrocar = document.getElementById("btnTrocarFoto");
  const inputFoto = document.getElementById("inputFoto");
  const fotoImg = document.getElementById("fotoPerfil");
  const zoomRange = document.getElementById("fotoZoomRange");
  const zoomValor = document.getElementById("fotoZoomValor");
  const btnSalvar = document.getElementById("btnSalvarFoto");

  let fotoAlterada = false;

  // Carregar foto salva
  const fotoSalva = localStorage.getItem("portfolio_foto_perfil");
  if (fotoSalva) {
    fotoImg.src = fotoSalva;
  }

  // Carregar zoom salvo
  const zoomSalvo = localStorage.getItem("portfolio_foto_zoom");
  if (zoomSalvo) {
    const z = parseFloat(zoomSalvo);
    fotoImg.style.setProperty("--foto-zoom", z);
    zoomRange.value = z;
    zoomValor.textContent = z.toFixed(1) + "×";
  }

  // Controle de zoom
  zoomRange.addEventListener("input", () => {
    const z = parseFloat(zoomRange.value);
    fotoImg.style.setProperty("--foto-zoom", z);
    zoomValor.textContent = z.toFixed(1) + "×";
    localStorage.setItem("portfolio_foto_zoom", z);
  });

  // Redimensionar imagem para caber no localStorage
  function redimensionarImagem(dataUrl, maxLado, callback) {
    const img = new Image();
    img.onload = () => {
      let w = img.width;
      let h = img.height;
      if (w > maxLado || h > maxLado) {
        if (w > h) { h = Math.round(h * maxLado / w); w = maxLado; }
        else       { w = Math.round(w * maxLado / h); h = maxLado; }
      }
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      canvas.getContext("2d").drawImage(img, 0, 0, w, h);
      callback(canvas.toDataURL("image/jpeg", 0.8));
    };
    img.src = dataUrl;
  }

  // Trocar foto
  btnTrocar.addEventListener("click", () => {
    inputFoto.click();
  });

  inputFoto.addEventListener("change", (e) => {
    const arquivo = e.target.files[0];
    if (!arquivo) return;

    const leitor = new FileReader();
    leitor.onload = (ev) => {
      fotoImg.src = ev.target.result;
      fotoAlterada = true;
      btnSalvar.classList.add("visivel");
    };
    leitor.readAsDataURL(arquivo);
  });

  // Botão Salvar — redimensiona e grava
  btnSalvar.addEventListener("click", () => {
    if (!fotoAlterada) return;
    redimensionarImagem(fotoImg.src, 600, (dataComprimido) => {
      try {
        localStorage.setItem("portfolio_foto_perfil", dataComprimido);
        fotoImg.src = dataComprimido;
        fotoAlterada = false;
        btnSalvar.classList.remove("visivel");
        alert("Foto salva com sucesso!");
      } catch (err) {
        alert("Erro ao salvar: a imagem pode ser muito grande. Tente uma foto menor.");
      }
    });
  });
}

// ===== MENU HAMBÚRGUER (RESPONSIVO) =====
function configurarMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const menuLinks = document.getElementById("menuLinks");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("ativo");
    menuLinks.classList.toggle("ativo");
  });

  menuLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("ativo");
      menuLinks.classList.remove("ativo");
    });
  });
}

// ===== SISTEMA DE ABAS =====
function configurarAbas() {
  const links = document.querySelectorAll(".header__tab-link");
  const secoes = document.querySelectorAll(".secao-aba");
  const heroBtn = document.querySelector(".hero__btn");

  function ativarAba(nomeAba) {
    // Ocultar todas as seções
    secoes.forEach((s) => s.classList.remove("aba-ativa"));
    links.forEach((l) => l.classList.remove("aba-ativa"));

    // Mostrar a seção da aba clicada
    const secaoAlvo = document.querySelector(`.secao-aba[data-aba="${nomeAba}"]`);
    if (secaoAlvo) {
      secaoAlvo.classList.add("aba-ativa");
      // Garantir animação visível
      secaoAlvo.classList.add("visivel");
    }

    // Marcar link ativo
    const linkAtivo = document.querySelector(`.header__tab-link[data-aba="${nomeAba}"]`);
    if (linkAtivo) linkAtivo.classList.add("aba-ativa");

    // Scroll suave para o topo do conteúdo
    if (secaoAlvo) {
      secaoAlvo.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Salvar aba ativa
    localStorage.setItem("portfolio_aba_ativa", nomeAba);
  }

  // Cliques nos links do menu
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      ativarAba(link.dataset.aba);
    });
  });

  // Botão "Conheça-me" no hero
  if (heroBtn) {
    heroBtn.addEventListener("click", (e) => {
      e.preventDefault();
      ativarAba("sobre");
    });
  }

  // Carregar aba salva ou abrir "sobre" por padrão
  const abaSalva = localStorage.getItem("portfolio_aba_ativa") || "sobre";
  ativarAba(abaSalva);
}

// ===== HEADER SCROLL EFFECT =====
function configurarScrollHeader() {
  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// ===== SCROLL REVEAL (Intersection Observer) =====
function configurarScrollReveal() {
  const secoes = document.querySelectorAll(".secao-animada");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visivel");
        }
      });
    },
    { threshold: 0.15 }
  );

  secoes.forEach((secao) => observer.observe(secao));
}

// ===== BOTÃO VOLTAR AO TOPO =====
function configurarBtnTopo() {
  const btn = document.getElementById("btnTopo");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      btn.classList.add("visivel");
    } else {
      btn.classList.remove("visivel");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===== MODAL DE CÓDIGO-FONTE (EDITOR AO VIVO) =====
function configurarModalCodigo() {
  const btn = document.getElementById("btnVerCodigo");
  const overlay = document.getElementById("modalCodigo");
  const btnFechar = document.getElementById("modalCodigoFechar");
  const codeEl = document.getElementById("codigoConteudo");
  const tabs = overlay.querySelectorAll(".codigo__tab");
  const btnAplicar = document.getElementById("btnAplicarCodigo");
  const statusEl = document.getElementById("codigoStatus");

  const arquivos = {
    html: "index.html",
    css: "style.css",
    js: "script.js",
  };

  let abaAtiva = "html";

  function carregarCodigo(tipo) {
    codeEl.value = "Carregando...";
    fetch(arquivos[tipo] + "?t=" + Date.now(), { cache: "no-store" })
      .then((r) => r.text())
      .then((texto) => {
        codeEl.value = texto;
      })
      .catch(() => {
        codeEl.value = "Erro ao carregar o arquivo.";
      });
  }

  function mostrarStatus(msg, cor) {
    statusEl.textContent = msg;
    statusEl.style.color = cor || "#4caf50";
    statusEl.classList.add("visivel");
    setTimeout(() => statusEl.classList.remove("visivel"), 2500);
  }

  // Aplicar alterações ao vivo
  btnAplicar.addEventListener("click", () => {
    const codigo = codeEl.value;

    if (abaAtiva === "css") {
      // Aplicar CSS ao vivo
      let dynamicStyle = document.getElementById("dynamic-css-live");
      if (!dynamicStyle) {
        dynamicStyle = document.createElement("style");
        dynamicStyle.id = "dynamic-css-live";
        document.head.appendChild(dynamicStyle);
      }
      dynamicStyle.textContent = codigo;
      mostrarStatus("✔ CSS aplicado ao vivo!");
    } else if (abaAtiva === "js") {
      // Aplicar JS ao vivo
      try {
        const fn = new Function(codigo);
        fn();
        mostrarStatus("✔ JavaScript executado!");
      } catch (err) {
        mostrarStatus("✖ Erro JS: " + err.message, "#ff2e63");
      }
    } else if (abaAtiva === "html") {
      // Aplicar HTML ao vivo: reescreve o documento
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(codigo, "text/html");
        // Atualizar <main> e <footer> sem perder o header/modais
        const novoMain = doc.querySelector("main");
        const novoFooter = doc.querySelector("footer");
        if (novoMain) document.querySelector("main").innerHTML = novoMain.innerHTML;
        if (novoFooter) document.querySelector("footer").innerHTML = novoFooter.innerHTML;
        // Re-renderizar componentes dinâmicos
        if (typeof renderizarProjetos === "function") renderizarProjetos();
        if (typeof renderizarFormacoes === "function") renderizarFormacoes();
        if (typeof renderizarDados === "function") renderizarDados();
        mostrarStatus("✔ HTML aplicado!");
      } catch (err) {
        mostrarStatus("✖ Erro HTML: " + err.message, "#ff2e63");
      }
    }
  });

  btn.addEventListener("click", () => {
    overlay.classList.add("ativo");
    carregarCodigo(abaAtiva);
  });

  btnFechar.addEventListener("click", () => {
    overlay.classList.remove("ativo");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("ativo");
  });

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("ativo"));
      tab.classList.add("ativo");
      abaAtiva = tab.dataset.arquivo;
      carregarCodigo(abaAtiva);
    });
  });
}

// ===== DADOS PESSOAIS – RENDERIZAR E EDITAR =====
function renderizarDados() {
  const grid = document.getElementById("dadosGrid");
  grid.innerHTML = "";

  Object.keys(dadosPessoais).forEach((chave) => {
    const valor = dadosPessoais[chave];
    const item = document.createElement("div");
    item.classList.add("dados__item");

    if (editandoDados) {
      item.innerHTML = `
        <div class="dados__item-header">
          <span class="dados__label">${camposLabels[chave] || chave}</span>
          <button class="dados__btn-excluir-campo" data-campo="${chave}" title="Excluir campo">&times;</button>
        </div>
        <input class="dados__input" type="text" data-campo="${chave}" value="${valor}" placeholder="Preencher...">
      `;
    } else {
      const vazio = !valor;
      item.innerHTML = `
        <span class="dados__label">${camposLabels[chave] || chave}</span>
        <span class="dados__valor${vazio ? " dados__valor--vazio" : ""}">${valor || "Não informado"}</span>
      `;
    }

    grid.appendChild(item);
  });

  // Botão de adicionar novo campo (só no modo edição)
  if (editandoDados) {
    const btnNovo = document.createElement("div");
    btnNovo.classList.add("dados__item", "dados__item--add");
    btnNovo.innerHTML = `
      <button class="dados__btn-add-campo" id="btnAddCampo" title="Adicionar campo">
        <span>+</span> Novo Campo
      </button>
    `;
    grid.appendChild(btnNovo);

    // Eventos de excluir
    grid.querySelectorAll(".dados__btn-excluir-campo").forEach((btn) => {
      btn.addEventListener("click", () => {
        const chave = btn.dataset.campo;
        delete dadosPessoais[chave];
        delete camposLabels[chave];
        salvarDados();
        renderizarDados();
      });
    });

    // Evento de adicionar campo
    document.getElementById("btnAddCampo").addEventListener("click", () => {
      const label = prompt("Nome do novo campo (ex: LinkedIn, Hobby):");
      if (!label || !label.trim()) return;
      const chave = label.trim().toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");
      if (dadosPessoais.hasOwnProperty(chave)) {
        alert("Já existe um campo com esse nome.");
        return;
      }
      camposLabels[chave] = label.trim();
      dadosPessoais[chave] = "";
      salvarDados();
      renderizarDados();
    });
  }
}

function configurarDadosPessoais() {
  const btn = document.getElementById("btnEditarDados");

  btn.addEventListener("click", () => {
    if (editandoDados) {
      // Salvar valores dos inputs
      const inputs = document.querySelectorAll(".dados__input");
      inputs.forEach((input) => {
        dadosPessoais[input.dataset.campo] = input.value.trim();
      });
      editandoDados = false;
      salvarDados();
      btn.textContent = "✎ Editar";
      btn.classList.remove("salvando");
    } else {
      editandoDados = true;
      btn.textContent = "✓ Salvar";
      btn.classList.add("salvando");
    }
    renderizarDados();
  });
}

// ===== PERFIL "SOBRE MIM" – PARÁGRAFOS =====
function renderizarSobre() {
  const container = document.getElementById("sobreParagrafosContainer");
  container.innerHTML = "";

  sobreParagrafos.forEach((texto, i) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("sobre__paragrafo-wrapper");
    wrapper.innerHTML = `
      <button class="sobre__btn-remover-p" data-index="${i}" title="Excluir parágrafo">&times;</button>
      <p>${texto}</p>
    `;
    container.appendChild(wrapper);
  });

  // Botão adicionar parágrafo
  const btnAdd = document.createElement("button");
  btnAdd.classList.add("sobre__btn-add-p");
  btnAdd.innerHTML = '<span>+</span> Parágrafo';
  container.appendChild(btnAdd);

  // Eventos
  container.querySelectorAll(".sobre__btn-remover-p").forEach((btn) => {
    btn.addEventListener("click", () => {
      sobreParagrafos.splice(parseInt(btn.dataset.index, 10), 1);
      salvarDados();
      renderizarSobre();
    });
  });

  btnAdd.addEventListener("click", () => {
    const texto = prompt("Texto do novo parágrafo:");
    if (!texto || !texto.trim()) return;
    sobreParagrafos.push(texto.trim());
    salvarDados();
    renderizarSobre();
  });
}

// ===== PERFIL "SOBRE MIM" – HABILIDADES (TAGS) =====
function renderizarHabilidades() {
  const container = document.getElementById("habilidadesContainer");
  container.innerHTML = "";

  habilidades.forEach((hab, i) => {
    const tag = document.createElement("span");
    tag.classList.add("tag", "tag--editavel");
    tag.innerHTML = `${hab}<button class="tag__btn-remover" data-index="${i}" title="Excluir">&times;</button>`;
    container.appendChild(tag);
  });

  // Botão adicionar habilidade
  const btnAdd = document.createElement("button");
  btnAdd.classList.add("sobre__btn-add-hab");
  btnAdd.innerHTML = '<span>+</span>';
  btnAdd.title = "Adicionar habilidade";
  container.appendChild(btnAdd);

  // Eventos
  container.querySelectorAll(".tag__btn-remover").forEach((btn) => {
    btn.addEventListener("click", () => {
      habilidades.splice(parseInt(btn.dataset.index, 10), 1);
      salvarDados();
      renderizarHabilidades();
    });
  });

  btnAdd.addEventListener("click", () => {
    const hab = prompt("Nova habilidade:");
    if (!hab || !hab.trim()) return;
    habilidades.push(hab.trim());
    salvarDados();
    renderizarHabilidades();
  });
}

// ===== GERAR PDF DE ENTREGA =====
function configurarPDF() {
  const btn = document.getElementById("btnGerarPDF");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const repoUrl = "https://github.com/WanderPiresAcademico/portfolio-wander-pires";
    const siteUrl = "https://wanderpiresacademico.github.io/portfolio-wander-pires/";

    const janela = window.open("", "_blank");
    janela.document.write(`
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Entrega - Atividade Avaliativa 1</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', Arial, sans-serif; padding: 3rem; color: #222; }
          h1 { font-size: 1.6rem; margin-bottom: 0.5rem; color: #1a1a2e; }
          h2 { font-size: 1.1rem; color: #555; margin-bottom: 2rem; font-weight: 400; }
          .info { margin-bottom: 1.5rem; }
          .info strong { display: block; font-size: 0.95rem; color: #333; margin-bottom: 0.3rem; }
          .info a { font-size: 1rem; color: #0066cc; word-break: break-all; }
          hr { border: none; border-top: 1px solid #ddd; margin: 1.5rem 0; }
          .aluno { font-size: 0.95rem; color: #555; }
          .nota { margin-top: 2rem; font-size: 0.85rem; color: #888; }
          @media print { body { padding: 2cm; } }
        </style>
      </head>
      <body>
        <h1>Atividade Avaliativa 1 — Programação Web</h1>
        <h2>Portfólio Pessoal com HTML5, CSS3 e JavaScript</h2>
        <hr>
        <div class="info">
          <strong>Link do Repositório:</strong>
          <a href="${repoUrl}" target="_blank">${repoUrl}</a>
        </div>
        <div class="info">
          <strong>Link do Site Publicado:</strong>
          <a href="${siteUrl}" target="_blank">${siteUrl}</a>
        </div>
        <hr>
        <p class="aluno"><strong>Aluno:</strong> Wander Pires Silva Coelho</p>
        <p class="nota">Abra este documento e use <strong>Ctrl + P</strong> para salvar como PDF.</p>
      </body>
      </html>
    `);
    janela.document.close();
  });
}

// ===== CONTATOS (FOOTER) =====
function renderizarContatos() {
  const container = document.getElementById("contatosContainer");
  if (!container) return;

  let html = "";
  contatos.forEach((c, i) => {
    let linkHtml;
    if (c.tipo === "email") {
      linkHtml = `<a href="mailto:${encodeURI(c.valor)}" class="footer__contato-link">${c.valor}</a>`;
    } else {
      const display = c.valor.startsWith("http") ? c.label : `${c.label}: ${c.valor}`;
      const href = c.valor.startsWith("http") ? encodeURI(c.valor) : "#";
      linkHtml = `<a href="${href}" target="_blank" rel="noopener" class="footer__contato-link">${display}</a>`;
    }
    html += `
      <div class="contato-item">
        ${linkHtml}
        <button class="contato__btn-remover btn-edicao" data-index="${i}" title="Remover">✕</button>
      </div>`;
  });

  container.innerHTML = html;

  container.querySelectorAll(".contato__btn-remover").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!confirm("Remover este contato?")) return;
      contatos.splice(parseInt(btn.dataset.index, 10), 1);
      salvarDados();
      renderizarContatos();
    });
  });
}

function configurarContatos() {
  const btnAdd = document.getElementById("btnAddContato");
  const btnEditar = document.getElementById("btnEditarContatos");
  const formContainer = document.getElementById("contatosEditForm");

  if (!btnAdd || !btnEditar) return;

  btnAdd.addEventListener("click", () => {
    const label = prompt("Nome do contato (ex: GitHub, WhatsApp, E-mail):");
    if (!label || !label.trim()) return;
    const valor = prompt("Link ou endereço:");
    if (!valor || !valor.trim()) return;
    const tipo = label.trim().toLowerCase().includes("mail") ? "email" : "link";
    contatos.push({ tipo, label: label.trim(), valor: valor.trim() });
    salvarDados();
    renderizarContatos();
  });

  btnEditar.addEventListener("click", () => {
    if (formContainer.style.display === "block") {
      formContainer.style.display = "none";
      btnEditar.textContent = "✏️ Editar";
      return;
    }

    let html = "";
    contatos.forEach((c, i) => {
      html += `
        <div class="contato-edit-row">
          <input type="text" class="contato-edit-label" data-index="${i}" value="${c.label}" placeholder="Label">
          <input type="text" class="contato-edit-valor" data-index="${i}" value="${c.valor}" placeholder="Link / E-mail">
          <select class="contato-edit-tipo" data-index="${i}">
            <option value="link" ${c.tipo === "link" ? "selected" : ""}>Link</option>
            <option value="email" ${c.tipo === "email" ? "selected" : ""}>E-mail</option>
          </select>
        </div>`;
    });
    html += `<button class="contato-edit-salvar" id="btnSalvarContatos">💾 Salvar contatos</button>`;
    formContainer.innerHTML = html;
    formContainer.style.display = "block";
    btnEditar.textContent = "❌ Cancelar";

    document.getElementById("btnSalvarContatos").addEventListener("click", () => {
      formContainer.querySelectorAll(".contato-edit-row").forEach((row) => {
        const idx = parseInt(row.querySelector(".contato-edit-label").dataset.index, 10);
        contatos[idx].label = row.querySelector(".contato-edit-label").value.trim();
        contatos[idx].valor = row.querySelector(".contato-edit-valor").value.trim();
        contatos[idx].tipo = row.querySelector(".contato-edit-tipo").value;
      });
      salvarDados();
      renderizarContatos();
      formContainer.style.display = "none";
      btnEditar.textContent = "✏️ Editar";
    });
  });
}

// ===== INICIALIZAÇÃO =====
document.addEventListener("DOMContentLoaded", async () => {
  await carregarDados();
  carregarModoEdicao();
  iniciarParticulas();
  renderizarProjetos();
  renderizarFormacoes();
  renderizarDados();
  renderizarSobre();
  renderizarHabilidades();
  configurarFiltros();
  configurarModal();
  configurarModalProjeto();
  configurarDadosPessoais();
  configurarTrocaFoto();
  configurarMenu();
  configurarContatos();
  renderizarContatos();
  configurarPDF();
  configurarAbas();
  configurarScrollHeader();
  configurarScrollReveal();
  configurarBtnTopo();
  configurarModalCodigo();

  // Atalho secreto: Ctrl + Shift + E
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === "E") {
      e.preventDefault();
      toggleModoEdicao();
    }
  });
});
