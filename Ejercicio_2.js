function sumarYPromediar(arreglo) {
    var suma=0;
    var cont=0;
    var promedio=0;
    arreglo.forEach((valor) => {
        suma+=parseInt(valor);
        cont+=1;
    });
    promedio=suma/cont;
    console.log(suma);
    console.log(promedio);
}