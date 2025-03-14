import { CommonModule } from '@angular/common';
import { Component,OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-conocimientos',
  templateUrl: './conocimientos.component.html',
  styleUrls: ['./conocimientos.component.css'],
  imports: [
    CommonModule

  ]
})
export class ConocimientosComponent  implements OnInit, OnDestroy {
  conocimientos = [
    { name: 'Angular', img: 'assets/img/angular.png' },
    { name: 'Apigee', img: 'assets/img/apigee.png' },
    { name: 'JavaScript', img: 'assets/img/javasript.png' },
    { name: 'Scrum', img: 'assets/img/scrum.png' },
    { name: 'Spring Boot', img: 'assets/img/spring-boot-logo.png' },
    { name: 'SQL', img: 'assets/img/sql.png' }
  ];

  currentIndex = 0;
  totalSlides = 3; // Cantidad de elementos visibles a la vez
  autoSlideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.autoSlideInterval);
  }

  nextSlide() {
    if (this.currentIndex < this.conocimientos.length - this.totalSlides) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Reinicia al inicio
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.conocimientos.length - this.totalSlides; // Va al final si retrocede desde el inicio
    }
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Se mueve cada 3 segundos
  }
}