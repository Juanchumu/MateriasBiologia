import { Component, OnInit } from '@angular/core';
//Importar el JSON de las material de los planes:
import { Materias_1804 } from "../../models/plan1804";
import { Materias_1804_Mol } from "../../models/plan1804mol";
import { Materias_1805 } from "../../models/plan1805";
import { Materias_1805_Mol } from "../../models/plan1805mol";

import { Materias_4803 } from "../../models/plan4803";
import { Materias_4802 } from "../../models/plan4802";

import { Plan_Config } from "../../models/planconfig";

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {
  public PlanConfig: any;
  public Plan: any;
  public Array_Materias_Disponibles: any;
  public Array_De_Materias_Aprobadas: any;
  public Materias_Disponibles_Primer_Cuatrimestre: any;
  public Materias_Disponibles_Segundo_Cuatrimestre: any;
  public Porcentaje_Materias_Aprobadas: number;
  public Suma_de_Horas_en_todas_las_Materias: number;
  public Mostrar_Materias: any;


  constructor() {
    //Lectura de Plan
    this.PlanConfig = Plan_Config;

    if (this.PlanConfig.Plan == "18.04") {
      if (this.PlanConfig.Orientacion == "Ecología") {
        this.Plan = Materias_1804;
      }else{
        this.Plan = Materias_1804_Mol;
      }
    }
    if (this.PlanConfig.Plan == "18.05") {
      if (this.PlanConfig.Orientacion == "Ecología") {
        this.Plan = Materias_1805;
      }else{
        this.Plan = Materias_1805_Mol;
      }
    }
    if (this.PlanConfig.Plan == "48.03") {
      this.Plan = Materias_4803;
    }
    if (this.PlanConfig.Plan == "48.02") {
      this.Plan = Materias_4802;
    }
    if (this.PlanConfig.Plan == "") {
      alert("No has seleccionado ningun plan");
    }

    this.Array_Materias_Disponibles = [];
    this.Array_De_Materias_Aprobadas = [];
    this.Materias_Disponibles_Primer_Cuatrimestre = [];
    this.Materias_Disponibles_Segundo_Cuatrimestre = [];
    this.Porcentaje_Materias_Aprobadas = 0;
    this.Suma_de_Horas_en_todas_las_Materias = 0;
    this.Mostrar_Materias = {
      "Mostrar": false

    };

  }
  Mostrar_Materias_Disponibles(){
    this.Mostrar_Materias.Mostrar = true;
    //vaciar los arrays para una futura invocacion de la funcion
    this.Array_Materias_Disponibles = [];
    this.Array_De_Materias_Aprobadas = [];
    this.Materias_Disponibles_Primer_Cuatrimestre = [];
    this.Materias_Disponibles_Segundo_Cuatrimestre = [];
    this.Porcentaje_Materias_Aprobadas = 0;
    this.Suma_de_Horas_en_todas_las_Materias = 0;


    //Meter los numeros de las materias aprobadas dentro de un array
    for (let index = 0; index < this.Plan.Materias.length; index++) {
      if (this.Plan.Materias[index].Hecha == true) {
        this.Array_De_Materias_Aprobadas.push(this.Plan.Materias[index].Numero);
        this.Suma_de_Horas_en_todas_las_Materias = this.Suma_de_Horas_en_todas_las_Materias + this.Plan.Materias[index].Horas_Totales
      }
    }
    this.Porcentaje_Materias_Aprobadas = (this.Array_De_Materias_Aprobadas.length / this.Plan.Materias.length) * 100;
    //recorer el array de las materias del plan
    for (let materia = 0; materia < this.Plan.Materias.length; materia++) {

      //si la materia no esta aprobada
      if (this.Plan.Materias[materia].Hecha == false) {
        //se pregunta si la materia cumple con los requisitos para estar disponible
        //si el requisito es 1 sola:
        if (this.Plan.Materias[materia].Requiere.length == 1){
          //si la materia requisito esta dentro del array de materias aprobadas
          // o si la materia requisito es "ninguna" , entonces esta disponible
          if(this.Array_De_Materias_Aprobadas.indexOf( this.Plan.Materias[materia].Requiere[0]) >= 0 || this.Plan.Materias[materia].Requiere[0] == "Ninguna" ) {
            //meter la el nombre y el cuatrimestre de la materia dentro del array de disponibles y del array del cuatri respectivo
            this.Materia_Disponible(this.Plan.Materias[materia].Nombre , this.Plan.Materias[materia].Cuatrimestre);
          }
        }
        //si el requisito son 2 o mas:
        else{
          //se recorre el array de las materias requisitos
          let contador = 0;
          for (let requisito = 0; requisito < this.Plan.Materias[materia].Requiere.length; requisito++) {
            //si la materia requisito esta dentro del array de materias aprobadas
            if (this.Array_De_Materias_Aprobadas.indexOf( this.Plan.Materias[materia].Requiere[requisito]) >=0  ) {
              //se suma la materia aprobada requisito
              contador = contador + 1;
              //si todas las materias requisito estan aprobadas
              if(contador == this.Plan.Materias[materia].Requiere.length){
                //meter la el nombre y el cuatrimestre de la materia dentro del array de disponibles y del array del cuatri respectivo
                this.Materia_Disponible(this.Plan.Materias[materia].Nombre , this.Plan.Materias[materia].Cuatrimestre);
              }
            }

          }


        }

      }

    }

  }

  ngOnInit(): void {
  }
  Materia_Disponible(materia, cuatrimestre){
    this.Array_Materias_Disponibles.push(materia);
    if (cuatrimestre == "Primero") {
      this.Materias_Disponibles_Primer_Cuatrimestre.push(materia);
    }
    if (cuatrimestre == "Segundo") {
        this.Materias_Disponibles_Segundo_Cuatrimestre.push(materia);
      }
    if (cuatrimestre == "Ambos") {
      this.Materias_Disponibles_Primer_Cuatrimestre.push(materia);
      this.Materias_Disponibles_Segundo_Cuatrimestre.push(materia);
    }
  }

}
