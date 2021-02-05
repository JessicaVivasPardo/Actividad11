
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { ProgramaComponent } from './components/programa/programa.component';



const appRoutes: Routes = [
    { path:'', component: HomeComponent },
    { path:'home', component: HomeComponent },
    { path:'nosotros', component: NosotrosComponent },
    { path:'servicios', component: ServiciosComponent },
    { path:'contactenos', component: ContactenosComponent },
    { path:'programa', component: ProgramaComponent },

];

export const routing = RouterModule.forRoot(appRoutes);

