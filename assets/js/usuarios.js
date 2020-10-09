import {mostrarUsers} from './paginacion.js';
export const users = [];
const d = document;
const $cargando = d.querySelector('.cargando');
const $cover = d.createElement('img');
$cover.src = 'assets/img/oval.svg';

export async function usersAll(user) {
	try {
		users.length = 0;
		$cargando.appendChild($cover);
		let res = await fetch(`https://randomuser.me/api/?results=${user}`);
		let json = await res.json();

		if (!res.ok) throw {status: res.status, statusText: res.statusText};
		json.results.forEach((el, index) => {
			el.id = index + 1;
			users.push(el);
		});
		await mostrarUsers(1);
		$cargando.removeChild($cover);
	} catch (error) {
		await $cargando.removeChild($cover);
		let mensaje = error.statusText || 'Ocurrio un error';
		$cargando.textContent = `Error ${error.status}: ${mensaje}`;
	}
}
