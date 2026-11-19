  //obtenemos los elementos de los cuadros de texto
  var montogamea = document.getElementById("montogamea");
  var montoadicional = document.getElementById("montoadicional");  
  var montofinal = document.getElementById("montofinal");
  
  //agregamos un evento keyup a los cuadros de texto montogamea y montoadicional
  montogamea.addEventListener("keyup", sumar);
  montoadicional.addEventListener("keyup", sumar);  
  
  //funcion para sumar los valores de los cuadros de texto
  function sumar() {
    montofinal.value = parseFloat(montogamea.value) + parseFloat(montoadicional.value);
  }