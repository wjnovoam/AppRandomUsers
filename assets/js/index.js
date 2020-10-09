import {infoUser} from './info_usuario.js';
import {usersAll} from './usuarios.js';
import {users} from './usuarios.js';

const d = document;
const $form = d.getElementById('form');
const $table = d.querySelector('.tabla-usuarios');
const $modal = d.getElementById('modal');
const $body = d.getElementsByTagName('body')[0];
const $alerta = d.querySelector('.alerta');

$form.addEventListener('submit', (e) => {
	e.preventDefault();
	let user = e.target.numUsuarios.value;

	if (/^[0-9]+$/.test(user) && user > 0 && user <= 5000) {
		$table.querySelector('tbody').innerHTML = '';
		usersAll(user);
		e.target.numUsuarios.value = '';
	} else {
		e.target.numUsuarios.value = '';
		$alerta.innerHTML += `<div class="content-alerta">
        <div class="alerta-peligro">
          <h5>Puede consultar de 1 a 5000 usuarios!</h5><button type="button" class="close"><span
              class="cerrar-alert">X</span></button>
        </div>
      </div>`;

		setTimeout(() => {
			$alerta.innerHTML = '';
		}, 1200);
	}
});

d.addEventListener('click', (e) => {
	if (e.target.matches('.info')) {
		let usuario = users[e.target.dataset.id - 1];
		infoUser(usuario);
		$modal.style.display = 'block';
		$body.style.position = 'static';
		$body.style.height = '100%';
		$body.style.overflow = 'hidden';
	}

	if (e.target.matches('.close')) {
		$modal.style.display = 'none';
		$body.style.position = 'inherit';
		$body.style.height = 'auto';
		$body.style.overflow = 'visible';
	}

	if (e.target.matches('#modal')) {
		$modal.style.display = 'none';
		$body.style.position = 'inherit';
		$body.style.height = 'auto';
		$body.style.overflow = 'visible';
	}
	console.log(e.target);
	if (e.target.matches('.cerrar-alert')) {
		$alerta.innerHTML = '';
	}
});
