
function calculateMonths() {
    var birthDate = new Date(document.getElementById("reg_FechaNac").value);
    var endDate = new Date(document.getElementById("res_FechaCon").value);
    var diff = Math.abs(endDate.getTime() - birthDate.getTime());
    var months = Math.floor(diff / (1000 * 3600 * 24 * 30));
    document.getElementById("res_canMeses").value = months;
  }

  function calculateMonths2() {
    var birthDate2 = new Date(document.getElementById("reg_FechaNac").value);
    var endDate2 = new Date(document.getElementById("his_Fecha").value);
    var diff2 = Math.abs(endDate2.getTime() - birthDate2.getTime());
    var months2 = Math.floor(diff2 / (1000 * 3600 * 24 * 30));
    document.getElementById("mescontrol").value = months2;
  }
