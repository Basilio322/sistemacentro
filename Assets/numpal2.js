
function convertirNumero2() {
  var numeroInput2 = document.getElementById("debe2");
  var resultadoInput2 = document.getElementById("pen_letras3");

  var numero2 = numeroInput2.value;
  var numeroEnPalabras2 = convertirNumero2EnPalabras(numero2);

  resultadoInput2.value = numeroEnPalabras2;
}
function convertirNumero2EnPalabras(numero2) {
  var unidades = ['CERO', 'UNO', 'DOS', 'TRES', 'CUATRO', 'CINCO', 'SEIS', 'SIETE', 'OCHO', 'NUEVE'];
  var especiales = ['DIEZ', 'ONCE', 'DOCE', 'TRECE', 'CATORCE', 'QUINCE', 'DIECISÉIS', 'DIECISIETE', 'DIECIOCHO', 'DIECINUEVE'];
  var decenas = ['', 'DIEZ', 'VEINTE', 'TREINTA', 'CUARENTA', 'CINCUENTA', 'SESENTA', 'SETENTA', 'OCHENTA', 'NOVENTA'];
  var centenas = ['', 'CIENTO', 'DOSCIENTOS', 'TRESCIENTOS', 'CUATROCIENTOS', 'QUINIENTOS', 'SEISCIENTOS', 'SETECIENTOS', 'OCHOCIENTOS', 'NOVECIENTOS'];

  if (numero2 < 0 || numero2 > 100000) {
    return "Número fuera de rango";
  } else if (numero2 < 10) {
    return unidades[numero2];
  } else if (numero2 < 20) {
    return especiales[numero2 - 10];
  } else if (numero2 < 100) {
    var decena = Math.floor(numero2 / 10);
    var unidad = numero2 % 10;
    if (decena === 2) {
      if (unidad === 0) {
        return "VEINTE";
      } else {
        return "VEINTI" + unidades[unidad];
      }
    } else {
      var pen_letras3 = decenas[decena];
      if (unidad > 0) {
        pen_letras3 += " Y " + unidades[unidad];
      }
      return pen_letras3;
    }
  } else if (numero2 < 1000) {
    var centena = Math.floor(numero2 / 100);
    var decena = Math.floor((numero2 % 100) / 10);
    var unidad = numero2 % 10;
    var pen_letras3 = centenas[centena];
    if (decena > 0) {
      pen_letras3 += " " + decenas[decena];
    }
    if (unidad > 0) {
      pen_letras3 += " y " + unidades[unidad];
    }
    return pen_letras3;
  } else if (numero2 < 100000) {
    var millar = Math.floor(numero2 / 1000);
    var centena = Math.floor((numero2 % 1000) / 100);
    var decena = Math.floor((numero2 % 100) / 10);
    var unidad = numero2 % 10;

      var pen_letras3 = convertirNumero2EnPalabras(millar) + " mil";
      if (centena > 0) {
        pen_letras3 += " " + centenas[centena];
      }
      if (decena > 0) {
        pen_letras3 += " " + decenas[decena];
      }
      if (unidad > 0) {
        pen_letras3 += " y " + unidades[unidad];
      }
      return pen_letras3;
    } else { // Número igual a 100000
      return "cien mil";
    }
  }
  