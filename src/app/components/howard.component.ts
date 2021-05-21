import { Component, OnInit } from '@angular/core';
import { HowardService } from 'src/app/services/howard.service';

@Component({
  selector: 'app-howard',
  templateUrl: './howard.component.html',
})
export class HowardComponent implements OnInit {
  // variables
  dataPj: String = '';
  persnajes: any;

  // fecha actual
  currentYear: Number = new Date().getFullYear();

  constructor(
    protected howardService: HowardService
    ) { }

  ngOnInit() {    
    
  }
  
  //funcion para solicitar los datos de la api
  onAtrapaPersonaje(event: Event){

    this.dataPj = String((<HTMLInputElement>event.target).value);

    this.howardService.getPersonajes(this.dataPj).subscribe(
      (data: any) =>{
        this.persnajes = data;
      },
      (error) => {
        console.error(error);
      }
    )  

  }

  

}
