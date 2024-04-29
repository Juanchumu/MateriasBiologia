import { Component } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public plataforma_cliente: string;
  public Class_Contenido: string;
  public Class_List_Item: string;

  constructor(private platform: Platform){

    //Responsive Web Desing
    //Codigo Para detectar y Modificar los Atributos de la Pagina
    if (this.platform.ANDROID) {
      this.plataforma_cliente = "Android";
      this.Class_Contenido = "contenido_Android";
      this.Class_List_Item = "List_Item_Android";
    }else{
      this.plataforma_cliente = "PC";
      this.Class_Contenido = "contenido";
      this.Class_List_Item = "List_Item";
    }

  }
}
