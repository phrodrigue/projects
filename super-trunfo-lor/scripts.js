class Carta {
    constructor(nome, ataque, defesa, magia, link) {
        this.nome = nome
        this.atributos = {
            Ataque: ataque,
            Defesa: defesa,
            Magia: magia
        }
        this.link = link
    }
}

var leblanc = new Carta("LeBlanc", 5, 2, 5, 'https://imgur.com/ZIFFjc5.png')
var aphelios = new Carta("Aphelios", 3, 3, 6, 'https://imgur.com/AuKsxZ6.png')
var renekton = new Carta("Renekton", 4, 4, 4, 'https://imgur.com/YQlqwV8.png')
var shen = new Carta("Shen", 3, 5, 4, 'https://imgur.com/rffQzpt.png')
var teemo = new Carta("Teemo", 1, 1, 10, 'https://imgur.com/ck9V7v8.png')
var thresh = new Carta("Thresh", 3, 6, 3, 'https://imgur.com/tBq6LEa.png')
var lux = new Carta("Lux", 4, 5, 3, 'https://imgur.com/sNpMHTN.png')
var tryndamere = new Carta("Tryndamere", 8, 4, 0, 'https://imgur.com/LyAN8AU.png')
var tf = new Carta("Twisted Fate", 2, 2, 8, 'https://imgur.com/B71NZ6G.png')

var deckJogador = []
var cartaJogador = ''
var ptsJogador = 0
var deckMaquina = []
var cartaMaquina = ''
var ptsMaquina = 0

var corVitoria = "#01701959"
var corDerrota = "#70010159"
var corEmpate = "#86868659"

var deck = [leblanc, aphelios, renekton, shen, teemo, thresh, lux, tryndamere, tf]

function separaCartas() {
    deckMaquina = []
    deckJogador = []
    while (deck.length >= 2) {
        var numJogador = parseInt(Math.random() * deck.length)
        deckJogador.push(deck[numJogador])
        deck.splice(numJogador, 1)
        var numMaquina = parseInt(Math.random() * deck.length)
        deckMaquina.push(deck[numMaquina])
        deck.splice(numMaquina, 1)
    }
    ptsJogador = deckJogador.length
    ptsMaquina = deckMaquina.length
    atualizaPontos()
}

function sortearCarta() {
    cartaJogador = deckJogador[0]
    cartaMaquina = deckMaquina[0]

    document.getElementById('btnSortear').disabled = true
    document.getElementById('selecAtributo').style.display = "block"

    exibirOpcoes()
}

function exibirOpcoes() {
    document.getElementById('selecAtributo').style.display = "block"
    var opcoes = document.getElementById('opcoes')
    var opcoesTxt = ""
    for (var atributo in cartaJogador.atributos) {
        opcoesTxt += `<input type='radio' id='${atributo}' name='atributo' value='${atributo}'><label for='${atributo}'>${atributo}`
    }
    opcoes.innerHTML = opcoesTxt

    var imagemCartaJogador = document.getElementById('cartaJogador')
    imagemCartaJogador.innerHTML = `<img src="${cartaJogador.link}" id="cartaJogador" class="carta-lor">`

    document.getElementById('cartas').style.display = "inline"
}

function obtemAtributo() {
    var radioAtributo = document.getElementsByName('atributo')
    var atributoSelec = false
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            atributoSelec = radioAtributo[i].value
        }
    }
    return atributoSelec
}

function jogar() {
    var divResultado = document.getElementById("resultado")

    var attr = obtemAtributo()
    var txt = ''
    var corFundoResult = ''

    if (attr) {
        if (cartaJogador.atributos[attr] > cartaMaquina.atributos[attr]) {
            txt = 'Vitória!!!'
            corFundoResult = corVitoria
            // remove do topo do deck...
            deckJogador.splice(0, 1)
            // ...e bota no fim
            deckJogador.push(cartaJogador)
            // remove a carta do deck da maquina...
            deckMaquina.splice(0, 1)
            // ...e adiciona no fim do deck do jogador
            deckJogador.push(cartaMaquina)
        } else if (cartaJogador.atributos[attr] < cartaMaquina.atributos[attr]) {
            txt = 'Derrota :/'
            corFundoResult = corDerrota
            // remove do topo do deck...
            deckMaquina.splice(0, 1)
            // ...e bota no fim
            deckMaquina.push(cartaMaquina)
            // remove a carta do deck do jogador...
            deckJogador.splice(0, 1)
            // ...e adiciona no fim do deck da maquina
            deckMaquina.push(cartaJogador)
        } else {
            txt = 'Empate'
            corFundoResult = corEmpate
            // remove do topo do deck...
            deckJogador.splice(0, 1)
            deckMaquina.splice(0, 1)
            // ...e bota no fim
            deckJogador.push(cartaJogador)
            deckMaquina.push(cartaMaquina)
        }

        divResultado.style.display = "block"
        divResultado.style.backgroundColor = corFundoResult
        divResultado.innerHTML = txt


        document.getElementById('cartaMaquina').innerHTML = `<img src="${cartaMaquina.link}" id="cartaMaquina" class="carta-lor">`

        document.getElementById('btnJogar').disabled = true
        document.getElementById('btnNovoJogo').disabled = false

        atualizaPontos()
    } else {
        alert('Nenhum atributo selecionado')
    }
}

function proximaRodada() {
    document.getElementById('cartaMaquina').innerHTML = ""
    document.getElementById('cartas').style.display = "none"
    document.getElementById('selecAtributo').style.display = "none"

    if (deckJogador.length == 0 || deckMaquina.length == 0) {
        finalizaJogo()
    } else {
        document.getElementById('btnSortear').disabled = false
        document.getElementById('btnJogar').disabled = false
        document.getElementById('btnNovoJogo').disabled = true
        document.getElementById("resultado").style.display = "none"
    }
}

function atualizaPontos() {
    ptsJogador = deckJogador.length
    ptsMaquina = deckMaquina.length
    var divPontos = document.getElementById('placar')
    var html = `Quantidade de cartas em cada deck:<br><span id="result-final">Jogador ${ptsJogador} x ${ptsMaquina} Máquina</span>`
    divPontos.innerHTML = html
}

function finalizaJogo() {
    document.getElementById('novo-jogo').style.display = 'block'
    var corFundoResult = ''

    if (ptsJogador > 0) {
        var resultado = "Vitória \\o/"
        corFundoResult = corVitoria
    } else {
        var resultado = "Derrota :/"
        corFundoResult = corDerrota
    }

    document.getElementById('placar').innerHTML = `Fim de jogo!<br><br>Placar final:<br><br><span id="result-final">Jogador ${ptsJogador} x ${ptsMaquina} Máquina</span>`

    var divResult = document.getElementById("resultado")
    divResult.style.backgroundColor = corFundoResult
    divResult.style.display = "block"
    divResult.innerHTML = resultado
}

function novoJogo() {
    document.getElementById('novo-jogo').style.display = 'none'
    deck = [leblanc, aphelios, renekton, shen, teemo, thresh, lux, tryndamere, tf]
    separaCartas()
    proximaRodada()
    atualizaPontos()
}