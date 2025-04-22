'use strict'

async function criarFoto(linkImagem,) {
    const divImagens = document.getElementById('imagens')
    const novaImagem = document.createElement('img')
    novaImagem.src = linkImagem
    divImagens.appendChild(novaImagem)
    novaImagem.classList.add('imagem')
}

async function pesquisarImagens() {
    const url = "https://back-spider.vercel.app/publicacoes/listarPublicacoes"
    const response = await fetch(url)
    const data = await response.json()
    const arrayDeImagens = []
    
    data.forEach(function(item){
        arrayDeImagens.push(item.imagem)
    })
    

    return arrayDeImagens
}

async function preencherImagens() {
    const imagens = await pesquisarImagens()

    const divImagens = document.getElementById('imagens')

    imagens.forEach(function(item){
        criarFoto(item)
    })
    //console.log(imagens);
}

preencherImagens()