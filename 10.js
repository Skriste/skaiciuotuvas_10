let rezultatas = document.createElement('p');

const newLocal = "form";
let form = document.forms[newLocal];
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let Number = +form["Number"].value;
    let Number1 = +form["Number1"].value;
    let suma = Number + Number1;
    if (suma === suma) {
        rezultatas.textConten = "Suma yra lygi: " + suma
    } else {
        rezultatas.textContent = "klaida"
    }
    body.appendChild(rezultatas);

}


);