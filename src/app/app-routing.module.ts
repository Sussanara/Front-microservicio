import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesarrolladorComponent } from './components/desarrollador/desarrollador.component';
import { TrabajadorComponent } from './components/trabajador/trabajador.component';
import { TrabajadorformComponent } from './components/trabajadorform/trabajadorform.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'trabajador'},
  {path: 'desarrollador', component: DesarrolladorComponent},
  {path: 'trabajador', component: TrabajadorComponent},
  {path: 'trabajadorform', component: TrabajadorformComponent},
  {path: 'trabajador/:id', component: TrabajadorformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
