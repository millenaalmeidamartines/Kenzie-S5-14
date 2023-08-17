function validaListas(a, b) {
    if (a.length !== 10 || b.length !== 10) {
        return `Lista fora dos padrões necessários`;
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 !== 0 || a[i] % 3 !== 0) {
            return `Valores não permitidos encontrados`;
        }
    }

    for (let i = 0; i < b.length; i++) {
        if (b[i] % 5 !== 0) {
            return `Valores não permitidos encontrados`
        }
    }

    return `Listas válidas`;
}

const listaA = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
const listaB = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

console.log(validaListas(listaA, listaB));