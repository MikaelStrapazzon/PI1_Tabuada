function geraTabuada()
{
	let inputNumero =  document.querySelector( "#numTabuada" );
	let numero = inputNumero.value;
	let listaTabuada = document.querySelector( "#listaTabuada > select" );

	document.querySelector( "#listaTabuada > div > p" ).innerHTML = "";

	if( !numero )
	{
		inputNumero.classList.add( "numeroInvalido" );
		listaTabuada.innerHTML = "";

		return false;
	}

	inputNumero.classList.remove( "numeroInvalido" );

	let options = "";

	for( let index = 1; index <= 10; index++ )
	{
		options += "<option value='" + index + "'>" + numero + " x " + index + " = " + numero * index + "</option>";
	}

	listaTabuada.innerHTML = options;
}

function adicionaTelaoLinhaTabuada( select )
{
	let numero = document.querySelector( "#numTabuada" ).value;
	let texto = "";

	if( numero )
	{
		texto = numero + " x " + select.value + " = " + numero * select.value;
	}

	document.querySelector( "#listaTabuada > div > p" ).innerHTML = texto;
}