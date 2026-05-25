//===============================================================================//

// DADOS DO CANDIDATO //

// FAVOR EDITAR AS HABILIDADES E EXPERIÊNCIA DE ACORDO COM O SEU PERFIL PARA MELHOR ANÁLISE DE COMPATIBILIDADE //
const candidato = {
  nome: "Ana",
  area: "Front-End",
  habilidades: ["JavaScript", "GitHub", "Lógica de Programação", "Kanban"],
  experienciaMeses: 3
};

//===============================================================================//

// DADOS DAS VAGAS //

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
const vaga2 = new VagaFrontEnd("CodeTech", "Desenvolvedor de programas com JavaScript", ["JavaScript", "Kanban", "GitHub", "Node.js"], 1800, "Híbrido", "Júnior")
const vaga3 = new VagaFrontEnd("WebProduce", "Desenvolvedor JavaScript e React", ["JavaScript", "Kanban", "GitHub", "Node.js"], 2400, "Remoto", "Júnior")

//===============================================================================//

// ANÁLISE DE COMPATIBILIDADE //

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
    requisitosAtendidos: requisitosAtendidos,
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

//===============================================================================//

// MENSAGEM DE FECHAMENTO //

function finalizarAnalise(nomeDoCandidato, callback) {
  callback(nomeDoCandidato);
};

function exibirMensagem(nome) {
  console.log(`${nome}, revise suas habilidades faltantes para conseguir melhorar na área!`)
}

function buscarVagasSimuladas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vagas);
    }, 1000);
  });
};

async function iniciarSistema() {
  await buscarVagasSimuladas();
  await buscarVagasSimuladas();
  console.log("=== SkillMatch-JS ===");
  await buscarVagasSimuladas();
  console.log(`Candidato: ${candidato.nome}`);
  console.log(`Área de interesse: ${candidato.area}`);
  console.log("Habilidades: " + candidato.habilidades.join(", "));
  console.log(`Experiência: ${candidato.experienciaMeses} meses`);
  console.log("=====================");
  await buscarVagasSimuladas();
  console.log("Verificando vagas disponíveis...");
  await buscarVagasSimuladas();
  await buscarVagasSimuladas();
  await buscarVagasSimuladas();
  console.log("Carregando vagas disponíveis...");
  await buscarVagasSimuladas();
  await buscarVagasSimuladas();
  await buscarVagasSimuladas();
  await buscarVagasSimuladas();
  console.log("Analise de compatibilidade concluída! Veja os resultados abaixo:");
  console.log("======================");
  await buscarVagasSimuladas();
  vagas.forEach(vaga => {
    const resultado = calcularCompatibilidade(vaga, candidato);
    console.log(`Vaga: ${resultado.cargo} na empresa ${resultado.empresa}`);
    console.log(`Compatibilidade: ${resultado.compatibilidade}% - ${resultado.classificação}`);
    console.log(`Salário: R$ ${vaga.salario}`)
    console.log(`Requisitos atendidos: ${resultado.requisitosAtendidos.join(", ")}`);
    console.log(`Habilidades faltantes: ${resultado.habilidadesFaltantes.join(", ")}`);
    console.log("======================");
  });
  console.log(`A vaga mais compatível é: ${vagaMaisCompativel.cargo} na empresa ${vagaMaisCompativel.empresa} com ${vagaMaisCompativel.compatibilidade}% de compatibilidade.`);
  console.log("======================");
  console.log("Os pontos a melhorar são: ")
  for (let habilidade of aprenderUnico) {
    console.log("- " + habilidade);
  };
  finalizarAnalise(candidato.nome, exibirMensagem);
  console.log("Obrigado por usar o SkillMatch JS! Boa sorte na sua busca por uma vaga de Front-End!");
  console.log("======================");
};
iniciarSistema();