function validarTextoEntrada() {
    var input = document.getElementById('texto-entrada').value;   
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
    let textoEncriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById('texto-salida').value = textoEncriptado;
    document.getElementById('texto-salida').style.display = '';
    document.getElementById('texto-entrada').value = '';
    document.getElementById('mensajeNoEncontrado').style.display = 'none';
    document.getElementById('ingresoTextoDeseado').style.display = 'none';
    document.getElementById('Muñeco').style.display = 'none';    
    document.getElementById('btn-copiar').removeAttribute('disabled');    
    document.getElementById("btn-encriptar").disabled = true;    
}

function copiarTexto (){
    // Seleccionar el texto del input
    const inputTexto = document.getElementById('texto-salida');
    inputTexto.select();
    // Copiar el texto al portapapeles
    document.execCommand("copy");
}

function desencriptarTexto (){
    let texto = document.querySelector("#texto-entrada").value;
    let textoDesencriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById('texto-salida').value = textoDesencriptado;
    document.getElementById('texto-salida').style.display = '';
    document.getElementById('texto-entrada').value = '';
    document.getElementById('mensajeNoEncontrado').style.display = 'none';
    document.getElementById('ingresoTextoDeseado').style.display = 'none';
    document.getElementById('Muñeco').style.display = 'none';
    document.getElementById('btn-copiar').removeAttribute('disabled');    
}
