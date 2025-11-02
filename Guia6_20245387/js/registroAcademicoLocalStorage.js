// Leyendo elementos del DOM

const btnAddEstudiante = document.querySelector("#idBtnAgregarEstudiante");
const btnViewEstudiante = document.querySelector("#idBtnMostrarEstudiante");
const inputCarnet = document.querySelector("#inputCarnet");
const inputNombre = document.querySelector("#inputNombre");
const inputApellidos = document.querySelector("#inputApellidos");

btnAddEstudiante.addEventListener("click", guardarEstudiante);

function guardarEstudiante() {
	const nombre = inputNombre.value.trim();
	const carnet = inputCarnet.value.trim();
	const apellidos = inputApellidos.value.trim();
	const errores = validarDatos(carnet, nombre, apellidos);
	if (errores.length > 0) {
		alert("Errores:\n" + errores.join("\n "));
		return;
	}

	const alumnos = [];
	alumnos.push({carnet,nombre,apellidos})
	guardarEstudiantes(alumnos);
}

function guardarEstudiantes(estudiantes){
	localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
}

function recuperarEstudiantes() {
	const data = localStorage.getItem("estudiantes");
	return data ? JSON.parse(data) : [];
}

function validarDatos(carnet, nombre, apellidos){
	const errores = [];
	if(carnet.length == 0){
		errores.push("El carnet es requerido")
	}
	if(nombre.length == 0){
		errores.push("El nombre es requerido")
	}
	if(apellidos.length == 0){
		errores.push("Este campo es requerido")
	}
	return errores;
}