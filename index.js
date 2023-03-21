var botonGenerar = document.getElementById('botonGenerar')
var password = document.getElementById('password')

botonGenerar.addEventListener('click', validarTexto)


function peticion(){
    fetch('https://passwordinator.onrender.com?num=true&char=true&caps=true&len=18')
    .then(res=>res.json())
    .then(resJson=>{
        var data = resJson['data']
        resultado.innerHTML = data
    })
}


function validarTexto(){
    resultado.innerHTML = ""
    var inputPassword = document.getElementById('password').value;

    if (inputPassword == "" ) {
        resultado.innerHTML = "No ha ingresado un texto"

    } else {
        peticion()
    }
}

