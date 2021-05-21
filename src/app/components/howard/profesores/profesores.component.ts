import { Component, OnInit } from '@angular/core';
import { HowardService } from 'src/app/services/howard.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
})
export class ProfesoresComponent implements OnInit {
  // vriables
  profesores: any;

  //fecha actual
  currentYear: Number = new Date().getFullYear();
  
  constructor(
    protected howardService: HowardService
    ) { }

  ngOnInit()  {
    
    // se llama a la funcion de los profesores
    this.howardService.getProfesores().subscribe(
      (data: any) =>{
        this.profesores = data;
      },
      (error) => {
        console.error(error);
      }
    )  

  }

}
