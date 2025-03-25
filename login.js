'use strict'
const email = document.getElementById('inputusuarioemail')
const senha = document.getElementById('inputsenha')



 async function validarLogin(){
    if (email == "" || email ==  undefined || senha == "" | senha == undefined){
        alert("Por favor, verifique as credenciais")
    }else{
        const url = "https://back-spider.vercel.app/login"
        const dados = {
            email : email,
            senha: senha
        }
        const options = {
            method: POST,
            headers: {
                "content/type": "application/JSON"
            },
            body: JSON.stringify(dados)

        }


        const response = await fetch (url, options)

        if(response.sucess == true){
            
        }else{

        }

    }
}



document.getElementById('entrar').addEventListener('click', validarLogin)