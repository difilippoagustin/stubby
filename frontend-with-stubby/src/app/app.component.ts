import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Empleado } from './empleado';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-with-stubby';
  urlEmpleados = environment.urlStubby
  // listaEmpleados : Empleado[]
  pdf: string
  constructor(private http: HttpClient ){}

  ngOnInit(){
  }

  obtenerListaEmpleados() {
    const url = this.urlEmpleados + '/descargarPDF';
    this.http.get(url).subscribe((response: string) => {
      this.pdf = response;
    });
  }
}
