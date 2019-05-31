

pegarNum1 = function(){
	return inputs[0].value;
}
pegarNum2 = function(){
	return inputs[1].value;
}
entradasVazias = function(){
	if(pegarNum1() === ''|| pegarNum2() === ""){
		return true;
	}else{
		return false;
	}
}

atualizarResposta = function(){
	
	let num1 = pegarNum1();
	let num2 = pegarNum2();
	let soma = parseInt (num1) + parseInt (num2);

	resposta.textContent = num1 + '+'+ num2 +'=' + soma;
	
}
somar = function(){
	if(entradasVazias()){
		resposta.textContent = 'Erro Preencha os dois campos numéricos'
	}else{
		atualizarResposta();
	}


}
	/*Pegando os elementos input*/
/*let substitui o valor em variavel local*/

/*Pegando o elemento pelo nome do elemento*/
let inputs = document.querySelectorAll('input');
/*Pegando o elemento pela classe, usa o .*/
let resposta = document.querySelector('.resposta');
/*Pegando o elemento pelo id , com o hash #*/
let button = document.querySelector('#btnSomar');

/*Espera por evento*/
/*Quando o botão for clicado, chama a função somar*/
button.addEventListener('click',somar);
