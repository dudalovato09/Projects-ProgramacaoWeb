function verificarPrimo() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(numero) || numero < 2) {
        resultado.textContent = 'Insira um número inteiro maior que 1.';
        return;
    }

    if (isPrimo(numero)) {
        resultado.textContent = `${numero} É um número primo.`;
    } else {
        resultado.textContent = `${numero} Não é um número primo.`;
    }
}

function isPrimo(numero) {

    if (numero <= 1){
        return false;
    }

    if (numero <= 3){
        return true;
    } 

    if (numero % 2 === 0 || numero % 3 === 0){
        return false;
    }

    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0){
            return false;
        } 
    
        return true;
    }
}