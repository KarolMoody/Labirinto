const caminhos = [
    {
        decisão: 'Direita',
        resultado: 'Você segue por um corredor que vai ficando cada vez mais escuro e cai em um buraco.'
    },
    {
        decisão: 'Esquerda',
        resultado: 'Você segue por um corredor mal iluminado e encontra duas portas identificadas com as letras A e B.'
    },
    {
        decisão: 'Porta A',
        resultado: 'Você abre a porta, caminha alguns metros e se depara com uma porta à sua esquerda.'
    },
    {
        decisão: 'Porta B',
        resultado: 'Você abre a porta, entra e ela se tranca atrás de você.'
    },
    {
        decisão: 'Seguir em frente',
        resultado: 'Você ignora a porta, segue em frente e é atacado por um animal feroz.'
    },
    {
        decisão: 'Abrir porta',
        resultado: 'Você abre a porta e encontra uma bifurcação com dois corredores identificados pelos números 1 e 2.'
    },
    {
        decisão: 'Corredor 1',
        resultado: 'Você segue em frente e encontra duas escadas, uma para cima e outra para baixo.'
    },
    {
        decisão: 'Corredor 2',
        resultado: 'Você segue em frente, encontra uma parede com uma alavanca e, puxá-la um alçapão se abre debaixo de seus pés.'
    },
    {
        decisão: 'Subir a escada',
        resultado: 'Você sobe a escada, chega a uma torre e a escada desmorona, impedindo o seu retorno.'
    },
    {
        decisão: 'Descer a escada',
        resultado: 'Você desce a escada, chega a uma pequena sala onde encontra um painel com um botão azul e outro vermelho.'
    },
    {
        decisão: 'Botão azul',
        resultado: 'Você aperta o botão azul e a sala é tomada por um gás venenoso.'
    },
    {
        decisão: 'Botão vermelho',
        resultado: 'Você escuta um barulho ensurdecedor, uma porta se abre e você sai.'
    }
]

module.exports = caminhos
