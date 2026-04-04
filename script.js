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
    titulo: "Calculadora Web",
    descricao:
      "Calculadora funcional construída com JavaScript, aplicando lógica de programação e manipulação do DOM.",
    tecnologias: ["HTML5", "CSS3", "JavaScript"],
    link: "#",
    emoji: "🧮",
  },
  {
    titulo: "Lista de Tarefas",
    descricao:
      "Aplicação To-Do List com funcionalidades de adicionar, remover e marcar tarefas como concluídas.",
    tecnologias: ["HTML5", "CSS3", "JavaScript"],
    link: "#",
    emoji: "✅",
  },
  {
    titulo: "Landing Page",
    descricao:
      "Página de apresentação para produto fictício, com design moderno e totalmente responsivo usando Flexbox e Grid.",
    tecnologias: ["HTML5", "CSS3"],
    link: "#",
    emoji: "🚀",
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

let habilidades = [
  "HTML5", "CSS3", "JavaScript", "Git & GitHub",
  "Educação", "Gestão Escolar", "Naturopatia",
];

// ===== DADOS PESSOAIS (editáveis) =====
let dadosPessoais = {
  nome: "Wander Pires Silva Coelho",
  nascimento: "20 de maio de 1979",
  naturalidade: "São Paulo - SP",
  endereco: "",
  cidade: "Curimatá - PI",
  estado: "Piauí",
  celular: "",
  email: "",
  profissao: "Educador / Naturopata / Desenvolvedor Web",
  cargo: "Diretor Escolar – CETI Desembargador Amaral",
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

// ===== PERSISTÊNCIA COM LOCALSTORAGE =====
function salvarDados() {
  localStorage.setItem("portfolio_projetos", JSON.stringify(projetos));
  localStorage.setItem("portfolio_formacoes", JSON.stringify(formacoes));
  localStorage.setItem("portfolio_dados", JSON.stringify(dadosPessoais));
  localStorage.setItem("portfolio_campos_labels", JSON.stringify(camposLabels));
  localStorage.setItem("portfolio_sobre_paragrafos", JSON.stringify(sobreParagrafos));
  localStorage.setItem("portfolio_habilidades", JSON.stringify(habilidades));
}

function carregarDados() {
  const p = localStorage.getItem("portfolio_projetos");
  const f = localStorage.getItem("portfolio_formacoes");
  const d = localStorage.getItem("portfolio_dados");
  const cl = localStorage.getItem("portfolio_campos_labels");
  const sp = localStorage.getItem("portfolio_sobre_paragrafos");
  const h = localStorage.getItem("portfolio_habilidades");
  if (p) projetos = JSON.parse(p);
  if (f) formacoes = JSON.parse(f);
  if (d) dadosPessoais = JSON.parse(d);
  if (cl) camposLabels = JSON.parse(cl);
  if (sp) sobreParagrafos = JSON.parse(sp);
  if (h) habilidades = JSON.parse(h);
}

// ===== MODO EDIÇÃO (Ctrl + Shift + E) =====
function toggleModoEdicao() {
  modoEdicao = !modoEdicao;
  document.body.classList.toggle("modo-edicao", modoEdicao);
  localStorage.setItem("portfolio_modo_edicao", modoEdicao);
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

    card.innerHTML = `
      <button class="projeto-card__btn-remover" data-index="${i}" title="Remover">&times;</button>
      <div class="projeto-card__img">${projeto.emoji.startsWith("data:image") ? '<img src="' + projeto.emoji + '" alt="Imagem do projeto" class="projeto-card__img-foto">' : projeto.emoji}</div>
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

// ===== MODAL DE ADICIONAR PROJETO =====
function configurarModalProjeto() {
  const btnAdd = document.getElementById("btnAddProjeto");
  const overlay = document.getElementById("modalProjeto");
  const btnFechar = document.getElementById("modalProjetoFechar");
  const form = document.getElementById("formProjeto");

  // Elementos do campo emoji/imagem
  const emojiInputArea = document.getElementById("emojiInputArea");
  const emojiPreview = document.getElementById("emojiPreview");
  const campoEmoji = document.getElementById("campoEmoji");
  const btnEmojiImg = document.getElementById("btnEmojiImg");
  const inputEmojiImg = document.getElementById("inputEmojiImg");

  let emojiValor = ""; // guarda emoji texto ou data-URL da imagem

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
    overlay.classList.add("ativo");
  }

  function fecharModal() {
    overlay.classList.remove("ativo");
    form.reset();
    atualizarEmojiPreview("");
    inputEmojiImg.value = "";
  }

  btnAdd.addEventListener("click", abrirModal);
  btnFechar.addEventListener("click", fecharModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) fecharModal();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Prioridade: imagem colada > texto do campo emoji
    const emojiFinal = emojiValor || campoEmoji.value.trim() || "📂";

    const novoProjeto = {
      emoji: emojiFinal,
      titulo: document.getElementById("campoTituloProjeto").value.trim(),
      descricao: document.getElementById("campoDescricaoProjeto").value.trim(),
      tecnologias: document.getElementById("campoTecnologias").value
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      link: document.getElementById("campoLinkProjeto").value.trim() || "#",
    };

    projetos.push(novoProjeto);
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
    };
    leitor.readAsDataURL(arquivo);
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

// ===== MODAL DE CÓDIGO-FONTE =====
function configurarModalCodigo() {
  const btn = document.getElementById("btnVerCodigo");
  const overlay = document.getElementById("modalCodigo");
  const btnFechar = document.getElementById("modalCodigoFechar");
  const codeEl = document.getElementById("codigoConteudo");
  const tabs = overlay.querySelectorAll(".codigo__tab");

  const arquivos = {
    html: "index.html",
    css: "style.css",
    js: "script.js",
  };

  let abaAtiva = "html";

  function carregarCodigo(tipo) {
    codeEl.textContent = "Carregando...";
    fetch(arquivos[tipo])
      .then((r) => r.text())
      .then((texto) => {
        codeEl.textContent = texto;
      })
      .catch(() => {
        codeEl.textContent = "Erro ao carregar o arquivo.";
      });
  }

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

// ===== INICIALIZAÇÃO =====
document.addEventListener("DOMContentLoaded", () => {
  carregarDados();
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
