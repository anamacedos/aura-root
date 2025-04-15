'use strict'

// Pegando os dados do localStorage
const dados = JSON.parse(localStorage.getItem('dadosUsuario'))

if (dados) {
    const nome = dados.nome
    document.getElementById('saudacao').textContent = `Olá ${nome}, digite sua nova senha.`
} else {
    // Se a pessoa tentar acessar direto sem passar pela primeira etapa
    window.location.href = "../html/redefinir1.html"
}

// Função para enviar nova senha
async function redefinirSenha() {
    const novaSenha = document.getElementById('inputSenha').value

    if (novaSenha === "" || novaSenha === undefined) {
        alert("Por favor, digite a nova senha.")
        return
    }

    const url = `https://back-spider.vercel.app/user/newPassword/${dados.id}`

    const dadosAtualizados = {
        senha: novaSenha
    }

    const options = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosAtualizados)
    }

    const response = await fetch(url, options)

    if (response.ok) {
        alert("Senha atualizada com sucesso!")
        localStorage.removeItem('dadosUsuario')
        window.location.href = "../index.html"
    } else {
        alert("Houve um erro ao atualizar a senha.")
    }
}

document.getElementById('button').addEventListener('click', redefinirSenha)
