import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { DesarrolladorComponent } from './components/desarrollador/desarrollador.component';
import { TrabajadorComponent } from './components/trabajador/trabajador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrabajadorformComponent } from './components/trabajadorform/trabajadorform.component';

@NgModule({
  declarations: [
    AppComponent,
    TrabajadorComponent,
    DesarrolladorComponent,
    TrabajadorformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
