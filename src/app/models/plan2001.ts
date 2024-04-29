
//Modelo JSON
export var Materias_2001 = {
	"Plan": "Plan 20.01, Analista Universitario en Ciencias de Datos",
	"Materias" : [
		{
			"Ubicacion_en_el_array": 0,
			"Nombre": "Competencias Básicas en Informática",
			"Numero": 19054,
			"Hecha": false,
			"Requiere": ["Ninguna"],
			"Disponible": false,
			"Cuatrimestre": "Raya",
			"Cuatrimestre_Perteneciente": "Raya",
			"Horas_Semanales": "raya",
			"Horas_Totales": "raya",
			"Comision": [
				{
					"Numero": 6,
					"Dias": 
						[
						{
							"Dia": "Miercoles",
							"Actividades": [
								{
									"Nombre_Activad":"Clase Practica",
									"Horario_de_inicio": 1600,
									"Horario_de_finalizacion": 1900
								}
							] 
						}]
				},
				{
					"Numero": 10,
					"Dias": 
						[
						{
							"Dia": "Viernes",
							"Actividades": [
								{
									"Nombre_Activad":"Clase Practica",
									"Horario_de_inicio": 900,
									"Horario_de_finalizacion": 1200
								}
							] 
						}]
				},
			],
			"fin_comision": "fin"
		},
		{
			"Ubicacion_en_el_array": 1,
			"Nombre": "Competencias Básicas en Idioma Inglés (equivalente a niveles I y II)",
			"Numero": 39553,
			"Hecha": false,
			"Requiere": ["Ninguna"],
			"Disponible": false,
			"Cuatrimestre": "Raya",
			"Cuatrimestre_Perteneciente": "Raya",
			"Horas_Semanales": "Raya",
			"Horas_Totales": "Raya"
		},
		{
			"Ubicacion_en_el_array": 2,
			"Nombre": "Introducción a la Programación",
			"Numero": 11271,
			"Hecha": false,
			"Requiere": ["Ninguna"],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "I",
			"Horas_Semanales": 6,
			"Horas_Totales": 96
		},
		{
			"Ubicacion_en_el_array": 3,
			"Nombre": "Organización de la Información",
			"Numero": 11280,
			"Hecha": false,
			"Requiere": ["Ninguna"],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "I",
			"Horas_Semanales": 4,
			"Horas_Totales": 64
		},
		{
			"Ubicacion_en_el_array": 4,
			"Nombre": "Matemática Básica",
			"Numero": 13014,
			"Hecha": false,
			"Requiere": ["Ninguna"],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "I",
			"Horas_Semanales": 6,
			"Horas_Totales": 96
		},
		{
			"Ubicacion_en_el_array": 5,
			"Nombre": "Introducción a las Ciencias de Datos",
			"Numero": 11281,
			"Hecha": false,
			"Requiere": [11280,11271],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "II",
			"Horas_Semanales": 6,
			"Horas_Totales": 96
		},
		{
			"Ubicacion_en_el_array": 6,
			"Nombre": "Programación Estructurada",
			"Numero": 11274,
			"Hecha": false,
			"Requiere": [11271],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "II",
			"Horas_Semanales": 6,
			"Horas_Totales": 96
		},
		{
			"Ubicacion_en_el_array": 7,
			"Nombre": "Análisis Matemático I",
			"Numero": 13022,
			"Hecha": false,
			"Requiere": [13014],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "II",
			"Horas_Semanales": 8,
			"Horas_Totales": 128
		},
		{
			"Ubicacion_en_el_array": 8,
			"Nombre": "Álgebra Lineal y Geometría",
			"Numero": 13021,
			"Hecha": false,
			"Requiere": [13014],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "II",
			"Horas_Semanales": 6,
			"Horas_Totales": 96
		},
		{
			"Ubicacion_en_el_array": 9,
			"Nombre": "Laboratorio de Ciencias de Datos",
			"Numero": 11282,
			"Hecha": false,
			"Requiere": [11281],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "III",
			"Horas_Semanales": 6,
			"Horas_Totales": 96
		},
		{
			"Ubicacion_en_el_array": 10,
			"Nombre": "Estructuras de Datos y Algoritmos I",
			"Numero": 11275,
			"Hecha": false,
			"Requiere": [11274],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "III",
			"Horas_Semanales": 4,
			"Horas_Totales": 64
		},
		{
			"Ubicacion_en_el_array": 11,
			"Nombre": "Estadística y Probabilidad",
			"Numero": 11083,
			"Hecha": false,
			"Requiere": [13022],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "III",
			"Horas_Semanales": 6,
			"Horas_Totales": 96
		},
		{
			"Ubicacion_en_el_array": 12,
			"Nombre": "Aprendizaje Automático",
			"Numero": 11231,
			"Hecha": false,
			"Requiere": [11282],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "IV",
			"Horas_Semanales": 6,
			"Horas_Totales": 96
		},
		{
			"Ubicacion_en_el_array": 13,
			"Nombre": "Programación Orientada a Objetos",
			"Numero": 11276,
			"Hecha": false,
			"Requiere": [11282],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "IV",
			"Horas_Semanales": 4,
			"Horas_Totales": 64
		},
		{
			"Ubicacion_en_el_array": 14,
			"Nombre": "Organización de Computadoras",
			"Numero": 41407,
			"Hecha": false,
			"Requiere": [11281],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "IV",
			"Horas_Semanales": 4,
			"Horas_Totales": 64
		},
		{
			"Ubicacion_en_el_array": 15,
			"Nombre": "Bases de Datos Relacionales",
			"Numero": 11277,
			"Hecha": false,
			"Requiere": [11274],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "IV",
			"Horas_Semanales": 6,
			"Horas_Totales": 96
		},
		{
			"Ubicacion_en_el_array": 16,
			"Nombre": "Gestión de Soluciones Innovadoras",
			"Numero": 1000,
			"Hecha": false,
			"Requiere": [11283,11277],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "V",
			"Horas_Semanales": 3,
			"Horas_Totales": 48
		},
		{
			"Ubicacion_en_el_array": 17,
			"Nombre": "Bases de Datos Distribuidas",
			"Numero": 11278,
			"Hecha": false,
			"Requiere": [11277],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "V",
			"Horas_Semanales": 6,
			"Horas_Totales": 96
		},
		{
			"Ubicacion_en_el_array": 18,
			"Nombre": "Proyecto Integrador de Ciencias de Datos",
			"Numero": 11285,
			"Hecha": false,
			"Requiere": [11283,11277],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "V",
			"Horas_Semanales": 6,
			"Horas_Totales": 96
		},
	]
};
