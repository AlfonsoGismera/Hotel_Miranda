// export function initContactMap() {
//     // Coordenadas de los 3 hoteles
//     const locations = [
//       { title: 'Miranda Centro',    pos: { lat: 40.4203, lng: -3.7058 } },
//       { title: 'Miranda Norte',     pos: { lat: 40.4400, lng: -3.7000 } },
//       { title: 'Miranda Sur',       pos: { lat: 40.4000, lng: -3.7100 } },
//     ];
  
//     const map = new google.maps.Map(document.getElementById('contactMap'), {
//       center: locations[0].pos,
//       zoom: 12
//     });
  
//     locations.forEach(loc => {
//       new google.maps.Marker({
//         position: loc.pos,
//         map,
//         title: loc.title
//       });
//     });
//   }
  