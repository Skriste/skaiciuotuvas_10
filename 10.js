let rezultatas = document.createElement('p');


btn.addEventListener("submit", function (e) {
    
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