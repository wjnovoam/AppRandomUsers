import {users} from './usuarios.js';

const d = document;
const $template = d.getElementById('user-template').content;
const $fragment = d.createDocumentFragment();
const $table = d.querySelector('.tabla-usuarios');
const $btnAnterior = d.querySelector('.anterior');
const $btnSiguiente = d.querySelector('.siguiente');

let pageNumber = 1;
let pageSize = 10;
let pagination;

export function mostrarUsers(num) {
	if (num === 1) pageNumber = 1;

	$table.querySelector('tbody').innerHTML = '';
	let pageCont = Math.ceil(users.length / pageSize);
	let pagination = paginate(users, pageSize, pageNumber);
	pagination.forEach((el, index) => {
		$template.querySelector('.id').textContent = el.id;
		$template.querySelector('.nombre').textContent = el.name.first;
		$template.querySelector('.apellido').textContent = el.name.last;
		$template.querySelector('.correo').textContent = el.email;
		$template.querySelector('.genero').textContent = el.gender;
		$template.querySelector('.telefono').textContent = el.cell;
		$template.querySelector('.info').dataset.id = index + 1;

		let $clone = d.importNode($template, true);
		$fragment.appendChild($clone);
	});

	$table.querySelector('tbody').appendChild($fragment);
	$btnSiguiente.classList.add('is-active');

	if (pageNumber > 1) $btnAnterior.classList.remove('is-active');
	if (pageNumber === 1) $btnAnterior.classList.add('is-active');
	if (pageNumber < pageCont) $btnSiguiente.classList.remove('is-active');
	if (pageNumber === pageCont) $btnSiguiente.classList.add('is-active');
}

function paginate(array, page_size, page_number) {
	return array.slice((page_number - 1) * page_size, page_number * page_size);
}
function nextPage() {
	pageNumber++;
	mostrarUsers(pagination);
}
function previusPage() {
	pageNumber--;
	mostrarUsers(pagination);
}

d.addEventListener('click', (e) => {
	if (e.target.matches('.siguiente')) {
		nextPage();
	}
	if (e.target.matches('.anterior')) {
		previusPage();
	}
});
