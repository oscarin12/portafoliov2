import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      this.closeMenu();
    }
  }

  closeMenu() {
    this.menuOpen = false;
  }
  constructor() { }
  

  descargar(){
    window.open('assets/cv/cv_oscar_medina.pdf', '_blank');
  }


}




