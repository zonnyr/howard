import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HowardComponent } from './components/howard.component';
import { HowardService } from 'src/app/services/howard.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EstudiantesComponent } from './components/howard/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './components/howard/profesores/profesores.component';

@NgModule({
  declarations: [
    AppComponent,
    HowardComponent,
    HeaderComponent,
    FooterComponent,
    EstudiantesComponent,
    ProfesoresComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    HowardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
