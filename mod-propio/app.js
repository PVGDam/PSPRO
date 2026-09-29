const { esPar } = require("./utilidades")
const { capitalizar } = require("./utilidades")
const chalk = require('chalk');

console.log(capitalizar("pablo"))
console.log(capitalizar("profesor"))



console.log(esPar(7))
console.log(chalk.green(esPar(2)))


// ¿Qué número de versión aparece en dependencies? 

// El numero de version de Chalk que aparece es "^4.1.2"

// ¿Qué significa el símbolo que lo acompaña? 

// El simbolo ^ significa que no puede cambiar, 
// a diferencia de las minors y patchs, la mayor (que es la que tiene el simbolo), no puede ser diferente a 4,
// es decir, puede ser la 4.6.3 o cualquiera, pero no puede ser la 5.1.2 o la 3.1.2

// ¿Qué diferencia hay entre ese archivo y package-lock.json?

// La diferencia es que el package-lock guarda especificamente las versiones que estamos utilizando
// no las versiones con las que se crearon o son compatibles, para asegurarse que cuando alguien
// instale de nuevo las dependencias del proyecto, funcionen correctamente, ya que si hay cambios algunas cosas podrian
// ser diferentes y no funcionar
