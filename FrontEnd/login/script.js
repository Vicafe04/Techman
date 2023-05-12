const TA = document.querySelector("#TA");
<<<<<<< HEAD

function login() {

}

const buttons = document.querySelectorAll("button")

buttons.forEach((b) => {
    b.addEventListener('click', (e) => {
        e.preventDefault()
        var senha = [5];
        TA.value = b.innerHTML;
        if(b.innerHTML == 'C'){
            console.log("apagar")
        } else if( b.innerHTML == 'enter' ) {
            console.log("enter")
        }   
    })
=======
const buttons = document.querySelectorAll("button")
var acc = false;

function login() {
    let dados = {
        senha: TA.value
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    };

    fetch("http://localhost:3000/Usuario/login", options)
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            if ((dados.senha == data.senha)) {
                acc = true;
            }

            if (acc == true) {
                alert("Acesso permitido");
                window.location.href = "../main/index.html";
            } else {
                alert("Credencial incorreta");
            }
        })
}

function erase() {
    TA.value = ""
}

function keyboardAction(e) {
    const value = e.target.value;
    TA.value += value;
}

buttons.forEach(button => {
    button.addEventListener("click", keyboardAction);
});

const valores = []

buttons.forEach(button => {
    valores.push(button.value)
>>>>>>> cef87b7159e8ae8e5d18cbb3b0d0c3d4b2b511fb
})