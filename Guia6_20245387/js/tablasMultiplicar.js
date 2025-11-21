// Accediendo al contenedor
const containerTabla = document.querySelector("#idContainerTabla");
// Accediendo al botón
const btnCalcular = document.querySelector("#idBtnCalcular");

// Agregando evento click al botón
btnCalcular.addEventListener("click", calcularTabla);

function calcularTabla() {
	let inputTabla = document.querySelector("#inputTabla").value;

	//verifiquemos que el dato colocado sea un numero entero positivo
	if (inputTabla > 0) {
		let contador = 1;
		let tabla = "<h2>Tabla de multiplicar del ${inputTabla}</h2>";
		//utilizaremos do while para generar la tabla de multiplicar
		// que el usuario ha indicado
		do {
			let resultado = contador * inputTabla;
			tabla += `<div class="row text-center">`;
			tabla += `<div class="col-md-1 colum"><h3>${contador}</h3></div>`;
			tabla += `<div class="col-md-1 colum-green"><h3>x</h3></div>`;
			tabla += `<div class="col-md-1 colum"><h3>${inputTabla}</h3></div>`;
			tabla += `<div class="col-md-1 colum-green"><h3>=</h3></div>`;
			tabla += `<div class="col-md-1 colum"><h3>${resultado}</h3></div>`;
			tabla += `</div>`;

			//incrementamos el valor del contador
			//para que podamos salir del do while
			contador++;
		} while (contador <= 12);

		document.querySelector("#inputTabla").value = 1;
		document.querySelector("#inputTabla").focus();
		containerTabla.innerHTML = tabla;
	} else {
		alert("No se ha ingresado un número válido");
	}
}