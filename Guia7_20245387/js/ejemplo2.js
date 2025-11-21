// Obteniendo la referencia de los elementos por medio de arreglos
// asociativos. Aquí se está utilizando el atributo name de cada elemento.
const formulario = document.forms["frmRegistro"];
const button = document.forms["frmRegistro"].elements["btnRegistro"];

// CREANDO MODAL CON BOOTSTRAP
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

// OBTENIENDO LA REFERENCIA DEL CUERPO DEL MODAL
// PARA IMPRIMIR EL RESULTADO
const bodyModal = document.getElementById("idBodyModal");

const validarFormulario = () => {
    let errores = [];
    let datos = {};

    // Referencias a los campos
    const nombre = formulario.elements["idNombre"];
    const apellidos = formulario.elements["idApellidos"];
    const fechaNac = formulario.elements["idFechaNac"];
    const correo = formulario.elements["idCorreo"];
    const password = formulario.elements["idPassword"];
    const passwordRepetir = formulario.elements["idPasswordRepetir"];
    const pais = formulario.elements["idCmPais"];
    const archivo = formulario.elements["idArchivo"];

    // a. Valide que los campos no estén vacíos.
    if (nombre.value.trim() === "") errores.push("El nombre es obligatorio.");
    if (apellidos.value.trim() === "") errores.push("Los apellidos son obligatorios.");
    if (fechaNac.value.trim() === "") errores.push("La fecha de nacimiento es obligatoria.");
    if (correo.value.trim() === "") errores.push("El correo electrónico es obligatorio.");
    if (password.value.trim() === "") errores.push("La contraseña es obligatoria.");
    if (passwordRepetir.value.trim() === "") errores.push("Debe repetir la contraseña.");

    // b. Valide que la fecha de nacimiento no supere la fecha actual.
    if (fechaNac.value) {
        const fechaIngresada = new Date(fechaNac.value);
        const fechaActual = new Date();
        // Ajustamos la hora para comparar solo fechas
        fechaActual.setHours(0, 0, 0, 0);
        // Ajustamos zona horaria para fecha ingresada (input date es UTC)
        // O simplemente comparamos timestamps
        if (fechaIngresada > fechaActual) {
            errores.push("La fecha de nacimiento no puede ser mayor a la fecha actual.");
        }
    }

    // c. Utilice expresiones regulares para validar el campo correo electrónico.
    const regexCorreo = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (correo.value && !regexCorreo.test(correo.value)) {
        errores.push("El formato del correo electrónico no es válido.");
    }

    // d. Valide que los campos contraseña y repetir contraseña, sean iguales.
    if (password.value && passwordRepetir.value && password.value !== passwordRepetir.value) {
        errores.push("Las contraseñas no coinciden.");
    }

    // e. Verifique que debe estar seleccionada al menos una opción para “algunos intereses”.
    const intereses = [];
    if (formulario.elements["idCkProgramacion"].checked) intereses.push("Programación");
    if (formulario.elements["idCkBD"].checked) intereses.push("Base de Datos");
    if (formulario.elements["idCkRedes"].checked) intereses.push("Inteligencia Artificial");
    if (formulario.elements["idCkSeguridad"].checked) intereses.push("Seguridad Informática");

    if (intereses.length === 0) {
        errores.push("Debe seleccionar al menos un interés.");
    }

    // f. Verifique que el usuario seleccione una carrera.
    const carrera = formulario.elements["idRdCarrera"].value;
    if (!carrera) {
        errores.push("Debe seleccionar una carrera.");
    } else {
        // Mapear el ID del radio seleccionado al texto del label correspondiente
        // Nota: formulario.elements["idRdCarrera"] devuelve un RadioNodeList.
        // Para obtener el texto, podemos buscar el input seleccionado y su label.
        // Una forma más directa dado el HTML actual:
        let carreraTexto = "";
        if(document.getElementById("idRdIng").checked) carreraTexto = "Ingeniería de Software y Negocios Digitales";
        else if(document.getElementById("idRdLic").checked) carreraTexto = "Licenciatura en Economía y Negocios";
        else if(document.getElementById("idRdTec").checked) carreraTexto = "Ingeniería de Negocios";
        else if(document.getElementById("idRdOtro").checked) carreraTexto = "Otra";
        datos["Carrera"] = carreraTexto;
    }

    // g. Verifique que sea seleccionado un país de origen.
    if (pais.value === "Seleccione una opcion" || pais.value === "") {
        errores.push("Debe seleccionar un país de origen.");
    } else {
        datos["País"] = pais.options[pais.selectedIndex].text;
    }

    // Si hay errores, mostrarlos
    if (errores.length > 0) {
        alert("Errores encontrados:\n\n" + errores.join("\n"));
        return;
    }

    // Si no hay errores, preparar datos para el modal
    datos["Nombres"] = nombre.value;
    datos["Apellidos"] = apellidos.value;
    datos["Fecha de Nacimiento"] = fechaNac.value;
    datos["Correo"] = correo.value;
    datos["Intereses"] = intereses.join(", ");
    // Avatar (nombre del archivo)
    datos["Avatar"] = archivo.files.length > 0 ? archivo.files[0].name : "No seleccionado";

    mostrarModal(datos);
};

const mostrarModal = (datos) => {
    // Limpiar contenido previo del modal
    // No usar innerHTML = "" si se quiere ser estricto, pero es la forma rápida de limpiar.
    // Usando removeChild para ser consistentes con "no innerHTML"
    while (bodyModal.firstChild) {
        bodyModal.removeChild(bodyModal.firstChild);
    }

    // Crear tabla
    const table = document.createElement("table");
    table.className = "table table-striped table-bordered"; // Usando className

    // Crear cuerpo de la tabla
    const tbody = document.createElement("tbody");

    // Iterar sobre los datos y crear filas
    for (const key in datos) {
        const tr = document.createElement("tr");

        const th = document.createElement("th");
        th.scope = "row"; // Atributo scope
        const textKey = document.createTextNode(key);
        th.appendChild(textKey);

        const td = document.createElement("td");
        const textValue = document.createTextNode(datos[key]);
        td.appendChild(textValue);

        tr.appendChild(th);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    bodyModal.appendChild(table);

    modal.show();
};

// agregando eventos al botón
button.onclick = () => {
    validarFormulario();
};
