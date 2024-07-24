function validarTextoEntrada() {
    var input = document.getElementById('texto-entrada').value;
    //var mensajeSoloLetras = document.getElementById('mensaje-SoloLetras').value;
    var mensajeError = document.getElementById('mensajeError');
    var regex = /^[a-z]+$/;

    if (regex.test(input)) {
        mensajeError.style.display = 'none';
        document.getElementById('msg-SoloLetras').style.display = 'block';
        document.getElementById('btn-encriptar').removeAttribute('disabled');
    } else {
        mensajeError.style.display = 'block';
        document.getElementById('msg-SoloLetras').style.display = 'none';
    }
}

function encriptarTexto (){
    let texto = document.getElementById('texto-entrada').value
    //document.querySelector('#input-texto').value = '';
    let textoEncriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById('texto-salida').value = textoEncriptado;
    document.getElementById('texto-salida').style.display = '';
    document.getElementById('mensajeNoEncontrado').style.display = 'none';
    document.getElementById('ingresoTextoDeseado').style.display = 'none';
    document.getElementById('btn-desencriptar').removeAttribute('disabled');
    document.getElementById('btn-copiar').removeAttribute('disabled');
    document.getElementById('Muñeco').style.display = 'none';
    document.getElementById("btn-encriptar").disabled = true;    

    console.log(texto);
    console.log(textoEncriptado);

}

/*function copiarTexto (){
    navigator.clipboard.readText()
	.then(text => {
		console.log(`Resultado: ${text}`);
    }).catch(error => {
    	console.log(`Ocurrió un error: ${error}`);
    })     
}*/

/*function getFocus() {
    document.getElementById('texto-salida').select();
  }*/

function copiarTexto (){
    // Seleccionar el texto del input
    const inputTexto = document.getElementById('texto-salida');
    inputTexto.select();
    inputTexto.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto al portapapeles
    document.execCommand("copy");

    // Avisar al usuario que el texto ha sido copiado
    alert("Texto copiado: " + inputTexto.value);
}



function desencriptarTexto (){
    let texto = document.querySelector("#texto-entrada").value;
    let textoDesencriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById('texto-salida').value = textoDesencriptado;
    document.querySelector("#texto-entrada").value;

}

/*https://es.stackoverflow.com/questions/510006/m%C3%A9todo-de-encriptado-en-javascript*/

