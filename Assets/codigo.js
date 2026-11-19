function generarCodigo() {
    var reg_Nombres = document.getElementById("reg_Nombres").value;
    var reg_Paterno = document.getElementById("reg_Paterno").value;
    var reg_Materno = document.getElementById("reg_Materno").value;
    var reg_FechaNac = document.getElementById("reg_FechaNac").value;
    var fechaArray = reg_FechaNac.split('-');
    var dia = fechaArray[2];
    var mes = fechaArray[1];
    var anio = fechaArray[0];
    var codigo = reg_Paterno.substring(0, 1) + reg_Materno.substring(0, 1) + reg_Nombres.substring(0, 1) + dia + mes + anio.substring(2);
    document.getElementById("codigo").value = codigo;
}