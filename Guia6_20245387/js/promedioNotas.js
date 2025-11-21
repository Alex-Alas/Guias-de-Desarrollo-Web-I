// Accediendo al contenedor
const containerEstudiantes = document.querySelector("#idContainerEstudiantes");
// Accediendo al botón
const btnPromedio = document.querySelector("#idBtnPromedio");

// Agregando evento click al botón
btnPromedio.addEventListener("click", generarEstudiantes);

function generarEstudiantes() {
	let arrayEstudiante = new Array();
	let totalEstudiantes = document.querySelector("#inputNumeroEstudiantes").value;
	let contador = 1;

	while (contador <= totalEstudiantes) {
		let estudiante = prompt(
			"Ingrese el nombre del estudiante " + contador + ":"
		);
		let calificacion = prompt(
			"Ingrese la calificación del estudiante " + contador + ":"
		);
		let convertir = parseFloat(calificacion);

		while (isNaN(convertir) || convertir < 0 || convertir > 10) {
			calificacion = prompt(
				"Ingrese una calificación válida para " +
				estudiante +
				" (entre 0 y 10):"
			);
			convertir = parseFloat(calificacion);
		}

		arrayEstudiante.push(
			new Array(estudiante, parseFloat(calificacion).toFixed(2))
		);
		contador++;
	}

	if (arrayEstudiante.length > 0) {
		let listado = "<ol>";
		let promedio = 0;
		let notaMayor = 0; // Para comparar la nota más alta
		let posicion = 0;

		// Usamos for...of para una sintaxis más limpia
		let index = 0;
		for (const indice of arrayEstudiante) {
			let nombre = indice[0];
			let nota = parseFloat(indice[1]); // Convertir a número para comparar

			listado +=
				"<li><strong>Nombre:</strong> " +
				nombre +
				" - <strong>Calificación:</strong> " +
				nota.toFixed(2) +
				"</li>";

			if (nota > notaMayor) {
				notaMayor = nota;
				posicion = index;
			}
			promedio += nota; // Sumar la nota (ya es número)
			index++;
		}
		listado += "</ol>";

		promedio = (promedio / arrayEstudiante.length).toFixed(2);
		listado +=
			"<strong>Promedio de calificaciones:</strong> " + promedio + "<br>";
		listado +=
			"<strong>Estudiante con mejor calificación:</strong> " +
			arrayEstudiante[posicion][0];

		containerEstudiantes.innerHTML = listado;
	}
}