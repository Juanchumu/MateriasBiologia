import { Component, OnInit } from '@angular/core';
import { Materias_1804 } from "../../models/plan1804";
import { Materias_1804_Mol } from "../../models/plan1804mol";
import { Materias_1805 } from "../../models/plan1805";
import { Materias_1805_Mol } from "../../models/plan1805mol";
import { Materias_4803 } from "../../models/plan4803";
import { Materias_4802 } from "../../models/plan4802";

import { Plan_Config } from "../../models/planconfig";


import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-materias-form',
  templateUrl: './materias-form.component.html',
  styleUrls: ['./materias-form.component.css']
})
export class MateriasFormComponent implements OnInit {
  public Materias;
  public Array_De_Materias_Aprobadas: any;
  public Configuraciones: any;
  public PlanConfig: any;
  //Variables para las classes locales
  public Class_Elegir_Plan: string;
  public Class_Elegir_Orientacion: string;
  //variable para EasterEgg tesis
  public Tesis: number;
  public egg: boolean;
  constructor(private platform: Platform) {
    //Responsive Web Desing
    //Codigo Para detectar y Modificar los Atributos de la Pagina
    if (this.platform.ANDROID) {
      this.Class_Elegir_Plan ="Elegir_Plan_Android";
      this.Class_Elegir_Orientacion ="Elegir_Orientacion_Android";
    }else{
      this.Class_Elegir_Plan ="Elegir_Plan";
      this.Class_Elegir_Orientacion ="Elegir_Orientacion";
    }
    //Contiua con el componente
      this.Configuraciones =
      {
        "Plan" : "1",
        "Elegir_Orientacion": false,
        "Orientacion": "",
        "Desplegar_Plan": false
      };
      this.PlanConfig = Plan_Config;
   }

    Empezar(){
      this.Configuraciones.Plan = "";
    }
    Elegir_Plan(string){
        this.Configuraciones.Plan = string;
        if (string == "18.04" ||string == "18.05" ||string == "Mixto") {
          this.Configuraciones.Elegir_Orientacion = true;
        }else{
          this.Desplegar_Form();
        }

      }
     Elegir_Orientacion(orienta){
       if (orienta == "Eco") {
         this.Configuraciones.Orientacion = "Ecologia";
         this.Configuraciones.Elegir_Orientacion = false;
         this.Desplegar_Form();
       }else{
         this.Configuraciones.Orientacion = "Molecular";
         this.Configuraciones.Elegir_Orientacion = false;
         this.Desplegar_Form();
       }
     }
     Desplegar_Form(){
       if (this.Configuraciones.Plan == "18.04") {
         this.Tesis = 38;
         if (this.Configuraciones.Orientacion == "Ecologia") {
           this.Materias = Materias_1804;
           this.PlanConfig.Plan = "18.04";
           this.PlanConfig.Orientacion = "Ecología";
           this.Configuraciones.Desplegar_Plan = true;
           this.Mostrar_o_Ocultar();
         }else{
           this.Materias = Materias_1804_Mol;
           this.PlanConfig.Plan = "18.04";
           this.PlanConfig.Orientacion = "Molecular";
           this.Configuraciones.Desplegar_Plan = true;
           this.Mostrar_o_Ocultar();
         }
       }
       if (this.Configuraciones.Plan == "18.05") {
          this.Tesis = 41;
         if (this.Configuraciones.Orientacion == "Ecologia") {
           this.Materias = Materias_1805;
           this.PlanConfig.Plan = "18.05";
           this.PlanConfig.Orientacion = "Ecología";
           this.Configuraciones.Desplegar_Plan = true;

           this.Mostrar_o_Ocultar();
         }else{
           this.Materias = Materias_1805_Mol;
           this.PlanConfig.Plan = "18.05";
           this.PlanConfig.Orientacion = "Molecular";
           this.Configuraciones.Desplegar_Plan = true;
           this.Mostrar_o_Ocultar();
         }
       }
       if (this.Configuraciones.Plan == "Mixto") {
         if (this.Configuraciones.Orientacion == "Ecologia") {
           this.Materias = Materias_1804;
           this.PlanConfig.Plan = "18.04";
           this.PlanConfig.Orientacion = "Ecología";
           this.Configuraciones.Desplegar_Plan = true;
            this.Mostrar_o_Ocultar();
         }else{
           this.Materias = Materias_1804;
           this.Configuraciones.Desplegar_Plan = true;
           this.Mostrar_o_Ocultar();
         }
       }
       if (this.Configuraciones.Plan == "48.03") {
           this.Materias = Materias_4803;
           this.PlanConfig.Plan = "48.03";
           this.Configuraciones.Desplegar_Plan = true;
           this.Mostrar_o_Ocultar();
       }
       if (this.Configuraciones.Plan == "48.02") {
           this.Materias = Materias_4802;
           this.PlanConfig.Plan = "48.02";
           this.Configuraciones.Desplegar_Plan = true;
           this.Mostrar_o_Ocultar();
       }
     }

     //Una vez desplegado el Formulario, se debe Recalcular cada materia mostrar
     evento_check(number, booleano){
       this.Materias.Materias[number].Hecha = booleano;
       console.log(this.Array_De_Materias_Aprobadas);

       //Recalcular materias a mostrar (3 veces sirve para las materias desmarcadas)
         this.Mostrar_o_Ocultar();
         this.Mostrar_o_Ocultar();
         this.Mostrar_o_Ocultar();
        if (this.Materias.Materias[this.Tesis].Hecha) {
          this.egg = true;
        }else{
          this.egg = false;
        }
     }
     Mostrar_o_Ocultar(){
       //recorrer todo el array de materias y meter las aprobadas dentro de un array
       //este array se vacia y rellena cada vez que se llama a la funcion
       this.Array_De_Materias_Aprobadas = [];
       for (let materia = 0; materia < this.Materias.Materias.length; materia++) {
         if (this.Materias.Materias[materia].Hecha) {
           this.Array_De_Materias_Aprobadas.push(this.Materias.Materias[materia].Numero);
         }
       }
       //recorer todo el array de materias

       for (let materia = 0; materia < this.Materias.Materias.length; materia++) {
         //console.log(this.Materias.Materias[materia].Nombre+ " "+ this.Materias.Materias[materia].Hecha);

         //si la meteria cumple con los require: entonces esta disponible
         if (this.Materias.Materias[materia].Requiere.length == 1) {
           //si requiere se cumple
           if (this.Array_De_Materias_Aprobadas.indexOf(this.Materias.Materias[materia].Requiere[0]) > -1 || this.Materias.Materias[materia].Requiere[0] == "Ninguna" ) {
             this.Materias.Materias[materia].Disponible = true;
           }else{
             //si el requiere no se cumple, entonces esta materia no esta disponible y no esta hecha
             this.Materias.Materias[materia].Disponible = false;
             this.Materias.Materias[materia].Hecha = false;
           }
         }else{
           //si el requiere es mayor a 1
           //se recorre el array de las materias requisitos
           let contador = 0;
           for (let requisito = 0; requisito < this.Materias.Materias[materia].Requiere.length; requisito++) {
             //si la materia requisito esta dentro del array de materias aprobadas
             if (this.Array_De_Materias_Aprobadas.indexOf( this.Materias.Materias[materia].Requiere[requisito]) >=0  ) {
               //se suma la materia aprobada requisito
               contador = contador + 1;
               //si todas las materias requisito estan aprobadas
               if(contador == this.Materias.Materias[materia].Requiere.length){
                 this.Materias.Materias[materia].Disponible = true;
               }
             }else{
               //si hay una materia que no esta en el array de materias aprobadas entonces:
               this.Materias.Materias[materia].Disponible = false;
               this.Materias.Materias[materia].Hecha = false;
             }

           }
         }
         //Si la materia deja de estar disponible, porque una materia anterior se desmarco, entonces se
         //vuelve no disponible
         if (this.Materias.Materias[materia].Disponible == false) {
           this.Materias.Materias[materia].Hecha == false;
         }
       }


     }

  ngOnInit(): void {
  }

}
