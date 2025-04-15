'use strict'

async function cadastrarUsuario() {
    const nome = document.getElementById('inputnome').value
    const email = document.getElementById('inputemail').value
    const senha = document.getElementById('inputsenha').value
    const senhaRecuperacao = document.getElementById('inputpalavrachave').value
    const imagemPerfil = document.getElementById('inputfoto').value
    const checkPremium = document.getElementById('checkbox').checked

    // Validação básica (opcional, mas recomendada)
    if (nome === "" || email === "" || senha === "" || senhaRecuperacao === "" || imagemPerfil === "") {
        alert("Por favor, preencha todos os campos.")
        return
    }

    const dadosUsuario = {
        nome: nome,
        email: email,
        senha: senha,
        premium: checkPremium ? "1" : "0",
        imagemPerfil: imagemPerfil,
        senhaRecuperacao: senhaRecuperacao
    }

    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosUsuario)
    }

    const response = await fetch("https://back-spider.vercel.app/user/cadastrarUser", options)

    if (response.ok) {
        alert("Usuário cadastrado com sucesso!")
        window.location.href = "../index.html"
    } else {
        alert("Erro ao cadastrar. Verifique os dados e tente novamente.")
    }
}

document.getElementById('button').addEventListener('click', cadastrarUsuario)
