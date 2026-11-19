
function convertirNumero() {
  var numeroInput = document.getElementById("pen_cuenta");
  var resultadoInput = document.getElementById("pen_letras");

  var numero = numeroInput.value;
  var numeroEnPalabras = convertirNumeroEnPalabras(numero);

  resultadoInput.value = numeroEnPalabras;
}
function convertirNumeroEnPalabras(numero) {
  var unidades = ['CERO', 'UNO', 'DOS', 'TRES', 'CUATRO', 'CINCO', 'SEIS', 'SIETE', 'OCHO', 'NUEVE'];
  var especiales = ['DIEZ', 'ONCE', 'DOCE', 'TRECE', 'CATORCE', 'QUINCE', 'DIECISÉIS', 'DIECISIETE', 'DIECIOCHO', 'DIECINUEVE'];
  var decenas = ['', 'DIEZ', 'VEINTE', 'TREINTA', 'CUARENTA', 'CINCUENTA', 'SESENTA', 'SETENTA', 'OCHENTA', 'NOVENTA'];
  var centenas = ['', 'CIENTO', 'DOSCIENTOS', 'TRESCIENTOS', 'CUATROCIENTOS', 'QUINIENTOS', 'SEISCIENTOS', 'SETECIENTOS', 'OCHOCIENTOS', 'NOVECIENTOS'];

  if (numero < 0 || numero > 100000) {
    return "Número fuera de rango";
  } else if (numero < 10) {
    return unidades[numero];
  } else if (numero < 20) {
    return especiales[numero - 10];
  } else if (numero < 100) {
    var decena = Math.floor(numero / 10);
    var unidad = numero % 10;
    if (decena === 2) {
      if (unidad === 0) {
        return "VEINTE";
      } else {
        return "VEINTI" + unidades[unidad];
      }
    } else {
      var pen_letras = decenas[decena];
      if (unidad > 0) {
        pen_letras += " Y " + unidades[unidad];
      }
      return pen_letras;
    }
  } else if (numero < 1000) {
    var centena = Math.floor(numero / 100);
    var decena = Math.floor((numero % 100) / 10);
    var unidad = numero % 10;
    var pen_letras = centenas[centena];
    if (decena > 0) {
      pen_letras += " " + decenas[decena];
    }
    if (unidad > 0) {
      pen_letras += " y " + unidades[unidad];
    }
    return pen_letras;
  } else if (numero < 100000) {
    var millar = Math.floor(numero / 1000);
    var centena = Math.floor((numero % 1000) / 100);
    var decena = Math.floor((numero % 100) / 10);
    var unidad = numero % 10;

      var pen_letras = convertirNumeroEnPalabras(millar) + " mil";
      if (centena > 0) {
        pen_letras += " " + centenas[centena];
      }
      if (decena > 0) {
        pen_letras += " " + decenas[decena];
      }
      if (unidad > 0) {
        pen_letras += " y " + unidades[unidad];
      }
      return pen_letras;
    } else { // Número igual a 100000
      return "cien mil";
    }
  }
  