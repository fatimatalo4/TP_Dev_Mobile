function task() {
	var poids = document.getElementById('poids');
	var taille = document.getElementById('taille');

	var imc= (poids.value/(taille.value * taille.value))*1000;

	if (imc<=16) 
	{
		alert("IMC="+imc+" et vous etes en situation de maigreur extreme");
	}
	else if (imc<16 && imc<=18.4)  
	{
		alert("IMC="+imc+" et vous etes en situation d'insuffisance pondérale" );
	}
	else if (imc<=18.5 && imc<=24.9) 
	{
		alert("IMC="+imc+" et vous etes en situation de Corpulence normale");
	}
	else if (imc<=25 && imc<=29.9) 
	{
		alert("IMC="+imc+" et vous etes en situation de surpoids");
	}
	else if (imc<=30 && imc<=34.9)
	{

		alert("IMC="+imc+" et vous etes en situation d'obésité");
	}
	else {

		alert("IMC="+imc+" et vous etes en situation d'obésité s'évére");
	}

}
	