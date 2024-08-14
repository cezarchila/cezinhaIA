const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é um jovem aventureiro em uma pequena vila conhecida por sua rica biodiversidade. Um dia, você descobre um antigo diário que menciona uma planta rara com propriedades medicinais que está em perigo devido ao desmatamento crescente na região. Qual é a sua primeira reação?",
        alternativas: [
            {
                texto: "Você decide buscar a planta rara e proteger seu habitat, organizando uma equipe de voluntários para ajudar na preservação.",
                afirmacao: "Tomou a iniciativa de proteger a planta e engajar a comunidade na preservação ambiental."
            },
            {
                texto: "Você procura informações sobre a planta e o impacto do desmatamento, para educar a vila e promover práticas sustentáveis.",
                afirmacao: "Optou por educar e conscientizar a comunidade sobre a importância da planta e do meio ambiente."
            }
        ]
    },
    {
        enunciado: "Depois de reunir informações sobre a planta e o impacto ambiental, você decide implementar um programa de preservação na vila. Como você começa essa iniciativa?",
        alternativas: [
            {
                texto: "Você realiza reuniões com os moradores para explicar a importância da planta e criar um plano de ação para proteger a área de desmatamento.",
                afirmacao: "Engajou a comunidade local em um plano de preservação através de reuniões e conscientização."
            },
            {
                texto: "Você desenvolve um projeto de replantio e proteção da flora local, incentivando os habitantes a participar ativamente nas atividades de conservação.",
                afirmacao: "Desenvolveu um projeto prático para a proteção e recuperação da vegetação local."
            }
        ]
    },
    {
        enunciado: "O programa de preservação da vila começa a mostrar resultados positivos e atrai a atenção de grupos ambientalistas externos. Como você utiliza esse interesse para expandir suas ações?",
        alternativas: [
            {
                texto: "Você estabelece parcerias com organizações ambientais para obter recursos e apoio técnico, ampliando a proteção da planta rara e do ecossistema local.",
                afirmacao: "Expandiu o projeto através de parcerias e apoio externo para fortalecer a proteção ambiental."
            },
            {
                texto: "Você organiza eventos de sensibilização e workshops em outras vilas para compartilhar suas experiências e promover a preservação em uma escala maior.",
                afirmacao: "Promoveu a preservação através da disseminação de conhecimento e experiências para outras comunidades."
            }
        ]
    },
    {
        enunciado: "Após algum tempo, você percebe que a comunidade está se tornando complacente e os esforços de preservação estão diminuindo. Como você reage para reverter essa situação?",
        alternativas: [
            {
                texto: "Você cria uma série de atividades interativas e concursos sobre a importância da biodiversidade e as conquistas do programa, para reengajar os moradores.",
                afirmacao: "Reativou o interesse da comunidade através de atividades envolventes e reconhecimento das conquistas."
            },
            {
                texto: "Você introduz novas iniciativas e colaborações com especialistas para trazer novas perspectivas e motivação para o projeto.",
                afirmacao: "Revitalizou o projeto através de novas abordagens e colaborações com especialistas."
            }
        ]
    },
    {
        enunciado: "O projeto de preservação ganha reconhecimento nacional por sua eficácia e impacto. Como você se sente com essa conquista e qual é o próximo passo?",
        alternativas: [
            {
                texto: "Você se sente inspirado e decide usar o reconhecimento para lançar uma fundação dedicada à proteção de plantas raras em outras regiões.",
                afirmacao: "Transformou o reconhecimento em uma nova oportunidade para expandir a proteção ambiental em outras áreas."
            },
            {
                texto: "Você se sente realizado por ter alcançado seu objetivo e decide compartilhar suas experiências para inspirar outras iniciativas de preservação ao redor do país.",
                afirmacao: "Utilizou o reconhecimento para inspirar e compartilhar práticas de preservação com outras comunidades."
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