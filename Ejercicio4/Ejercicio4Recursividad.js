let parImpar = (numero) => {
    if (numero === 0) {
        return 'Par';
    } else if (numero === 1) {
        return 'Impar';
    } else {
        return parImpar(numero - 2);
    }
};
console.log("20 - "+parImpar(20)) 
console.log("75 - "+parImpar(75)) 
console.log("98 - "+parImpar(98)) 
console.log("113 - "+parImpar(113)) 
//Es una técnica que nos permite que un bloque
//de instrucciones se ejecute un cierto número de veces