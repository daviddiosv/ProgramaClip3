//si no lo pongo fuera de la función se va a settear siempre en 0
var intent = 0;
function validar() {
    event.preventDefault();

    var respuesta;
    var expresion = /[0-9]/g;

    respuesta = document.getElementById("respuesta").value;

    //validacion del contenido ingresado por el input
    if (respuesta === "") {
        alert("El campo está vacío");
        document.getElementById('intentos').innerHTML = "Intentos:" + intent;
    }
    else if (!expresion.test(respuesta)) {
        alert("El número no es válido");
        document.getElementById('intentos').innerHTML = "Intentos:" + intent;
    }else 
    //adivinanza
    if(intent<4)
    {
        intent++;
        if(respuesta==7)
        {
            document.getElementById('correccion').innerHTML = "La respuesta es correcta!";
            document.getElementById('intentos').innerHTML = "Intentos:" + intent;
            document.getElementById('pistas').innerHTML = "";
            document.getElementById('respuesta').innerHTML = "";
            document.getElementById('respuesta').disabled = true;
            document.getElementById('boton').disabled = true;
        }
        else
        {
            document.getElementById('correccion').innerHTML = "Buen intento pero no es correcto";
            document.getElementById('intentos').innerHTML = "Intentos:" + intent;
            document.getElementById('respuesta').value= "";
            if(intent==2)
            {
                document.getElementById('pistas').innerHTML = "Es un número de un dígito";
            }
            else if (intent ==3)
            {
                document.getElementById('pistas').innerHTML = "Última pista, es un número primo";
            }
        }
    }else
    {
        document.getElementById('correccion').innerHTML = "Te quedaste sin intentos";
        document.getElementById('respuesta').disabled = true;
        document.getElementById('boton').disabled = true;
    }
}