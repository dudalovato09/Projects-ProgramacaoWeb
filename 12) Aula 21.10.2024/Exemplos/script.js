function SomarNumeros(numero1, numero2){
    var resultado;
    resultado = numero1 + numero2;
    return resultado;
} 

function SubtrairNumeros(numero1, numero2){
    var resultado;
    resultado = numero1 - numero2;
    return resultado;
}

function ProcessarEvento(){
    var numero1, numero2, resultado;

    numero1 = prompt("Informe o numero 1");
    numero2 = prompt("Informe o numero 2");
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    resultado = SomarNumeros(numero1, numero2);

    document.write("Resultado=" + resultado);
}