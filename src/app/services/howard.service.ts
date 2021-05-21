import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HowardService {

  constructor(protected http:HttpClient) {}

  //Conexion a la api de los personajes
  getPersonajes(data){
    return this.http.get(`http://hp-api.herokuapp.com/api/characters/house/${data}`);
  }

  //Conexion a la api de los estudiantes
  getEstudiantes(){
    return this.http.get(`http://hp-api.herokuapp.com/api/characters/students`);
  }

  //Conexion a la api de los profesores
  getProfesores(){
    return this.http.get(`http://hp-api.herokuapp.com/api/characters/staff`);
  }

}