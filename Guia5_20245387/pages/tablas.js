// Creación de la tabla utilizando concatenación de cadenas
let table = "<table>";
table += "<thead>";
table += "<tr>";
table += "<th scope='col'>#</th>";
table += "<th scope='col'>Nombre</th>";
table += "<th scope='col'>Apellido</th>";
table += "<th scope='col'>Correo electrónico</th>";
table += "</tr>";
table += "</thead>";
table += "<tbody>";

// Datos de los alumnos
const alumnos = [
	{id: 1, nombre: "Marcos Antonio", apellido: "Alas", correo: "marcos.alas@estudiante.esen.edu.sv"},
	{id: 2, nombre: "Ana Paola", apellido: "Rivas Polanco", correo: "paola.rivas@estudiante.esen.edu.sv"},
	{id: 3, nombre: "Marcos Antonio", apellido: "Alas", correo: "marcos.alas@estudiante.esen.edu.sv"},
	{id: 4, nombre: "Marcos Antonio", apellido: "Alas", correo: "marcos.alas@estudiante.esen.edu.sv"},
	{id: 5, nombre: "Marcos Antonio", apellido: "Alas", correo: "marcos.alas@estudiante.esen.edu.sv"},
]