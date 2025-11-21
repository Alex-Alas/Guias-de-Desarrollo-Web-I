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
		const inputCarnet = document.querySelector("#inputCarnet");
		const inputNombre = document.querySelector("#inputNombre");
		const inputApellidos = document.querySelector("#inputApellidos");
		const inputDui = document.querySelector("#inputDui");
		const inputNit = document.querySelector("#inputNit");
		const inputFechaNacimiento = document.querySelector("#inputFechaNacimiento");
		const inputEmail = document.querySelector("#inputEmail");
		const inputEdad = document.querySelector("#inputEdad");

        // Contenedores de errores
        const errorCarnet = document.querySelector("#errorCarnet");
        const errorNombre = document.querySelector("#errorNombre");
        const errorApellidos = document.querySelector("#errorApellidos");
        const errorDui = document.querySelector("#errorDui");
        const errorNit = document.querySelector("#errorNit");
        const errorFechaNacimiento = document.querySelector("#errorFechaNacimiento");
        const errorEmail = document.querySelector("#errorEmail");
        const errorEdad = document.querySelector("#errorEdad");

        // Limpiar errores previos
        const inputs = [inputCarnet, inputNombre, inputApellidos, inputDui, inputNit, inputFechaNacimiento, inputEmail, inputEdad];
        const errors = [errorCarnet, errorNombre, errorApellidos, errorDui, errorNit, errorFechaNacimiento, errorEmail, errorEdad];

        inputs.forEach(input => input.classList.remove("is-invalid"));
        errors.forEach(error => error.textContent = "");

		const carnet = inputCarnet.value.trim().toUpperCase();
		const nombre = inputNombre.value.trim().toUpperCase();
		const apellidos = inputApellidos.value.trim().toUpperCase();
		const dui = inputDui.value.trim();
		const nit = inputNit.value.trim();
		const fechaNacimiento = inputFechaNacimiento.value.trim();
		const email = inputEmail.value.trim();
		const edad = inputEdad.value.trim();

        let isValid = true;

        // Validaciones con Expresiones Regulares
        const carnetRegex = /^[A-Z]{2}\d{3}$/;
        const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
        const duiRegex = /^\d{8}-\d{1}$/;
        const nitRegex = /^\d{4}-\d{6}-\d{3}-\d{1}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const edadRegex = /^\d+$/;

        if (!carnetRegex.test(carnet)) {
            inputCarnet.classList.add("is-invalid");
            errorCarnet.textContent = "Formato de Carnet inválido. Ejemplo: AB001";
            isValid = false;
        }
        if (!nombreRegex.test(nombre)) {
            inputNombre.classList.add("is-invalid");
            errorNombre.textContent = "El nombre no debe contener números ni caracteres especiales.";
            isValid = false;
        }
        if (!nombreRegex.test(apellidos)) {
            inputApellidos.classList.add("is-invalid");
            errorApellidos.textContent = "El apellido no debe contener números ni caracteres especiales.";
            isValid = false;
        }
        if (!duiRegex.test(dui)) {
            inputDui.classList.add("is-invalid");
            errorDui.textContent = "Formato de DUI inválido. Ejemplo: ########-#";
            isValid = false;
        }
        if (!nitRegex.test(nit)) {
            inputNit.classList.add("is-invalid");
            errorNit.textContent = "Formato de NIT inválido. Ejemplo: ####-######-###-#";
            isValid = false;
        }
        if (fechaNacimiento === "") {
            inputFechaNacimiento.classList.add("is-invalid");
            errorFechaNacimiento.textContent = "Debe seleccionar una fecha de nacimiento.";
            isValid = false;
        }
        if (!emailRegex.test(email)) {
            inputEmail.classList.add("is-invalid");
            errorEmail.textContent = "Formato de correo electrónico inválido.";
            isValid = false;
        }
        if (!edadRegex.test(edad)) {
            inputEdad.classList.add("is-invalid");
            errorEdad.textContent = "La edad debe ser un número.";
            isValid = false;
        }

		if (isValid) {
			arrayEstudiantes.push([carnet, nombre, apellidos, dui, nit, fechaNacimiento, email, edad]);
			
			// Limpiando campos del formulario
			inputCarnet.value = "";
			inputNombre.value = "";
			inputApellidos.value = "";
			inputDui.value = "";
			inputNit.value = "";
			inputFechaNacimiento.value = "";
			inputEmail.value = "";
			inputEdad.value = "";
			inputCarnet.focus();
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
			table += "<th scope='col'>DUI</th>";
			table += "<th scope='col'>NIT</th>";
			table += "<th scope='col'>Fecha Nacimiento</th>";
			table += "<th scope='col'>Email</th>";
			table += "<th scope='col'>Edad</th>";
			table += "</tr>";
			table += "</thead>";
			table += "<tbody>";

			// Recorremos el arreglo
			for (let i = 0; i < arrayEstudiantes.length; i++) {
				let carnet = arrayEstudiantes[i][0];
				let nombres = arrayEstudiantes[i][1];
				let apellidos = arrayEstudiantes[i][2];
				let dui = arrayEstudiantes[i][3];
				let nit = arrayEstudiantes[i][4];
				let fechaNacimiento = arrayEstudiantes[i][5];
				let email = arrayEstudiantes[i][6];
				let edad = arrayEstudiantes[i][7];

				table += "<tr>";
				table += `<td scope='row' style='font-weight: bold;'>${i + 1}</td>`;
				table += `<td>${carnet}</td>`;
				table += `<td>${nombres}</td>`;
				table += `<td>${apellidos}</td>`;
				table += `<td>${dui}</td>`;
				table += `<td>${nit}</td>`;
				table += `<td>${fechaNacimiento}</td>`;
				table += `<td>${email}</td>`;
				table += `<td>${edad}</td>`;
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