'use strict'
const nomeInput = document.getElementById('inputnome')
const emailInput = document.getElementById('inputemail')
const senhaInput = document.getElementById('inputsenha')
const palavraChaveInput = document.getElementById('inputpalavrachave')



 async function validarLogin(){

    const email = emailInput.value 
    const senha = senhaInput.value

    console.log(email, senha);
    


    if (email == "" || email ==  undefined || senha == "" | senha == undefined){
        alert("Por favor, verifique as credenciais")
    }else{
        const url = "https://back-spider.vercel.app/login"
        const dados = {
            email : email,
            senha: senha
        }

       
        
        const options = {
            method: 'POST',
            headers: {
                "content-type": "application/JSON"
            },
            body: JSON.stringify(dados)

        }

        const response = await fetch(url, options)

        console.log(response);
        

        if(response.ok){
            window.location.href = "../html/home.html"
        }else{
            alert("Houve algum problema")
        }

    }
}



document.getElementById('buttonentrar').addEventListener('click', validarLogin)