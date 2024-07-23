

function encriptarTexto (){
    let texto = document.getElementById('texto-entrada').value
    //document.querySelector('#input-texto').value = '';
    let textoEncriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.getElementById('texto-salida').value = textoEncriptado;
    
    document.getElementById('texto-salida').style.display = '';
    document.getElementById('lbl-mensaje').style.display = 'none';
    document.getElementById('btn-desencriptar').removeAttribute('disabled');
    document.getElementById('btn-copiar').removeAttribute('disabled');
    document.getElementById('Muñeco').style.display = 'none';

    console.log(texto);
    console.log(textoEncriptado);

}

function desencriptarTexto (){
    let texto = document.querySelector("#texto-entrada").value;
    let textoDesencriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById('texto-salida').value = textoDesencriptado;
    document.querySelector("#texto-entrada").value;

}

/*https://es.stackoverflow.com/questions/510006/m%C3%A9todo-de-encriptado-en-javascript*/

