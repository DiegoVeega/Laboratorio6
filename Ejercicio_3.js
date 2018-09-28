function tipoDeDato(arreglo){
    var tipo;
    var cont=0;
    var arre= [];
    arreglo.forEach((valor) => {
        arre.push(typeof(valor));
    });
    console.log(arre);
}