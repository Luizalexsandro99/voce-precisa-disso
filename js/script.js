 let frases = [
    'Seja você mesmo, todos os outros já existem.',
    'Seja um incentivador. O mundo já tem críticos demais.',
    'Chique é ser feliz. Elegante é ser honesto. Bonito é ser caridoso. Sábio é saber ser grato. O resto é inversão de valores.',
    'Que o vento leve o necessário e me traga o suficiente.',
    'Algumas vezes coisas ruins acontecem em nossas vidas para nos colocar na direção das melhores coisas que poderíamos viver.',
    'Nunca saberemos o quão forte somos até que ser forte seja a única escolha.',
    'Ser feliz não é viver apenas momentos de alegria. É ter coragem de enfrentar os momentos de tristeza e sabedoria para transformar os problemas em aprendizado.',
    'Se a caminhada está difícil, é porque você está no caminho certo.',
    'Ame seus pais, sua vida e seus amigos. Seus pais, porque são únicos. Sua vida, porque é curta demais. Seus amigos, porque são raros.',
    'Seja humilde para admitir seus erros, inteligente para aprender com eles e maduro para corrigi-los.',
    'Prefira o sorriso, faz bem a você e aos que estão ao seu redor. Dê risada de tudo, de si mesmo. Não adie alegrias. Seja feliz hoje!',
    'Eu ainda não cheguei lá, mas estou mais perto do que ontem.',
    'Você é mais forte do que imagina. Acredite.',
    'Superar não é escolha, é necessidade.'
]

let recebendo = document.querySelector("#fraseQualquer")
let btn = document.querySelector('.butao')
let btn2 = document.querySelector('.butao2')
let a = Math.floor(Math.random() * 14)

function gerarFrase(){
    recebendo.innerHTML = frases[a]
    btn.style.display = 'none'
    btn2.style.display = 'block'
}

function gerarOutraFrase(){
    recebendo.innerHTML = ''
    a = Math.floor(Math.random() * 14)
    btn.style.display = ' block'
    btn2.style.display = ' none '
}


