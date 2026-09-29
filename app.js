function consultaLenta(valor, callback) {
  setTimeout(() => callback(null, valor * 2), 500);
}

consultaLenta(21, (a,b) =>{console.log(b)})

function consultaLentaProm(valor) {
  return new Promise((resolve, reject) => {

    const cantidad =valor * 2

    if (cantidad){
        resolve(cantidad)
    }else {
        reject(new Error("No ha funcionado"))
    }
  })
}

consultaLentaProm(21)
    .then(valor => console.log(valor))
    .catch(error => console.error(error))

async function main() {
  const res = await consultaLentaProm(21);
  console.log('async/await:', res);
}

main()