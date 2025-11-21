// ACCEDIENDO A LA REDERENCIA DEL FORMULARIO QUE
// TENDRA LOS NUEVOS ELEMENTOS
const newForm = document.getElementById("idNewForm")

// ACCEDIENDO A LA REFERENCIA DE BOTONES
const buttonCrear = document.getElementById("idBtnCrear")
const buttonAddElemento = document.getElementById("idBtnAddElement")
const buttonValidar = document.getElementById("idBtnValidar")

// ACCEDIENDO AL VALOR SELECT PARA DETERMINAR EL TIPO DE ELEMENTO A CREAR
const cmbElemento = document.getElementById("idCmbElemento")

// ACCEDIENDO A LOS CONTROLES DEL MODAL
const tituloElemento = document.getElementById("idTituloElemento")
const nombreElemento = document.getElementById("idNombreElemento")

// CREANDO MODAL CON BOOTSTRAP
const modal = new bootstrap.Modal(document.getElementById("idModal"), {})

// AGREGANDO FUNCIONES
const verificartipoElemento = function () {
	let elemento = cmbElemento.value;

	// validar que se haya seleccionado un elemento
	if (elemento != ""){
		// método perteneciente al modal de bootstrap
		modal.show()
	} else {
		alert("Debe seleccionar el elemento que se creará")
	}
}

// FUNCIÓN PARA VALIDAR QUE EL ID NO SE REPITA
const validarIdUnico = function(idNuevo) {
	// Verificar si ya existe un elemento con ese ID en el nuevo formulario
	const elementoExistente = document.getElementById(`id${idNuevo}`);
	if (elementoExistente) {
		alert(`⚠️ ERROR: Ya existe un control con el ID "${idNuevo}".\nPor favor, elija un ID diferente.`);
		return false;
	}
	return true;
}

const newSelect = function () {
	// Validar que el ID no se repita
	if (!validarIdUnico(nombreElemento.value)) {
		return; // Salir si el ID ya existe
	}

	// Creando elementos
	let addElemento = document.createElement("select")

	// Creando atributos para el nuevo elemento
	addElemento.setAttribute("id", `id${nombreElemento.value}`)
	addElemento.setAttribute("class", "form-select")

	// Creando option para el select
	for (let i = 1; i <= 10; i++) {
		let addOption = document.createElement("option");
		addOption.value = i
		addOption.innerHTML = `Opción ${i}` // Cambia el contenido del HTML
		addElemento.appendChild(addOption) // Inserta el elemento en el nodo select
	}

	// Creando label para el nuevo control
	let labelElemento = document.createElement("label")
	labelElemento.setAttribute("for", `id${nombreElemento.value}`)
	// Creando texto para label
	labelElemento.textContent = tituloElemento.value

	// Creando label de id
	let labelId = document.createElement("span")
	labelId.textContent = `ID de control : ${nombreElemento.value}`

	// Creando plantilla de bootstrap para visualizar el nuevo elemento
	let divElemento = document.createElement("div")
	// Agregando atributos
	divElemento.setAttribute("class", "form-floating")

	// Creando el input que será hijo del div
	divElemento.appendChild(addElemento)
	// Creando el label que será hijo del div
	divElemento.appendChild(labelElemento)

	// Creando el SPAN que será hijo del nuevo formulario
	newForm.appendChild(labelId)

	// Creando el Div que será hijo dle nuevo formulario
	newForm.appendChild(divElemento);

	// Cerrar el modal después de agregar exitosamente
	modal.hide();
}

const newRadioCheckbox = function (newElemento) {
	// Validar que el ID no se repita
	if (!validarIdUnico(nombreElemento.value)) {
		return; // Salir si el ID ya existe
	}

	// Creando elementos
	let addElemento = document.createElement("input");

	// Creando atributos para el nuevo elemento
	addElemento.setAttribute("id", `id${nombreElemento.value}`);
	addElemento.setAttribute("type", newElemento);
	addElemento.setAttribute("class", "form-check-input");

	// Creando label para el nuevo control
	let labelElemento = document.createElement("label");
	labelElemento.setAttribute("class", "form-check-label");
	labelElemento.setAttribute("for", `id${nombreElemento.value}`);

	// creando texto para label
	labelElemento.textContent = tituloElemento.value;

	// Creando label de id
	let labelId = document.createElement("span");
	labelId.textContent = `ID de control : ${nombreElemento.value}`;

	// Creando plantilla de bootstrap para visualizar el nuevo elemento
	let divElemento = document.createElement("div");
	// Agregando atributos
	divElemento.setAttribute("class", "form-check");

	// Creando el input que será hijo del div
	divElemento.appendChild(addElemento);
	// Creando el label que será hijo del div
	divElemento.appendChild(labelElemento);

	// Creando el SPAN que será hijo del nuevo Formulario
	newForm.appendChild(labelId);

	// Creando el Div que será hijo del nuevo Formulario
	newForm.appendChild(divElemento);

	// Cerrar el modal después de agregar exitosamente
	modal.hide();
};

const newInput = function (newElemento) {
	// Validar que el ID no se repita
	if (!validarIdUnico(nombreElemento.value)) {
		return; // Salir si el ID ya existe
	}

	// Creando elementos de tipo = text, number, date y password
	let addElemento =
		newElemento == "textarea"
			? document.createElement("textarea")
			: document.createElement("input");

	// Creando atributos para el nuevo elemento
	addElemento.setAttribute("id", `id${nombreElemento.value}`);
	addElemento.setAttribute("type", newElemento);
	addElemento.setAttribute("class", "form-control");
	addElemento.setAttribute("placeholder", tituloElemento.value);

	// Creando label para el nuevo control
	let labelElemento = document.createElement("label");
	labelElemento.setAttribute("for", `id${nombreElemento.value}`);

	// Creando icono para el label
	let iconLabel = document.createElement("i");
	iconLabel.setAttribute("class", "bi bi-tag");

	// Creando texto para label
	labelElemento.textContent = tituloElemento.value;

	// Creando el elemento i como hijo del label, afterbegin le
	// indicamos que se creara antes de su primer hijo
	labelElemento.insertAdjacentElement("afterbegin", iconLabel);

	// Creando label de id
	let labelId = document.createElement("span");
	labelId.textContent = `ID de control: ${nombreElemento.value}`;

	// Creando plantilla de bootstrap para visualizar el nuevo elemento
	let divElemento = document.createElement("div");
	// Agregando atributos
	divElemento.setAttribute("class", "form-floating mb-3");

	// Creando el input que sera hijo del div
	divElemento.appendChild(addElemento);

	// Creando el label que sera hijo del div
	divElemento.appendChild(labelElemento);

	// Creando el SPAN que sera hijo del nuevo Formulario
	newForm.appendChild(labelId);

	// Creando el Div que sera hijo del nuevo Formulario
	newForm.appendChild(divElemento);

	// Cerrar el modal después de agregar exitosamente
	modal.hide();
};


// AGREGANDO EVENTO CLIC A LOS BOTONES
buttonCrear.onclick = () => {
	verificartipoElemento();
}

buttonAddElemento.onclick = () => {
	if (nombreElemento.value != "" && tituloElemento.value != "") {
		let elemento = cmbElemento.value

		if (elemento == "select"){
			newSelect()
		} else if (elemento == "radio" || elemento == "checkbox"){
			newRadioCheckbox(elemento)
		} else {
			newInput(elemento)
		}
	} else {
		alert("Faltan campos por completar")
	}
};

// Agregando evento para el modal de bootstrap
document.getElementById("idModal").addEventListener("show.bs.modal", () => {
	// Limpiando campos para los nuevos elementos
	tituloElemento.value = ""
	nombreElemento.value = ""
	// Inicializando puntero en el campo del título para el control
	tituloElemento.focus()
})

// FUNCIÓN PARA VALIDAR EL FORMULARIO DINÁMICO
const validarFormulario = function() {
	// Obtener todos los elementos del formulario dinámico
	const elementos = newForm.querySelectorAll('input, select, textarea');
	
	if (elementos.length === 0) {
		alert("⚠️ No hay elementos en el formulario para validar.");
		return;
	}

	let errores = [];
	let elementosValidos = 0;

	elementos.forEach((elemento) => {
		const tipo = elemento.type;
		const id = elemento.id;
		const valor = elemento.value.trim();

		// Validar según el tipo de elemento
		if (tipo === 'radio' || tipo === 'checkbox') {
			// Para radio y checkbox, verificar si está seleccionado
			if (!elemento.checked) {
				errores.push(`⚠️ El control "${id}" no está seleccionado.`);
			} else {
				elementosValidos++;
			}
		} else if (tipo === 'select-one') {
			// Para select, verificar que se haya seleccionado una opción
			if (valor === "") {
				errores.push(`⚠️ El control "${id}" no tiene una opción seleccionada.`);
			} else {
				elementosValidos++;
			}
		} else {
			// Para text, number, date, password, email, color, textarea
			if (valor === "") {
				errores.push(`⚠️ El control "${id}" está vacío.`);
			} else {
				elementosValidos++;
			}
		}
	});

	// Mostrar resultado de la validación
	if (errores.length === 0) {
		alert(`✅ ¡Validación exitosa!\n\nTodos los ${elementosValidos} controles están completos y válidos.`);
	} else {
		let mensaje = `❌ Validación fallida\n\nElementos válidos: ${elementosValidos}/${elementos.length}\n\nErrores encontrados:\n\n`;
		mensaje += errores.join("\n");
		alert(mensaje);
	}
}

// AGREGANDO EVENTO CLIC AL BOTÓN DE VALIDAR
buttonValidar.onclick = () => {
	validarFormulario();
}








