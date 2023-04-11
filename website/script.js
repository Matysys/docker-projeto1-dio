//Atribuindo o valor de cada variável para cada input do HTML.
let cep = document.getElementById("cepValor");
let btn = document.getElementById("checarCep");
let cepRua = document.getElementById("cepRua");
let cepCidade = document.getElementById("cepCidade");
let cepUF = document.getElementById("cepUF");

//Fazendo uma requisição HTTP GET com a API do ViaCep usando a biblioteca Axios.
const getInfo = async (zip) => {

    //Verificando o valor do input "cepValor".
    if(zip == "" || zip == null || isNaN(zip)){
    	alert("CEP inválido");
    	return;
    }else if(zip.length == 8){
    	const response = await axios.get(`https://viacep.com.br/ws/${zip}/json/`);
		const data = await response.data;
		console.log(data);
		cepRua.value = data.logradouro != '' ? data.logradouro : "Não disponível";
		cepCidade.value = data.localidade;
		cepUF.value = data.uf;
    }else{
    	alert("CEP precisa ter 8 dígitos");
    	return;
    }
	
}

//Chamando a função assíncrona getInfo() ao clicar no botão.
btn.addEventListener('click', function(){
	getInfo(cep.value)
});