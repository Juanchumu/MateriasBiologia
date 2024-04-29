import { Component, OnInit } from '@angular/core';
//Importar el JSON de las material de los planes:
import { Materias_1804 } from "../../models/plan1804";

@Component({
  selector: 'app-importar-exportar',
  templateUrl: './importar-exportar.component.html',
  styleUrls: ['./importar-exportar.component.css']
})
export class ImportarExportarComponent implements OnInit {
  public Array_Materias: any;
  public Array_Materias_Copia: any;
  public Mostrar_En_Documento: string;

  constructor() {
    this.Array_Materias = Materias_1804;
    this.Array_Materias_Copia = [];
  }
  ngOnInit(): void {
  }
  Mostrar_Array(){
    for (let index = 0; index < this.Array_Materias.Materias.length; index++) {
      this.Array_Materias_Copia.push({
        "Nombre" : this.Array_Materias.Materias[index].Nombre,
        "Hecha" : this.Array_Materias.Materias[index].Hecha });
    }
    this.Mostrar_En_Documento = JSON.stringify(this.Array_Materias_Copia);

  }

}
