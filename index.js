


function calcular() {
    
    let precioTicket = 200

    // ENTRADA
    Cantidad = document.getElementById("inputCantidad").value;
    Categoria = document.getElementById("inputDescuento").value;

    // PROCESO
    Categoria = Categoria / 100;
    resultado = Cantidad * precioTicket;
    resultado = resultado * Categoria;


    // SALIDA
    document.getElementById("final").innerHTML = "Total a pagar: $ " + resultado;

}
