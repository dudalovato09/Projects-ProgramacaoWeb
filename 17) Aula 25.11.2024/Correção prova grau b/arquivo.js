function executa()
{
	var obj = document.getElementsByTagName("body")[0];
	
	var conteudo = "<table><tr><td>Nome:</td><td><input type='text'></td></tr><tr><td>Sobrenome:</td><td><input type='text'></td></tr><tr><td>Data de Nascimento:</td><td><input type='text'></td></tr><tr><td>Curso:</td><td><input type='text'></td></tr></table><input type='button' value='Incluir registro'>";
	
	obj.innerHTML = conteudo;
	
	
}