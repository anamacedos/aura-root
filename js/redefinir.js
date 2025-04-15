'use strict'
const emailInput = document.getElementById('inputEmail')
const palavraInput = document.getElementById('inputPalavra')

async function validarEmailEPalavra() {

    const email = emailInput.value
    const palavra = palavraInput.value

    if(email == "" || email ==  undefined || palavra == "" | palavra == undefined){
        alert("Por favor, verifique as credenciais")
    }else{
        const url = "https://back-spider.vercel.app/user/RememberPassword"
        const dados = {
            email: email,
            wordKey: palavra
        }

        const options = {
            method: 'POST',
            headers:{
                "content-type": "application/JSON"
            },
            body: JSON.stringify(dados)
        }
        const response = await fetch(url, options)

        const test = await response.json()
        console.log(test)
        alert(test)
        

        if(response.ok){
            localStorage.setItem('dadosUsuario', JSON.stringify(test))
            window.location.href = "../html/redefinir2.html"
        }else{
            alert("houve um problema")
        }
    }
}

document.getElementById('button').addEventListener('click', validarEmailEPalavra)