function actualizarOpciones() {
    const apod_Turno = document.getElementById('apod_Turno').value;
    const apod_Carrera = document.getElementById('apod_Carrera');

    // Borramos todas las apod_Carrera del segundo combobox
    apod_Carrera.innerHTML = '';

    // Añadimos las apod_Carrera correspondientes al apod_Turno seleccionado
    if (apod_Turno === 'MAÑANA') {
      const opcion1 = document.createElement('option');
      opcion1.value = 'ADMINISTRACIÓN DE EMPRESAS';
      opcion1.textContent = 'ADMINISTRACIÓN DE EMPRESAS';
      apod_Carrera.appendChild(opcion1);

      const opcion2 = document.createElement('option');
      opcion2.value = 'ARTES GRÁFICAS';
      opcion2.textContent = 'ARTES GRÁFICAS';
      apod_Carrera.appendChild(opcion2);

      const opcion3 = document.createElement('option');
      opcion3.value = 'CONTADURIA GENERAL';
      opcion3.textContent = 'CONTADURIA GENERAL';
      apod_Carrera.appendChild(opcion3);

      const opcion4 = document.createElement('option');
      opcion4.value = 'ELECTRICIDAD INDUSTRIAL';
      opcion4.textContent = 'ELECTRICIDAD INDUSTRIAL';
      apod_Carrera.appendChild(opcion4);

      const opcion5 = document.createElement('option');
      opcion5.value = 'MECÁNICA AUTOMOTRIZ';
      opcion5.textContent = 'MECÁNICA AUTOMOTRIZ';
      apod_Carrera.appendChild(opcion5);

      const opcion6 = document.createElement('option');
      opcion6.value = 'MECÁNICA INDUSTRIAL';
      opcion6.textContent = 'MECÁNICA INDUSTRIAL';
      apod_Carrera.appendChild(opcion6);

      const opcion7 = document.createElement('option');
      opcion7.value = 'SECREATARIADO EJECUTIVO';
      opcion7.textContent = 'SECREATARIADO EJECUTIVO';
      apod_Carrera.appendChild(opcion7);

    } else if (apod_Turno === 'TARDE') {
      const opcion1 = document.createElement('option');
      opcion1.value = 'ADMINISTRACIÓN DE EMPRESAS';
      opcion1.textContent = 'ADMINISTRACIÓN DE EMPRESAS';
      apod_Carrera.appendChild(opcion1);

      const opcion2 = document.createElement('option');
      opcion2.value = 'CONTADURIA GENERAL';
      opcion2.textContent = 'CONTADURIA GENERAL';
      apod_Carrera.appendChild(opcion2);

      const opcion3 = document.createElement('option');
      opcion3.value = 'SISTEMAS INFORMÁTICOS';
      opcion3.textContent = 'SISTEMAS INFORMÁTICOS';
      apod_Carrera.appendChild(opcion3);
    }
  }


  function actualizarOpciones2() {
    const apod_Carrera = document.getElementById('apod_Carrera').value;
    const apod_Semestre = document.getElementById('apod_Semestre');

    // Borramos todas las apod_Semestre del segundo combobox
    apod_Semestre.innerHTML = '';

    // Añadimos las apod_Semestre correspondientes al apod_Carrera seleccionado
    if (apod_Carrera === 'ADMINISTRACIÓN DE EMPRESAS' || apod_Carrera === 'ARTES GRÁFICAS'|| apod_Carrera === 'SISTEMAS INFORMÁTICOS'|| apod_Carrera === 'CONTADURIA GENERAL' || apod_Carrera === 'SECREATARIADO EJECUTIVO') {
      const opcion1 = document.createElement('option');
      opcion1.value = 'PRIMER AÑO';
      opcion1.textContent = 'PRIMER AÑO';
      apod_Semestre.appendChild(opcion1);

      const opcion2 = document.createElement('option');
      opcion2.value = 'SEGUNDO AÑO';
      opcion2.textContent = 'SEGUNDO AÑO';
      apod_Semestre.appendChild(opcion2);

      const opcion3 = document.createElement('option');
      opcion3.value = 'TERCER AÑO';
      opcion3.textContent = 'TERCER AÑO';
      apod_Semestre.appendChild(opcion3);
    } else if (apod_Carrera === 'ELECTRICIDAD INDUSTRIAL'||apod_Carrera === 'MECÁNICA INDUSTRIAL'||apod_Carrera === 'MECÁNICA AUTOMOTRIZ') {
      const opcion1 = document.createElement('option');
      opcion1.value = 'PRIMER SEMESTRE';
      opcion1.textContent = 'PRIMER SEMESTRE';
      apod_Semestre.appendChild(opcion1);

      const opcion2 = document.createElement('option');
      opcion2.value = 'SEGUNDO SEMESTRE';
      opcion2.textContent = 'SEGUNDO SEMESTRE';
      apod_Semestre.appendChild(opcion2);

      const opcion3 = document.createElement('option');
      opcion3.value = 'TERCER SEMESTRE';
      opcion3.textContent = 'TERCER SEMESTRE';
      apod_Semestre.appendChild(opcion3);

      const opcion4 = document.createElement('option');
      opcion4.value = 'CUARTO SEMESTRE';
      opcion4.textContent = 'CUARTO SEMESTRE';
      apod_Semestre.appendChild(opcion4);
      
      const opcion5 = document.createElement('option');
      opcion5.value = 'QUINTO SEMESTRE';
      opcion5.textContent = 'QUINTO SEMESTRE';
      apod_Semestre.appendChild(opcion5);

      const opcion6 = document.createElement('option');
      opcion6.value = 'SEXTO SEMESTRE';
      opcion6.textContent = 'SEXTO SEMESTRE';
      apod_Semestre.appendChild(opcion6);
    }
  }