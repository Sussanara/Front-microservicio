import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trabajador } from 'src/app/models/trabajador';
import { TrabajadorService } from 'src/app/services/trabajador.service';


@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent implements OnInit {
  

  trabajador: Trabajador = new Trabajador();
  constructor(private service: TrabajadorService,
    private router: Router) { }


  ngOnInit() {
    

  }
  public crear(): void {
    this.service.crear(this.trabajador).subscribe(trabajador => {
      console.log(trabajador);
      alert(`trabajador ${trabajador.nombre} creado con éxito`);
      this.router.navigate(['/trabajador']);
    });
  } 

}


