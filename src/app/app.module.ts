import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modulo para los formularios:
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MateriasFormComponent } from './components/materias-form/materias-form.component';
import { ImportarExportarComponent } from './components/importar-exportar/importar-exportar.component';
import { EstadoComponent } from './components/estado/estado.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    MateriasFormComponent,
    ImportarExportarComponent,
    EstadoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
