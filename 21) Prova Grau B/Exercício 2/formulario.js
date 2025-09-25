function salvarInformacoes() {
    const nomeUsuario = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
            
    localStorage.setItem('nome', nomeUsuario);
    localStorage.setItem('email', email);
}

function preencherCampos() {
    const nomeSalvo = localStorage.getItem('nome');
    const emailSalvo = localStorage.getItem('email');
        
    if (nomeSalvo) {
        document.getElementById('nome').value = nomeSalvo;
    }

    if (emailSalvo) {
        document.getElementById('email').value = emailSalvo;
    }
}

window.onload = function() {
    preencherCampos();
};