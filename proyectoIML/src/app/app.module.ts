import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { ProgramaComponent } from './components/programa/programa.component';
import { FooterComponent } from './components/footer/footer.component';

//servicios
import { CargarScriptsService } from './cargar-scripts.service';
import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactenosComponent,
    ProgramaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routing, 
    FormsModule, 
    HttpClientModule, 


  ],
  providers: [],
  bootstrap: [AppComponent,
  CargarScriptsService]
})
export class AppModule { }
