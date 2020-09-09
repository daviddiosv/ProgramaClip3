function validar() {
    var numero;
    var intent = 0;
    var expresion = /[0-9]/g;

    numero = document.getElementById("numero").value;

    if (numero === "") {
        alert("El campo está vacío");
        document.getElementById('intentos').innerHTML = "Intentos:" + intent;
        return false;
    }
    else if (!expresion.test(numero)) {
        alert("El número no es válido");
        document.getElementById('intentos').innerHTML = "Intentos:" + intent;
        return false;
    }
    else {
        for (i=0; i<3;i++)
        {
            if (numero != 7) {
                intent++;
                console.log(i);
                alert("Buen intento, pero no es ese el número");
                document.getElementById('intentos').innerHTML = ("Intentos:") + intent;
                return false;
            }
            else {
                ++intent;
                alert("ACERTASTE SON 7 LAS PIEZAS DEL TETRIS CLÁSICO");
                document.getElementById('intentos').innerHTML = ("Intentos:") + intent;
                return false;
            }
        }
    }
}
