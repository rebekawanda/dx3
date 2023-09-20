function dentrofora(){
    const x = document.querySelector("#x").value;
    const y = document.querySelector("#y").value;
    const text = document.querySelector("h5");

    if(0 <= x && x <= 432 && 0 <= y && y <= 468){
        text.innerHTML = "Dentro";
    } else{
        text.innerHTML = "Fora";
    }
}
