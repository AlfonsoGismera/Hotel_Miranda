export default function hero_dates() {
  const arrivalDateInput = document.getElementById('arrival-date');
  const departureDateInput = document.getElementById('departure-date');
  const today = new Date().toISOString().split('T')[0];

  arrivalDateInput.min = today;
  arrivalDateInput.value = today;
  departureDateInput.min = today;
  departureDateInput.value = today;

  arrivalDateInput.addEventListener('change', () => {
    departureDateInput.min = arrivalDateInput.value;
    if (departureDateInput.value < arrivalDateInput.value) {
      departureDateInput.value = arrivalDateInput.value;
    }
  });

  document.getElementById('heroDatesForm').addEventListener('submit', e => {
    e.preventDefault();
    const arrival = arrivalDateInput.value;
    const departure = departureDateInput.value;
    if (departure < arrival) {
      alert('Departure date cannot be before arrival date.');
      return;
    }
    //  Guardamos arrival en localStorage para usarlo después
    localStorage.setItem('arrivalDate', arrival);
    // redirige a room_list.html (o muestra la sección correspondiente)
    window.location.href = '/html/room_list.html';
  });
}
