var number = document.getElementById("calcular");

function Adcted(value) {
    number.value += value;
}

function Clear() {
    number.value = "";
}

function Result() {
    try {
        number.value = eval(number.value);
    } catch {
        number.value = "Erro";
    }
}