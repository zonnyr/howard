import { Component, OnInit } from '@angular/core';
import { HowardService } from 'src/app/services/howard.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
})
export class EstudiantesComponent implements OnInit {
  // variables
  dataEt: String = '';
  estudiantes: any;
  limpia: String;

  // fecha actual
  currentYear: Number = new Date().getFullYear();

  constructor(
    protected howardService: HowardService
    ) { }

  ngOnInit(){

    // se llama a la funcion de los estudiantes
    this.howardService.getEstudiantes().subscribe(
      (data: any) =>{
        this.estudiantes = data;
      },
      (error) => {
        console.error(error);
      }
    )  

  }
  
  //reactive form
  profileForm = new FormGroup({
    image: new FormControl('',[
      Validators.required,
    ]),
    name: new FormControl('',[
      Validators.required,
    ]),
    ano: new FormControl('',[
      Validators.required,
      Validators.maxLength(4),
      Validators.max(2021),
      Validators.min(0),
    ]),
    patronus: new FormControl('',[
      Validators.required,
    ]),
  });

  // se llama a esta funcion para agregar un nuevo registro al arreglo y limpiar el formulario
  onAgregarEstudiante(){
    this.estudiantes.push(this.profileForm.value);
    console.log(this.profileForm.value);
    this.limpia = " ";
    this.limpia = "";
  }
  
  // se llama a esta funcion para eliminar un registro en concreto
  eliminar(elemento: Number) {
    let resultado = []
    for (let i = 0; i < this.estudiantes.length; i++) {
      if (i !== elemento) {
        resultado.push(this.estudiantes[i]);
      }
    }
    this.estudiantes = resultado;
  }

}
