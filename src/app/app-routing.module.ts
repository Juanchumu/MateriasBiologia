import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importando Componentes al Router:
import { MateriasFormComponent } from './components/materias-form/materias-form.component';
import { ImportarExportarComponent } from './components/importar-exportar/importar-exportar.component';
import { EstadoComponent } from './components/estado/estado.component';
import { ErrorComponent } from './components/error/error.component';

//Definiendo la ruta para cada componente:
const routes: Routes = [
  {path: '', component : MateriasFormComponent},
  {path: 'Materias-Formulario', component : MateriasFormComponent},
  {path: 'Importar-Exportar', component : ImportarExportarComponent},
  {path: 'Estado', component : EstadoComponent},
  {path: '**', component : ErrorComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
