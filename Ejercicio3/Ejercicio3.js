const notas = [10,8,6,9,7,3,4,5];

const suma = notas.reduce( function(primeraNota, segundaNota){
    return primeraNota + segundaNota;
})

const media = suma/notas.length;
console.log(media);