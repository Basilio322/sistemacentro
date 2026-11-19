function mostrarMes() {
    var fechaInput = document.getElementById('pen_Fecha').value;
    var fecha = new Date(fechaInput);
    var opcionesMes = {
        month: 'long'
    };
    var mes = fecha.toLocaleDateString(undefined, opcionesMes);
    document.getElementById('pen_PagoN').innerHTML =" " + mes;
}