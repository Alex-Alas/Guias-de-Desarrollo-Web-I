
// Contenedores
const containerArreglo = document.querySelector("#idContainerArreglo");
const containerSort = document.querySelector("#idContainerSort");

// Botones
const btnAgregar = document.querySelector("#idBtnAgregar");
const btnOrdenar = document.querySelector("#idBtnOrdenar");

// Eventos
btnAgregar.addEventListener("click", agregarElemento);
btnOrdenar.addEventListener("click", ordenarElementos);

// Arreglo global
let arreglo = new Array();

function agregarElemento() {
	let numero = parseFloat(document.querySelector("#inputNumero").value);

	if (!isNaN(numero)) {
		arreglo.push(numero);

		// Crear elemento visual
		let caja = document.createElement("div");
		caja.className = "col-md-1 colum";
		let valor = document.createElement("h3");
		valor.textContent = numero;
		caja.appendChild(valor);
		containerArreglo.insertAdjacentElement("beforeend", caja);
	} else {
		alert("Debe ingresar un número válido");
	}
}

function ordenarElementos() {
	for (let i of arreglo.sort()) {
		let caja = document.createElement("div");
		caja.className = "col-md-1 colum-green";
		let valor = document.createElement("h3");
		valor.textContent = i;
		caja.appendChild(valor);
		containerSort.insertAdjacentElement("beforeend", caja);
	}
}