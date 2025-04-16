export default function hero_dates() {
    // ... Tu código de fechas aquí ...
    const arrivalDateInput = document.getElementById('arrival-date');
    const departureDateInput = document.getElementById('departure-date');
    const today = new Date().toISOString().split('T')[0];
  
    console.log("Hoy es:", today);
    arrivalDateInput.min = today;
    arrivalDateInput.value = today;
    console.log("Fecha de llegada inicial:", arrivalDateInput.value);
    // window.alert("Fecha de llegada inicializada a hoy: " + arrivalDateInput.value);
  
    arrivalDateInput.addEventListener('change', () => {
      departureDateInput.min = arrivalDateInput.value;
      console.log("Cambio en fecha de llegada. Nueva fecha mínima para salida:", departureDateInput.min);
      if (departureDateInput.value < arrivalDateInput.value) {
        departureDateInput.value = arrivalDateInput.value;
        console.log("Se reajustó la fecha de salida:", departureDateInput.value);
        // window.alert("Se reajustó la fecha de salida a: " + departureDateInput.value);
      }
    });
  
    departureDateInput.min = today;
    departureDateInput.value = today;
    // console.log("Fecha de salida inicial:", departureDateInput.value);
    // window.alert("Fecha de salida inicializada a hoy: " + departureDateInput.value);
  
    const heroDatesForm = document.getElementById('heroDatesForm');
    heroDatesForm.addEventListener('submit', (e) => {
      if (departureDateInput.value < arrivalDateInput.value) {
        e.preventDefault();
        alert('Departure date cannot be before arrival date.');
        console.log("Error: la fecha de salida es menor que la de llegada.");
      } else {
        console.log("Formulario enviado con fechas válidas:", arrivalDateInput.value, departureDateInput.value);
      }
    });
  }
  