// Cuando se cargue el documento...
document.addEventListener("DOMContentLoaded", function () {
	// Accedemos al contenedor donde se mostrará los estudiantes
	const containerEstudiantes = document.querySelector("#idContainerEstudiantes");

	// Accedemos a cada botón por medio de la API DOM
	const btnAddEstudiante = document.querySelector("#idBtnAgregarEstudiante");
	const btnViewEstudiantes = document.querySelector("#idBtnMostrarEstudiantes");

	// Agregamos el evento clic a los botones con la función correspondiente
	btnAddEstudiante.addEventListener("click", addEstudiantes);
	btnViewEstudiantes.addEventListener("click", viewEstudiantes);

	// Arreglo global de estudiantes
	let arrayEstudiantes = new Array();

	// Función para agregar estudiantes
	function addEstudiantes() {
		const inputCarnet = document.querySelector("#inputCarnet").value.toString().toUpperCase();
		const inputNombre = document.querySelector("#inputNombre").value.toString().toUpperCase();
		const inputApellidos = document.querySelector("#inputApellidos").value.toString().toUpperCase();

		if (inputCarnet != "" && inputNombre != "" && inputApellidos != "") {
			arrayEstudiantes.push([inputCarnet, inputNombre, inputApellidos]);
			alert("Se registro el nuevo estudiante");

			// Limpiando campos del formulario
			document.querySelector("#inputCarnet").value = "";
			document.querySelector("#inputNombre").value = "";
			document.querySelector("#inputApellidos").value = "";
			document.querySelector("#inputCarnet").focus();
		} else {
			alert("Faltan campos que completar");
		}
	}

	// Función para visualizar estudiantes
	function viewEstudiantes() {
		// Validando que existan estudiantes registrados
		let totalEstudiantes = arrayEstudiantes.length;
		if (totalEstudiantes > 0) {
			let table = "<table class='table table-light table-striped'>";
			table += "<thead>";
			table += "<tr>";
			table += "<th scope='col' style='width: 5%;'>X</th>";
			table += "<th scope='col' style='width: 15%;'>Carnet</th>";
			table += "<th scope='col'>Nombres</th>";
			table += "<th scope='col'>Apellidos</th>";
			table += "</tr>";
			table += "</thead>";
			table += "<tbody>";

			// Recorremos el arreglo
			for (let i = 0; i < arrayEstudiantes.length; i++) {
				let carnet = arrayEstudiantes[i][0];
				let nombres = arrayEstudiantes[i][1];
				let apellidos = arrayEstudiantes[i][2];
				table += "<tr>";
				table += `<td scope='row' style='font-weight: bold;'>${i + 1}</td>`;
				table += `<td>${carnet}</td>`;
				table += `<td>${nombres}</td>`;
				table += `<td>${apellidos}</td>`;
				table += "</tr>";
			}

			table += "</tbody>";
			table += "</table>";
			containerEstudiantes.innerHTML = table;
		} else {
			alert("No se han registrado estudiantes");
		}
	}
});