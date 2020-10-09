const $modal = document.getElementById('modal');

export function infoUser(usuario) {
	$modal.innerHTML = `<div class="modal-content">
    <div class="content-close">
      <span class="close">×</span>
    </div>
    <div class="foto">
      <img src="${usuario.picture.large}" alt="">
      <h2>${usuario.name.title} ${usuario.name.first} ${usuario.name.last}</h2>
    </div>
    <div class="content-datos">
      <div class="caja1">
        <div class="titulo">
          <h3>Datos personales</h3>
        </div>
        <h4>Email</h4>
        <p>${usuario.email}</p>
        <h4>Genero</h4>
        <p>${usuario.gender === 'male' ? 'Masculino' : 'Femenino'}</p>
        <h4>Telefono</h4>
        <p>${usuario.phone}</p>
        <h4>Celular</h4>
        <p>${usuario.cell}</p>
        <h4>Edad</h4>
        <p>${usuario.dob.age}</p>
        <h4>Fecha de nacimiento</h4>
        <p>${usuario.dob.date.slice(0, 10)}</p>
      </div>
      <div class="caja2">
        <div class="titulo">
          <h3>Residencia</h3>
        </div>
        <h4>Pais</h4>
        <p>${usuario.location.country}</p>
        <h4>Ciudad de residencia</h4>
        <p>${usuario.location.city}</p>
        <h4>Estado</h4>
        <p>${usuario.location.state}</p>
        <h4>Calle</h4>
        <p>${usuario.location.street.number} ${usuario.location.street.name}</p>
        <h4>Codigo postal</h4>
        <p>${usuario.location.postcode}</p>
        <h4>Nacionalidad</h4>
        <p>${usuario.nat}</p>
      </div>
    </div>
  </div>`;
}
