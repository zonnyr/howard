import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HowardComponent } from './components/howard.component';
import { EstudiantesComponent } from './components/howard/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './components/howard/profesores/profesores.component';

const routes: Routes = [
  {path: '', component: HowardComponent,},
  {path: 'estudiantes', component: EstudiantesComponent,},
  {path: 'profesores', component: ProfesoresComponent,},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
