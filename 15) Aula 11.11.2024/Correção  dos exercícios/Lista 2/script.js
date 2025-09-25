function setCookie(chave, valor, validade){
    var strCookie;

    //"contador=1;usuario=juliano;produtomaisvendido=12;"
    strCookie = chave + "=" + valor + ";";

    document.cookie = strCookie + ";expires=" + validade.toGMTString();
}

function getCookie(chave){
    var strCookie, vetorCookie, vetorCookieUnitario;
    strCookie = document.cookie;

    vetorCookie = strCookie.split(";");
    //"contador=1;usuario=juliano;produtomaisvendido=12;"
    //vetorCookie[0] = "contador=1"
    //vetorCookie[1] = "usuario=juliano"
    //vetorCookie[2] = "produtomaisvendido=12"
    for(i = 0;i < vetorCookie.length;i++){
        vetorCookieUnitario = vetorCookie[i].split("=");
        //vetorCookieUnitario[0] = "contador"
        //vetorCookieUnitario[1] = "1"
        if (vetorCookieUnitario[0].trim() == chave){
            return vetorCookieUnitario[1];
        }
    }
    return "";
}

function VerificaCPF(texto) {
    var Soma;
    var Resto;
    Soma = 0;
    
    if (texto == "00000000000" ||
        texto == "99999999999") 
        return false;

    for (i=1; i<=9; i++) 
        Soma = Soma + Number(texto.substring(i-1, i)) * (11 - i);
    
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  
        Resto = 0;
        
    if (Resto != parseInt(texto.substring(9, 10)) ) 
        return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) 
        Soma = Soma + Number(texto.substring(i-1, i)) * (12 - i);

    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  
        Resto = 0;
        
    if (Resto != parseInt(texto.substring(10, 11) ) ) 
        return false;
    return true;
}