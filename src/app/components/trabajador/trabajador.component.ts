import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trabajador } from 'src/app/models/trabajador';
import { TrabajadorService } from 'src/app/services/trabajador.service';


@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent implements OnInit {


  trabajador: Trabajador = new Trabajador();

  error: any;

  constructor(private service: TrabajadorService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      if (id) {
        this.service.ver(id).subscribe(trabajador => this.trabajador = trabajador)
      }
    })

  }
  public crear(): void {
    this.service.crear(this.trabajador).subscribe(trabajador => {
      console.log(trabajador);
      alert(`trabajador ${trabajador.nombre} creado con éxito`);
      this.router.navigate(['/trabajador']);
    }, err => {
      if (err.status === 400) {
        this.error = err.error;
        console.log(this.error);
      }
    });
  }
  public editar(): void {
    this.service.editar(this.trabajador).subscribe(trabajador => {
      console.log(trabajador);
      alert(`Trabajador ${trabajador.id} actualizado con éxito`);
      this.router.navigate(['/trabajador']);
    }, err => {
      if (err.status === 400) {
        this.error = err.error;
        console.log(this.error);
      }
    });
  }
}



