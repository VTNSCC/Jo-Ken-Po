function Myway() {
    alert("Rules:\n YOU WILL PLAY AGAINST THE COMPUTER!\n - Rock X Scissors= Rock wins!\n - Scissors X Paper= Scissors wins!\n - Paper X Rock= Paper wins!\n - If you WIN you'll get 1 point\n - If it's a TIE nobody gets points\n - If the PC WIN's he'll get 1 point too\n LET'S PLAY NOW !!  ")
}

var pps = 0;
var ppc = 0;

function Choice(Vcescolheu) {
    Pcescolheu = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];

    document.getElementById("result").innerHTML = "Your choice: " + Vcescolheu + "</br> PC's Choice: " + Pcescolheu + "."


    if (Vcescolheu == Pcescolheu) {
        document.getElementById("Choice").innerHTML = "TIE!";

    } else if (["RockScissors", "PaperRock", "ScissorsPaper"].indexOf(Vcescolheu + Pcescolheu) != -1) {
        pps++;

        document.getElementById("Choice").innerHTML = "WIN!!!!!";

        document.getElementById("pps").innerHTML = "Your score: " + pps.toString();

    } else {

        ppc++;
        document.getElementById("Choice").innerHTML = "YOU LOSE ;-; !";

        document.getElementById("ppc").innerHTML = "PC score: " + ppc.toString();

    }


}
