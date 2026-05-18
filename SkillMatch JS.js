const candidato = {
  nome: "Ana",
  area: "Front-End",
  habilidades: ["JavaScript", "GitHub", "Lógica de Programação", "Kanban"],
  experienciaMeses: 3
};

const vagas = [
  {
    id: 1,
    empresa: "FrontTech",
    cargo: "Desenvolvedor Front-End Sênior",
    requisitos: ["JavaScript", "GitHub", "HTML", "CSS"],
    salario: 3800,
    modalidade: "Remoto"
  },
  {
    id: 2,
    empresa: "CodeTech",
    cargo: "Desenvolvedor de programas com JavaScript",
    requisitos: ["JavaScript", "Kanban", "GitHub", "Node,js"],
    salario: 1800,
    modalidade: "Híbrido"
  },
  {
    id: 3,
    empresa:"WebProduce",
    cargo: "Desenvolvedor JavaScript e React",
    requisitos: ["JavaScript", "Kanban", "Github", "Node.js"],
    salario: 2400,
    modalidade: "Remoto"
  }
];

let totalRequisitosVaga
let quantidadeRequisitosAtendido
let compatibilidade = quantidadeRequisitosAtendido / totalRequisitosVaga * 100

let chanceDeContrato

if (compatibilidade <= 49) {
    chanceDeContrato = "Baixa compatibilidade";
} else if (compatibilidade >= 50 && compatibilidade <= 79) {
    chanceDeContrato = "Média compatibilidade";
} else if (compatibilidade >= 80 && compatibilidade <= 100) {
    chanceDeContrato = "Alta compatibilidade";
}

class Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }

  exibirResumo() {
    return `${this.cargo} na empresa ${this.empresa}`;
  }
}

class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(empresa, cargo, requisitos, salario, modalidade);
    this.nivel = nivel;
  }

  exibirNivel() {
    return `Nível da vaga: ${this.nivel}`;
  }
}

function finalizarAnalise(nomeCandidato, callback) {
  console.log("Análise finalizada.");
  callback(nomeCandidato);
}

function exibirMensagemFinal(nome) {
  console.log(`${candidato.nome}, revise suas habilidades faltantes e atualize seu plano de estudos.`);
}

function buscarVagasSimuladas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vagas);
    }, 1000);
  });
}

async function iniciarSistema() {
  const vagasCarregadas = await buscarVagasSimuladas();
  console.log("Vagas carregadas com sucesso!");
  console.log(vagasCarregadas);
}

