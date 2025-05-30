function calcularPago(){
    const kilowatts= parseFloat(document.getElementById("kilowatts").value);

    const resultado=kilowatts*3.50;
    document.getElementById("resultado").innerText= "Total a pagar: $" + resultado;
};