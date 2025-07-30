import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  imports: [CommonModule], // ← Agrega esto
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyectos = [
    { nombre: 'Rick y morty', url: 'https://oscarin12.github.io/rick-and-morty-test/', url1: 'https://github.com/oscarin12/rick-and-morty-test', imagen: 'assets/img/rick.jpg' },
    { nombre: 'Ejecución 6', url: 'https://oscarin12.github.io/Ejercicio6/', url1: 'https://github.com/oscarin12/ejercicio6', imagen: 'assets/img/imagen5.png' },
    { nombre: 'Próximo Proyecto', url: '#', imagen: 'assets/img/pro.jpg' }



  ];
}
