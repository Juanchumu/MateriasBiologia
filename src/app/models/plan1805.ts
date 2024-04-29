//Modelo JSON
export var Materias_1805 = {
	"DataVersion": 3,
	"Plan": "Plan 18.05, Lic. en Biologia con Orientacion en Ecología",
	"Materias" : [
		{
			"Ubicacion_en_el_array": 0,
			"Nombre": "Elementos de Matematica",
			"Numero": 10014,
			"Hecha": false,
			"Requiere": ["Ninguna"],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "I",
			"Horas_Semanales": 6,
			"Horas_Totales": 96,
			"Comision": [
				{
					"Numero": 1,
					"Dias": 
						[
						{
							"Dia": "Lunes",
							"Actividades": [
								{
									"Nombre_Activad":"Clase Practica",
									"Horario_de_inicio": 900,
									"Horario_de_finalizacion": 1200
								}
							] 
						},
						{
							"Dia": "Miercoles",
							"Actividades": [
								{
									"Nombre_Activad":"Clase Practica",
									"Horario_de_inicio": 900,
									"Horario_de_finalizacion": 1200
								}
							] 
						},
						{
							"Dia": "Viernes",
							"Actividades": [
								{
									"Nombre_Activad":"Clase Virtual",
									"Horario_de_inicio": 900,
									"Horario_de_finalizacion": 1200
								}
							] 
						},

					]
				},
				{
					"Numero": 2,
					"Dias": 
						[
						{
							"Dia": "Lunes",
							"Actividades": [
								{
									"Nombre_Activad":"Clase Practica",
									"Horario_de_inicio": 1900,
									"Horario_de_finalizacion": 2100
								}
							] 
						},
						{
							"Dia": "Miercoles",
							"Actividades": [
								{
									"Nombre_Activad":"Clase Practica",
									"Horario_de_inicio": 1900,
									"Horario_de_finalizacion": 1200
								}
							] 
						},
						{
							"Dia": "Viernes",
							"Actividades": [
								{
									"Nombre_Activad":"Clase Virtual",
									"Horario_de_inicio": 900,
									"Horario_de_finalizacion": 1200
								}
							] 
						},

					]
				}
			],
			"fin_comision": "fin"
		},
		{
			"Ubicacion_en_el_array": 1,
			"Nombre": "Ciencias de la Tierra, del Agua y de la Atmósfera",
			"Numero": 12201,
			"Hecha": false,
			"Requiere": ["Ninguna"],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "I",
			"Horas_Semanales": 6,
			"Horas_Totales": 96,
			"Comision":
				[{
				"Numero": "Unica",
				"Dias": 
					[
					{
						"Dia": "Miercoles",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Teorica",
								"Horario_de_inicio": 1200,
								"Horario_de_finalizacion": 1800
							}
						] 
					}

				]
			}],
			"fin_comision": "fin"

		},
		{
			"Ubicacion_en_el_array": 2,
			"Nombre": "Biologia General I",
			"Numero": 11084,
			"Hecha": false,
			"Requiere": ["Ninguna"],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "I",
			"Horas_Semanales": 8,
			"Horas_Totales": 128
		},
		{
			"Ubicacion_en_el_array": 3,
			"Nombre": "Elementos de Quimica",
			"Numero": 10015,
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
			"Nombre": "Álgebra",
			"Numero": 10021,
			"Hecha": false,
			"Requiere": [10014],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "II",
			"Horas_Semanales": 6,
			"Horas_Totales": 96,
			"Comision":
				[{
				"Numero": "1",
				"Dias": 
					[
					{
						"Dia": "Lunes",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Teorica",
								"Horario_de_inicio": 900,
								"Horario_de_finalizacion": 1200
							}
						] 
					},
					{
						"Dia": "Miercoles",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Practica",
								"Horario_de_inicio": 900,
								"Horario_de_finalizacion": 1200
							}
						] 
					}

				]
			},
			{
				"Numero": "2",
				"Dias": 
					[
					{
						"Dia": "Lunes",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Teorica",
								"Horario_de_inicio": 1300,
								"Horario_de_finalizacion": 1600
							}
						] 
					},
					{
						"Dia": "Miercoles",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Practica",
								"Horario_de_inicio": 1300,
								"Horario_de_finalizacion": 1600
							}
						] 
					}

				]
			},
			{
				"Numero": "10",
				"Dias": 
					[
					{
						"Dia": "Lunes",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Teorica",
								"Horario_de_inicio": 1900,
								"Horario_de_finalizacion": 2200
							}
						] 
					},
					{
						"Dia": "Miercoles",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Practica",
								"Horario_de_inicio": 1900,
								"Horario_de_finalizacion": 2200
							}
						] 
					}

				]
			}
			],
			"fin_comision": "fin"
		},
		{
			"Ubicacion_en_el_array": 5,
			"Nombre": "Biologia General II",
			"Numero": 11035,
			"Hecha": false,
			"Requiere": [11084],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "II",
			"Horas_Semanales": 8,
			"Horas_Totales": 128,
			"Comision":
				[{
				"Numero": "1",
				"Dias": 
					[
					{
						"Dia": "Lunes",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Teorica",
								"Horario_de_inicio": 950,
								"Horario_de_finalizacion": 1250
							}
						] 
					},
					{
						"Dia": "Miercoles",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Practica",
								"Horario_de_inicio": 1450,
								"Horario_de_finalizacion": 1750
							}
						] 
					},
					{
						"Dia": "Viernes",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Practica",
								"Horario_de_inicio": 1100,
								"Horario_de_finalizacion": 1300
							}
						] 
					}

				]
			},
			{
				"Numero": "6",
				"Dias": 
					[
					{
						"Dia": "Lunes",
						"Actividades": [
							{
								"Nombre_Activad":"Laboratorio",
								"Horario_de_inicio": 1500,
								"Horario_de_finalizacion": 1800
							}
						] 
					},
					{
						"Dia": "Miercoles",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Practica",
								"Horario_de_inicio": 1430,
								"Horario_de_finalizacion": 1750
							}
						] 
					},
						{
						"Dia": "Viernes",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Practica",
								"Horario_de_inicio": 1100,
								"Horario_de_finalizacion": 1300
							}
						] 
					}

				]
			}
			],
			"fin_comision": "fin"
		},
		{
			"Ubicacion_en_el_array": 6,
			"Nombre": "Quimica I",
			"Numero": 11933,
			"Hecha": false,
			"Requiere": [10015],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "II",
			"Horas_Semanales": 8,
			"Horas_Totales": 128
		},
		{
			"Ubicacion_en_el_array": 7,
			"Nombre": "Análisis Matemático I",
			"Numero": 10922,
			"Hecha": false,
			"Requiere": [10014],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "III",
			"Horas_Semanales": 8,
			"Horas_Totales": 128
		},
		{
			"Ubicacion_en_el_array": 8,
			"Nombre": "Ética",
			"Numero": 31002,
			"Hecha": false,
			"Requiere": ["Ninguna"],
			"Disponible": false,
			"Cuatrimestre": "Ambos",
			"Cuatrimestre_Perteneciente": "III",
			"Horas_Semanales": 4,
			"Horas_Totales": 64
		},
		{
			"Ubicacion_en_el_array": 9,
			"Nombre": "Biología de protistos, hongos y briofitas",
			"Numero": 11037,
			"Hecha": false,
			"Requiere": [11035],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "III",
			"Horas_Semanales": 6,
			"Horas_Totales": 96
		},
		{
			"Ubicacion_en_el_array": 10,
			"Nombre": "Química II (Anual)",
			"Numero": 11910,
			"Hecha": false,
			"Requiere": [11933],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "III",
			"Horas_Semanales": 4,
			"Horas_Totales": 64,
			"Comision":
				[{
				"Numero": "Unica",
				"Dias": 
					[
					{
						"Dia": "Viernes",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Teorica/Practica",
								"Horario_de_inicio": 1300,
								"Horario_de_finalizacion": 1750
							}
						] 
					}

				]
			}],
			"fin_comision": "fin"
		},
		{
			"Ubicacion_en_el_array": 11,
			"Nombre": "Biología Animal I (Invertebrados parte I)",
			"Numero": 11107,
			"Hecha": false,
			"Requiere": [11035],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "IV",
			"Horas_Semanales": 6,
			"Horas_Totales": 96,
			"Comision":
				[{
				"Numero": "Unica",
				"Dias": 
					[
					{
						"Dia": "Lunes",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Teorica",
								"Horario_de_inicio": 900,
								"Horario_de_finalizacion": 1200
							}
						] 
					},
					{
						"Dia": "Miercoles",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Practica",
								"Horario_de_inicio": 1350,
								"Horario_de_finalizacion": 1650
							}
						] 
					}

				]
			}],
			"fin_comision": "fin"

		},
		{
			"Ubicacion_en_el_array": 12,
			"Nombre": "Estadística I",
			"Numero": 11974,
			"Hecha": false,
			"Requiere": [10014],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "IV",
			"Horas_Semanales": 6,
			"Horas_Totales": 96,
			"Comision":
				[{
				"Numero": "Unica",
				"Dias": 
					[
					{
						"Dia": "Miercoles",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Teorica",
								"Horario_de_inicio": 900,
								"Horario_de_finalizacion": 1200
							}
						] 
					},
					{
						"Dia": "Viernes",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Practica",
								"Horario_de_inicio": 900,
								"Horario_de_finalizacion": 1200
							}
						] 
					}

				]
			}],
			"fin_comision": "fin"
		},
		{
			"Ubicacion_en_el_array": 13,
			"Nombre": "Genética",
			"Numero": 11202,
			"Hecha": false,
			"Requiere": [11035],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "IV",
			"Horas_Semanales": 8,
			"Horas_Totales": 128,
			"Comision":
				[{
				"Numero": "Unica",
				"Dias": 
					[
					{
						"Dia": "Martes",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Teorica",
								"Horario_de_inicio": 1400,
								"Horario_de_finalizacion": 1700
							}
						] 
					},
					{
						"Dia": "Martes",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Practica",
								"Horario_de_inicio": 1700,
								"Horario_de_finalizacion": 2000
							}
						] 
					}

				]
			}],
			"fin_comision": "fin"
		},
		{
			"Ubicacion_en_el_array": 14,
			"Nombre": "Química II (Anual) -Continuacion-",
			"Numero": 11916,
			"Hecha": false,
			"Requiere": [11910],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "IV",
			"Horas_Semanales": 4,
			"Horas_Totales": 64,
			"Comision":
				[{
				"Numero": "Unica",
				"Dias": 
					[
					{
						"Dia": "Viernes",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Teorica",
								"Horario_de_inicio": 1300,
								"Horario_de_finalizacion": 1750
							}
						] 
					}

				]
			}],
			"fin_comision": "fin"

		},
		{
			"Ubicacion_en_el_array": 15,
			"Nombre": "Competencias en Informática (19054)",
			"Numero": 19054,
			"Hecha": false,
			"Requiere": ["Ninguna"],
			"Disponible": false,
			"Cuatrimestre": "Ambos",
			"Cuatrimestre_Perteneciente": "IV",
			"Horas_Semanales": 6,
			"Horas_Totales": 96
		},
		{
			"Ubicacion_en_el_array": 16,
			"Nombre": "Competencias de Idioma Inglés (39541)",
			"Numero": 39541,
			"Hecha": false,
			"Requiere": ["Ninguna"],
			"Disponible": false,
			"Cuatrimestre": "Ambos",
			"Cuatrimestre_Perteneciente": "IV",
			"Horas_Semanales": 6,
			"Horas_Totales": 96,
			"Comision": [
				{
					"Numero": 1,
					"Dias": 
						[
						{
							"Dia": "Lunes",
							"Actividades": [
								{
									"Nombre_Activad":"Clase Practica",
									"Horario_de_inicio": 800,
									"Horario_de_finalizacion": 1200
								}
							] 
						}]
				},
				{
					"Numero": 6,
					"Dias":
						[
						{
							"Dia": "Lunes",
							"Actividades": [
								{
									"Nombre_Activad":"Clase Practica",
									"Horario_de_inicio": 1300,
									"Horario_de_finalizacion": 1700
								}
							] 
						}]
				},
				{
					"Numero": 10,
					"Dias":
						[
						{
							"Dia": "Jueves",
							"Actividades": [
								{
									"Nombre_Activad":"Clase Practica",
									"Horario_de_inicio": 1700,
									"Horario_de_finalizacion": 2100
								}
							] 
						},

					]
				},
				{
					"Numero": 2,
					"Dias": 
						[
						{
							"Dia": "Lunes",
							"Actividades": [
								{
									"Nombre_Activad":"Clase Practica",
									"Horario_de_inicio": 1900,
									"Horario_de_finalizacion": 2100
								}
							] 
						},
						{
							"Dia": "Miercoles",
							"Actividades": [
								{
									"Nombre_Activad":"Clase Practica",
									"Horario_de_inicio": 1900,
									"Horario_de_finalizacion": 1200
								}
							] 
						},
						{
							"Dia": "Viernes",
							"Actividades": [
								{
									"Nombre_Activad":"Clase Virtual",
									"Horario_de_inicio": 900,
									"Horario_de_finalizacion": 1200
								}
							] 
						},

					]
				}
			],
			"fin_comision": "fin"
		},
		{
			"Ubicacion_en_el_array": 17,
			"Nombre": "Botánica I",
			"Numero": 11038,
			"Hecha": false,
			"Requiere": [19054,39541, 11035],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "V",
			"Horas_Semanales": 6,
			"Horas_Totales": 96
		},
		{
			"Ubicacion_en_el_array": 18,
			"Nombre": "Estadística II",
			"Numero": 11975,
			"Hecha": false,
			"Requiere": [19054,39541,11974],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "V",
			"Horas_Semanales": 6,
			"Horas_Totales": 96
		},
		{
			"Ubicacion_en_el_array": 19,
			"Nombre": "Biología Animal II (Vertebrados parte I)",
			"Numero": 11108,
			"Hecha": false,
			"Requiere": [19054,39541,11035],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "V",
			"Horas_Semanales": 6,
			"Horas_Totales": 96
		},
		{
			"Ubicacion_en_el_array": 20,
			"Nombre": "Química III",
			"Numero": 11963,
			"Hecha": false,
			"Requiere": [19054,39541,11916],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "V",
			"Horas_Semanales": 8,
			"Horas_Totales": 128
		},
		{
			"Ubicacion_en_el_array": 21,
			"Nombre": "Biofisica I",
			"Numero": 11918,
			"Hecha": false,
			"Requiere": [19054,39541,10922, 10021],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "VI",
			"Horas_Semanales": 8,
			"Horas_Totales": 128,
			"Comision":
				[{
				"Numero": "Unica",
				"Dias": 
					[
					{
						"Dia": "Lunes",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Teorica",
								"Horario_de_inicio": 1300,
								"Horario_de_finalizacion": 1600
							}
						] 
					},
					{
						"Dia": "Jueves",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Teorica",
								"Horario_de_inicio": 900,
								"Horario_de_finalizacion": 1200
							}
						] 
					}

				]
			}],
			"fin_comision": "fin"

		},
		{
			"Ubicacion_en_el_array": 22,
			"Nombre": "Microbiología General",
			"Numero": 18907,
			"Hecha": false,
			"Requiere": [19054,39541,11963, 11037],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "VI",
			"Horas_Semanales": 8,
			"Horas_Totales": 128,
			"Comision":
				[{
				"Numero": "Unica",
				"Dias": 
					[
					{
						"Dia": "Martes",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Teorica",
								"Horario_de_inicio": 900,
								"Horario_de_finalizacion": 1300
							}
						] 
					},
					{
						"Dia": "Jueves",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Teorica",
								"Horario_de_inicio": 1200,
								"Horario_de_finalizacion": 1600
							}
						] 
					}

				]
			}],
			"fin_comision": "fin"
		},
		{
			"Ubicacion_en_el_array": 23,
			"Nombre": "Ecología I",
			"Numero": 11208,
			"Hecha": false,
			"Requiere": [19054,39541,11035, 12201],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "VI",
			"Horas_Semanales": 6,
			"Horas_Totales": 96
		},
		{
			"Ubicacion_en_el_array": 24,
			"Nombre": "Metodología de la Investigación",
			"Numero": 23001,
			"Hecha": false,
			"Requiere": [19054,39541,11975],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "VI",
			"Horas_Semanales": 4,
			"Horas_Totales": 64,
			"Comision":
				[{
				"Numero": "Unica",
				"Dias": 
					[
					{
						"Dia": "Jueves",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Teorica",
								"Horario_de_inicio": 1700,
								"Horario_de_finalizacion": 2100
							}
						] 
					}
				]
			}],
		},
		{
			"Ubicacion_en_el_array": 25,
			"Nombre": "Evolución",
			"Numero": 11241,
			"Hecha": false,
			"Requiere": [19054,39541,11202, 11208, 11037, 11108, 11107],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "VII",
			"Horas_Semanales": 8,
			"Horas_Totales": 128
		},
		{
			"Ubicacion_en_el_array": 26,
			"Nombre": "Biofisica II",
			"Numero": 11919,
			"Hecha": false,
			"Requiere": [19054,39541,11918],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "VII",
			"Horas_Semanales": 6,
			"Horas_Totales": 96
		},
		{
			"Ubicacion_en_el_array": 27,
			"Nombre": "Biología Celular y Molecular I",
			"Numero": 11043,
			"Hecha": false,
			"Requiere": [19054,39541,11963, 11202],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "VII",
			"Horas_Semanales": 8,
			"Horas_Totales": 128
		},
		{
			"Ubicacion_en_el_array": 28,
			"Nombre": "Fisiología Vegetal",
			"Numero": 12080,
			"Hecha": false,
			"Requiere": [19054,39541,11963, 11208, 11038],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "IX",
			"Horas_Semanales": 7,
			"Horas_Totales": 112
		},
		{
			"Ubicacion_en_el_array": 29,
			"Nombre": "Botánica II",
			"Numero": 11039,
			"Hecha": false,
			"Requiere": [19054,39541,11038],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "VIII",
			"Horas_Semanales": 6,
			"Horas_Totales": 96,
			"Comision":
				[{
				"Numero": "Unica",
				"Dias": 
					[
					{
						"Dia": "Martes",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Teorica",
								"Horario_de_inicio": 1400,
								"Horario_de_finalizacion": 1700
							}
						] 
					},
					{
						"Dia": "Martes",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Practica",
								"Horario_de_inicio": 1700,
								"Horario_de_finalizacion": 2000
							}
						] 
					}

				]
			}],
			"fin_comision": "fin"
		},
		{
			"Ubicacion_en_el_array": 30,
			"Nombre": "Biología Computacional",
			"Numero": 11945,
			"Hecha": false,
			"Requiere": [19054,39541,11974, 10922],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "VIII",
			"Horas_Semanales": 4,
			"Horas_Totales": 64,
			"Comision":
				[{
				"Numero": "Unica",
				"Dias": 
					[
					{
						"Dia": "Lunes",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Teorica",
								"Horario_de_inicio": 1400,
								"Horario_de_finalizacion": 1800
							}
						] 
					}

				]
			}],
			"fin_comision": "fin"
		},
		{
			"Ubicacion_en_el_array": 31,
			"Nombre": "Instrumentación Biológica",
			"Numero": 11040,
			"Hecha": false,
			"Requiere": [19054,39541,11963, 11208, 11974],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "VIII",
			"Horas_Semanales": 4,
			"Horas_Totales": 64,
			"Comision":
				[{
				"Numero": "Unica",
				"Dias": 
					[
					{
						"Dia": "Lunes",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Teorica",
								"Horario_de_inicio": 1200,
								"Horario_de_finalizacion": 1400
							}
						] 
					},
					{
						"Dia": "Miercoles",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Practica",
								"Horario_de_inicio": 1200,
								"Horario_de_finalizacion": 1400
							}
						] 
					}

				]
			}],
			"fin_comision": "fin"
		},
		{
			"Ubicacion_en_el_array": 32,
			"Nombre": "Fisiología Animal",
			"Numero": 10203,
			"Hecha": false,
			"Requiere": [19054,39541,11107, 11108, 11919, 11963],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "VIII",
			"Horas_Semanales": 8,
			"Horas_Totales": 128,
			"Comision":
				[{
				"Numero": "Unica",
				"Dias": 
					[
					{
						"Dia": "Lunes",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Teorica",
								"Horario_de_inicio": 1000,
								"Horario_de_finalizacion": 1200
							}
						] 
					},
					{
						"Dia": "Jueves",
						"Actividades": [
							{
								"Nombre_Activad":"Laboratorio",
								"Horario_de_inicio": 1300,
								"Horario_de_finalizacion": 1700
							},
							{
								"Nombre_Activad": "Clase Practica",
								"Horario_de_inicio": 1000,
								"Horario_de_finalizacion": 1200
							}
						] 
					}

				]
			}],
			"fin_comision": "fin"
		},
		{
			"Ubicacion_en_el_array": 33,
			"Nombre": "Biología Animal III (Invertebrados parte II)",
			"Numero": 11109,
			"Hecha": false,
			"Requiere": [19054,39541,11107],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "IX",
			"Horas_Semanales": 6,
			"Horas_Totales": 96
		},
		{
			"Ubicacion_en_el_array": 34,
			"Nombre": "Biología Animal IV (Vertebrados parte II)",
			"Numero": 11110,
			"Hecha": false,
			"Requiere": [19054,39541,11108],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "IX",
			"Horas_Semanales": 6,
			"Horas_Totales": 96
		},
		{
			"Ubicacion_en_el_array": 35,
			"Nombre": "Ecología II",
			"Numero": 11209,
			"Hecha": false,
			"Requiere": [19054,39541,11208,11974],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "IX",
			"Horas_Semanales": 8,
			"Horas_Totales": 128
		},
		{
			"Ubicacion_en_el_array": 36,
			"Nombre": "Gestión y Legislación Ambiental",
			"Numero": 22959,
			"Hecha": false,
			"Requiere": [19054,39541,11208],
			"Disponible": false,
			"Cuatrimestre": "Primero",
			"Cuatrimestre_Perteneciente": "IX",
			"Horas_Semanales": 6,
			"Horas_Totales": 96
		},
		{
			"Ubicacion_en_el_array": 37,
			"Nombre": "Ecología Aplicada a la Conservación y Manejo de Sistemas Ecológicos",
			"Numero": 11948,
			"Hecha": false,
			"Requiere": [19054,39541,11209],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "X",
			"Horas_Semanales": 6,
			"Horas_Totales": 96,
			"Comision":
				[{
				"Numero": "Unica",
				"Dias": 
					[
					{
						"Dia": "Martes",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Teorica",
								"Horario_de_inicio": 1500,
								"Horario_de_finalizacion": 1800
							}
						] 
					},
					{
						"Dia": "Jueves",
						"Actividades": [
							{
								"Nombre_Activad":"Clase Practica",
								"Horario_de_inicio": 1500,
								"Horario_de_finalizacion": 1800
							}
						] 
					}

				]
			}],
			"fin_comision": "fin"
		},
		{
			"Ubicacion_en_el_array": 38,
			"Nombre": "Ecología III",
			"Numero": 11210,
			"Hecha": false,
			"Requiere": [19054,39541,11208],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "X",
			"Horas_Semanales": 8,
			"Horas_Totales": 128,
			"Comision":
				[{
				"Numero": "Unica",
				"Dias": 
					[
					{
						"Dia": "Martes",
						"Actividades": [
							{
								"Nombre_Activad":"Clase",
								"Horario_de_inicio": 900,
								"Horario_de_finalizacion": 1300
							}
						] 
					},
					{
						"Dia": "Jueves",
						"Actividades": [
							{
								"Nombre_Activad":"Clase",
								"Horario_de_inicio": 900,
								"Horario_de_finalizacion": 1300
							}
						] 
					}

				]
			}],
			"fin_comision": "fin"
		},
		{
			"Ubicacion_en_el_array": 39,
			"Nombre": "Ecotoxicología",
			"Numero": 12042,
			"Hecha": false,
			"Requiere": [19054,39541,11963, 11208],
			"Disponible": false,
			"Cuatrimestre": "Segundo",
			"Cuatrimestre_Perteneciente": "IX",
			"Horas_Semanales": 6,
			"Horas_Totales": 96,
			"Comision":
				[{
				"Numero": "Unica",
				"Dias": 
					[
					{
						"Dia": "Lunes",
						"Actividades": [
							{
								"Nombre_Activad":"Laboratorio",
								"Horario_de_inicio": 1250,
								"Horario_de_finalizacion": 1850
							}
						] 
					}

				]
			}],
			"fin_comision": "fin"
		},
		{
			"Ubicacion_en_el_array": 40,
			"Nombre": "Ciclo de Actividades Optativas",
			"Numero": 10217,
			"Hecha": false,
			"Requiere": [10014, 12201, 11084, 10015, 10021, 11035, 11933, 10922, 31002, 11037, 11910, 11107, 11974, 11202, 11916, 19054, 39541, 11038, 11975, 11108, 11963, 11918, 18907, 11208],
			"Disponible": false,
			"Cuatrimestre": "Ambos",
			"Cuatrimestre_Perteneciente": "XI",
			"Horas_Semanales": "Freelance",
			"Horas_Totales": 96
		},
		{
			"Ubicacion_en_el_array": 41,
			"Nombre": "Tesis de Grado",
			"Numero": 11213,
			"Hecha": false,
			"Requiere": [10217, 23001, 11241, 11919, 11043, 12080, 11039, 11945, 11040, 10203, 11109, 11110, 11209, 22959, 11948, 11210],
			"Disponible": false,
			"Cuatrimestre": "Ambos",
			"Cuatrimestre_Perteneciente": "XI",
			"Horas_Semanales": "Freelance",
			"Horas_Totales": 320
		}
	]
};
