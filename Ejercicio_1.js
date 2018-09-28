/* Realice una función en JS, que dados un número y un arreglo como parámetros, retorne cuantas ocurrencias existen de ese número dentro del arreglo. */
function ocurrencias(numero, arreglo){
    var cont=0;
    arreglo.forEach((valor) => {
        if(valor==numero){
            cont+=1;
        }
    });
    console.log("El numero "+numero+" se repite "+cont+" veces")
}