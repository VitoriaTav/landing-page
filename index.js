
var Card1 = window.document.getElementById("c1")
var Card2 = window.document.getElementById("c2")
var Card3 = window.document.getElementById("c3")
var arrow = window.document.getElementById("arrow")
var Contador = 0

function RolarParaDireita() {
         if (Contador == 0) {
                Card1.style = "display:none";
                Card3.style = "display:flex"
                Contador++
        } else if (Contador==1){
                Card3.style = "display:none";
                Card1.style = "display:flex"
                Contador=0
        }
}


