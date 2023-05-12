const TA = document.querySelector("#TA");

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
})