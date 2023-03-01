import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesarrolladorComponent } from './components/desarrollador/desarrollador.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { TrabajadorComponent } from './components/trabajador/trabajador.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'trabajador'},
  {path: 'desarrollador', component: DesarrolladorComponent},
  {path: 'trabajador', component: TrabajadorComponent},
  {path: 'resultados', component: ResultadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
