function esPar(n){
    if (n % 2 == 0){
        return true
    }

    return false
}

function capitalizar(texto){
    textoCapitalizado = texto.charAt(0).toUpperCase() + texto.slice(1)

    return textoCapitalizado
}

module.exports = {esPar, capitalizar}