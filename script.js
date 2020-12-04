function maiusculo() {
    let valor = document.txt.visor.value.toUpperCase();
    document.txt.visor.value = valor;
}
function minusculo() {
    let valor = document.txt.visor.value.toLowerCase();
    document.txt.visor.value = valor;
}
function carac() {
    let valor = document.txt.visor.value;
    document.txt.visorVl.value = valor.length;

}
function lmaiuscula() {
    let valor = document.txt.visor.value;
    let txtNum = valor.length ;

    var pLetra = valor.substring(0, 1).toUpperCase();
    var resto = valor.substring(1, txtNum).toLowerCase();

    document.txt.visor.value = pLetra + resto;
    console.log( pLetra + " "+ resto)
}

