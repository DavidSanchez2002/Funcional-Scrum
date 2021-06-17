const Compra = [12,32,32,53];
const totalCompra = Compra.map( function(Compra){
    return (Compra*1.21);
});

console.log("funcional - "+totalCompra);