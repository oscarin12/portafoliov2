import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';

@Component({
  selector: 'app-root',
  imports: [MenuComponent,ProyectosComponent,QuienSoyComponent,ExperienciasComponent,ConocimientosComponent,PieDePaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portafolio-v2';
}
