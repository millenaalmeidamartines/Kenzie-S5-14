function valoresImpares(list) {
    if (list.length !== 10) {
        return `A lista deve conter exatamente 10 elementos`
    }

    let impares = 0;

    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 !== 0) {
            impares++;
        }
    }

    const percentualImpares = (impares / list.length) * 100;

    return `O total de valores ímpares é ${impares} e corresponde a ${percentualImpares.toFixed(2)}% da lista.`
}

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(valoresImpares(list));