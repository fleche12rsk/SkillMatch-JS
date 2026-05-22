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
    cargo: "Desenvolvedor Front-End",
    requisitos: ["JavaScript", "GitHub", "HTML", "CSS"],
    salario: 3800,
    modalidade: "Remoto"
  },
  {
    id: 2,
    empresa: "CodeTech",
    cargo: "Desenvolvedor de programas com JavaScript",
    requisitos: ["JavaScript", "Kanban", "GitHub", "Node.js"],
    salario: 1800,
    modalidade: "Híbrido"
  },
  {
    id: 3,
    empresa:"WebProduce",
    cargo: "Desenvolvedor JavaScript e React",
    requisitos: ["JavaScript", "Kanban", "GitHub", "Node.js"],
    salario: 2400,
    modalidade: "Remoto"
  }
];

class Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }

  exibirResumo() {
    return `Cargo de ${this.cargo} na empresa ${this.empresa}`;
  }
};

class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, requisito, salario, modalidade, nivelExperiencia) {
    super(empresa, cargo, requisito, salario, modalidade);
    this.nivelExperiencia = nivelExperiencia;
  }

  exibirTrabalho() {
    return `É necessário que seja ${this.nivelExperiencia} para poder atender os requisitos da vaga de ${this.empresa}`;
  }
}

const vaga1 = new VagaFrontEnd("FrontTech", "Desenvolvedor Front-End", ["JavaScript", "GitHub", "HTML", "CSS"], 3800, "Remoto", "Sênior")

console.log(vaga1.exibirResumo())
console.log(vaga1.exibirTrabalho())

function calcularCompatibilidade(vaga, candidato) {
  
  let totalRequisitos = vaga.requisitos.length;

  let requisitosAtendidos = vaga.requisitos.filter(requisito => candidato.habilidades.includes(requisito));

  let habilidadesFaltantes = vaga.requisitos.filter(requisito => !candidato.habilidades.includes(requisito));
  
  let chanceDeContrato;

  let compatibilidade = requisitosAtendidos.length / totalRequisitos * 100;
  
  if (compatibilidade < 50) {
      chanceDeContrato = "Baixa compatibilidade";
  } else if (compatibilidade >= 50 && compatibilidade < 80) {
      chanceDeContrato = "Média compatibilidade";
  } else if (compatibilidade >= 80) {
      chanceDeContrato = "Alta compatibilidade";
  };
  

  return {
    empresa: vaga.empresa,
    cargo: vaga.cargo,
    compatibilidade: compatibilidade.toFixed(0),
    classificação: chanceDeContrato,
    habilidadesFaltantes: habilidadesFaltantes
  };
};

const resultados = vagas.map(vaga => calcularCompatibilidade(vaga, candidato));

const vagaMaisCompativel = resultados.reduce((melhor, atual) => {
  if (atual.compatibilidade > melhor.compatibilidade) {
    return atual
  } else {
    return melhor
  }
});

let habilidadeQueFalta = resultados.map(vaga => vaga.habilidadesFaltantes)

let aprender = habilidadeQueFalta.flat()

let aprenderUnico = [...new Set(aprender)]

console.log("Priorize estudar " + aprenderUnico.join(", ") + " pois esses conteúdos aparecem nas vagas analisadas")




function finalizarAnalise(nomeDoCandidato, callback) {
  console.log("Análise concluida.");
  callback(nomeDoCandidato);
};

function exibirMensagem(nome) {
  console.log(`${nome}, revise suas habilidades faltantes para conseguir melhorar na área!`)
}

finalizarAnalise(candidato.nome, exibirMensagem);

function exibirMensagemFinal(nome) {
  console.log(`${candidato.nome}, revise suas habilidades faltantes e atualize seu plano de estudos.`);
};

function buscarVagasSimuladas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vagas);
    }, 1000);
  });
};

async function iniciarSistema() {
  const vagasCarregadas = await buscarVagasSimuladas();
  console.log("Vagas carregadas com sucesso!");
  console.log(vagasCarregadas);
};

