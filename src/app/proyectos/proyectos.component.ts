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
    { nombre: 'Rick y morty', url: 'https://oscarin12.github.io/rick-and-morty-test/',url1:'https://github.com/oscarin12/rick-and-morty-test', imagen: 'assets/img/rick.jpg' },
    { nombre: 'Ejecución 1', url: 'https://oscarin12.github.io/EJECICIOS1/', url1:'https://github.com/oscarin12/EJECICIOS1', imagen: 'assets/img/image.png' },
    { nombre: 'Ejecución 2', url: 'https://oscarin12.github.io/EJECICIOS2/',url1:'https://github.com/oscarin12/ejercicio2', imagen: 'assets/img/imagen2.png' },
    { nombre: 'Ejecución 3', url: 'https://github.com/oscarin12/ejercicio3',url1:'https://github.com/oscarin12/ejercicio3', imagen: 'assets/img/ejer3.jpg' },
    { nombre: 'Ejecución 4', url: 'https://oscarin12.github.io/Ejercicio4/',url1:'https://github.com/oscarin12/ejercicio4', imagen: 'assets/img/imagen3.png' },
    { nombre: 'Ejecución 5', url: 'https://oscarin12.github.io/Ejercicio5/',url1:'https://github.com/oscarin12/ejercicio5', imagen: 'assets/img/imagen4.png' },
    { nombre: 'Ejecución 6', url: 'https://oscarin12.github.io/Ejercicio6/',url1:'https://github.com/oscarin12/ejercicio6', imagen: 'assets/img/imagen5.png' },
    { nombre: 'Ejecución 7', url: 'https://oscarin12.github.io/botones/', imagen: 'assets/img/botones.jpg' },
        { nombre: 'Próximo Proyecto', url: '#', imagen: 'assets/img/pro.jpg' }
    
   
    
  ];
}
