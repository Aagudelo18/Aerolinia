const validarFecha = () => {

    var departingFecha = new Date(document.getElementById('departing').value);
    var returningFecha = new Date(document.getElementById('returning').value);
    var fecha = new Date();

    var error=document.getElementById("error")
    
    error.textContent = '';
    

    if (departingFecha < fecha || returningFecha < fecha) {
        error.textContent = 'La fecha departing y la fecha returning deben ser mayores a la fecha actual.';
      } else if (departingFecha < returningFecha) {
        error.textContent = 'La fecha departing debe ser mayor a la fecha returning.';
      }

  }

  document.querySelector('#showflights')
.addEventListener('click',() => validarFecha())