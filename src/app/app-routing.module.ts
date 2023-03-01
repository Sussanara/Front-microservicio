import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesarrolladorComponent } from './components/desarrollador/desarrollador.component';
import { TrabajadorComponent } from './components/trabajador/trabajador.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'trabajador'},
  {path: 'desarrollador', component: DesarrolladorComponent},
  {path: 'trabajador', component: TrabajadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
