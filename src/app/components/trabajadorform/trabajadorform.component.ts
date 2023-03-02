import { Component, OnInit } from '@angular/core';
import { Trabajador } from 'src/app/models/trabajador';
import { TrabajadorService } from 'src/app/services/trabajador.service';


@Component({
  selector: 'app-trabajadorform',
  templateUrl: './trabajadorform.component.html',
  styleUrls: ['./trabajadorform.component.css']
})
export class TrabajadorformComponent {

  titulo = "Registro de Trabajadores";

  trabajador: Trabajador[];

  constructor(private service: TrabajadorService) { }

  ngOnInit() {
    this.service.listar().subscribe(trabajador => this.trabajador = trabajador);
  }
  public eliminar(trabajador: Trabajador): void {
    if (confirm(`Seguro que desea eliminar a ${trabajador.nombre} ?`)) {
      this.service.eliminar(trabajador.id).subscribe(() => {
        this.trabajador = this.trabajador.filter(a => a !== trabajador);
        alert(`Trabajador ${trabajador.id} eliminado con éxito`)
      });
    }
  }
}
