function jogo(){
const n1 = document.querySelector("#n1").value;
const n2 = document.querySelector("#n2").value;
const n3 = document.querySelector("#n3").value;
const nf = n1+n2+n3;
const texto = document.querySelector("h1");


if(nf=="100"){
    texto.innerHTML = "Alice foi a Vencedora!";
}
else if(nf=="011"){
    texto.innerHTML = "Alice foi a Vencedora!";
}
else if(nf=="010"){
    texto.innerHTML = "Beto foi o Vencedor!";
}
else if(nf=="101"){
    texto.innerHTML = "Beto foi o Vencedor!";
}
else if(nf=="001"){
    texto.innerHTML = "Clara foi a Vencedora!";
}
else if(nf=="110"){
    texto.innerHTML = "Clara foi a Vencedora!";
}
}