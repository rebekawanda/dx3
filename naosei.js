

function vencedor() {
    const text = document.querySelector("h5");
    const a = document.querySelector('#letraA').value;
    const b = document.querySelector('#letraB').value;
    const c = document.querySelector('#letraC').value;


    if (b < a && c > a) {
        text.innerHTML = 'O vice-líder foi o A';
    }
    else if (a < b && c > b) {
        text.innerHTML = 'O vice-líder foi o B';
    }
    else if (b < c && c > a) {
        text.innerHTML = 'O vice-líder foi o C';
    }
}