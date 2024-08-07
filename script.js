const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A definição de big data são dados que contêm maior variedade, chegando em volumes crescentes e com mais velocidade.",
        alternativas: [
            {
                texto: "Sim, acho interessante",
                afirmacao: "afirmação"
            },
            {
                texto: "Não, vou procurar saber mais",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "O big data é muito utilizado em avaliação de históricos de venda, campanhas publicitárias, períodos de sazonalidade, cadastros de clientes e em muitas outras ocasiões de estratégias de marketing.",
        alternativas: [
            {
                texto: "Eu já sabia, acho legal",
                afirmacao: "afirmação"
            },
            {
                texto: "Eu não sabia, muito interessante",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Para se trabalhar com o bog data é necessário cursar uma graduação em Ciências da computação e buscar disciplinas específicas sobre big data e análise de dados.",
        alternativas: [
            {
                texto: "Eu sabia e trabalharia",
                afirmacao: "afirmação"
            },
            {
                texto: "Eu sabia, mas não trabalharia",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Para mais informações nos consulte e procure mais sobre o assunto.",
        alternativas: [
            {
                texto: "Talvez um dia...",
                afirmacao: "afirmação"
            },
            {
                texto: "Obrigado, pelas informações",
                afirmacao: "afirmação"
            }
        ]
    },
    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
