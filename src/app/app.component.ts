import { Component,AfterViewInit, Renderer2  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';

import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { HomeComponent } from './home/home.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ContactoComponent } from './contacto/contacto.component';

@Component({
  selector: 'app-root',
  imports: [MenuComponent,ProyectosComponent,ContactoComponent,QuienSoyComponent,ExperienciasComponent,PieDePaginaComponent,HomeComponent,HabilidadesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'Portafolio-v2';

  constructor(private renderer: Renderer2) {}

 ngAfterViewInit() {
    this.configurarDesplazamientoSuave();
  }

 
private configurarDesplazamientoSuave() {
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((anchor: Element) => {
    this.renderer.listen(anchor, 'click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      if (targetId) {
        const objetivo = document.querySelector(targetId);
        if (objetivo) {
          objetivo.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

}
