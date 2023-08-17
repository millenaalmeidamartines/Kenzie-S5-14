function paresEImpares(list) {
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < list.length; i++) {
        if (lista[i] % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    return `A lista recebida possui ${pares} elementos pares e ${impares} elementos ímpares`;
}

const lista = [2, 4, 6, 3, 1, 9, 30, 15, 21, 11, 6, 3, 8, 5, 23, 14, 12, 10, 18, 20, 7, 17, 22, 27, 25, 16, 19, 24, 26, 30];

console.log(paresEImpares(lista));