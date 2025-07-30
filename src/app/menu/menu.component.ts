import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { PdfService } from '../services/pdf.service';
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
  constructor(private pdfService: PdfService) { }
  /*  imprimir() {
     const doc = new jsPDF({ format: 'a4', unit: 'mm' });
 
     // Agregar imagen de perfil
     const img = new Image();
     img.src = 'assets/img/oscar.jpg';
     img.onload = () => {
       doc.addImage(img, 'JPEG', 10, 10, 40, 40); // Foto en la esquina superior izquierda
       this.generarContenido(doc);
     };
   } */

  generarContenido(doc: jsPDF) {
    let yPosition = 20;

    // Título principal
    doc.setFontSize(20);
    doc.setTextColor(0, 51, 102);
    doc.text('Oscar Medina Rucan', 60, 20);
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text('Ingeniería de Ejecución en Informática. Mención Desarrollo de Sistemas', 60, 27);

    // Datos de contacto
    doc.setFontSize(10);
    doc.text('Avenida Barros Arana 02158, Temuco, Chile', 60, 35);
    doc.text('Tel: +56961809333 | Email: Oscar45medina@gmail.com', 60, 40);
    doc.text('LinkedIn: www.linkedin.com/in/oscarino | GitHub: oscarin12', 60, 45);

    // Línea separadora
    yPosition = 50;
    doc.setLineWidth(0.5);
    doc.setDrawColor(0, 51, 102);
    doc.line(10, yPosition, 200, yPosition);
    yPosition += 10;

    // Sección "Perfil Profesional"
    doc.setFontSize(14);
    doc.setTextColor(0, 51, 102);
    doc.text('Perfil Profesional', 10, yPosition);
    yPosition += 6;
    doc.setFontSize(11);
    doc.setTextColor(0);
    let perfilText = `Soy Ingeniero Informático con mas de 5 años  experiencia en desarrollo web y consultas SQL.He trabajado en proyectos usando metodologías ágiles, colaborando efectivamente en equipos multidisciplinarios.
Especializado en el desarrollo de aplicaciones con Angular y Spring Boot, optimizando procesos y mejorando la experiencia de usuario Me enfoco en ofrecer soluciones eficientes con atención al detalle y organización.
Mi compromiso con el aprendizaje continuo impulsa mi desempeño y me motiva a contribuir en futuros desafíos tecnológicos, con interés en desarrollo backend y arquitectura de software.`;
    let splitPerfil = doc.splitTextToSize(perfilText, 180);
    doc.text(splitPerfil, 10, yPosition, { lineHeightFactor: 1.2 });
    yPosition += splitPerfil.length * 5;


    // Sección "Experiencia"
    doc.setFontSize(14);
    doc.setTextColor(0, 51, 102);
    doc.text('Experiencia Profesional', 10, yPosition);
    yPosition += 6;
    doc.setFontSize(11);
    doc.setTextColor(0);

    autoTable(doc, {
      startY: yPosition,
      head: [['Cargo', 'Empresa', 'Fecha', 'Responsabilidades y Logros']],
      body: [
        ['Developer', 'Luna Servicios SPA, Santiago', 'Nov 2021 - Abr 2024', '-Participé en la migración de bases de datos dentro del equipo del Banco Santander, colaborando en la célula Apolo.\n- Brindé soporte para la interfaz de datos en la implementación de la nueva herramienta Debt Manager.\n- Desarrollé y gestioné la malla de control-m para automatizar procesos, incluyendo la creación de peticiones de ejecución desde España.\n- Implementé y gestioné el sistema de creación de tickets en JIRA bajo la metodología Kanban, optimizando la organización y seguimiento de tareas.\n- Creé y administré DPG en JIRA, asegurando el cumplimiento de los estándares y procesos definidos.\n- Trabajé con la metodología Kanban durante la ejecución de proyectos, asegurando la entrega eficiente y organizada de los resultados.\n- Dominé el lenguaje SQL para la administración de bases de datos, encargándome de la creación y diseño de tablas para un proyecto clave.\n- También ayudé a realizar mini proyectos en Java para la creación de archivos y optimización de su rendimiento en el proyecto.'],
        ['Practicante Junior', 'Archiconstructor Ltda, Santiago', 'Mar 2019 - Jun 2019', '-Diseñé, mantuve y brindé soporte técnico para la página web de la empresa, mejorando la experiencia de usuario y la funcionalidad a la página fulltenis.\n- Realicé la mantención y soporte de bases de datos, asegurando su rendimiento y disponibilidad continua.\n- Desempeñé el rol de Analista Programador, contribuyendo al desarrollo de la página web y otras aplicaciones internas, optimizando procesos y facilitando las operaciones diarias.']
      ],
      theme: 'striped',
      headStyles: { fillColor: [0, 51, 102], textColor: [255, 255, 255] },
      styles: { fontSize: 10, cellPadding: 2 }
    });
    yPosition = (doc as any).lastAutoTable.finalY + 10;


    // Sección "Formación"
    doc.setFontSize(14);
    doc.setTextColor(0, 51, 102);
    doc.text('Formación', 10, yPosition);
    yPosition += 6;
    autoTable(doc, {
      startY: yPosition,
      head: [['Título', 'Institución', 'Fecha']],
      body: [
        ['Ingeniería de Ejecución en Informática. Mención Desarrollo de Sistemas', 'Instituto Profesional AIEP, Temuco', 'Jul 2021'],
        ['Certificado en Programación y Análisis de Sistemas', 'Instituto Profesional AIEP, Temuco', 'May 2019']
      ],
      theme: 'striped',
      headStyles: { fillColor: [0, 51, 102], textColor: [255, 255, 255] },
      styles: { fontSize: 10, cellPadding: 2 }
    });
    yPosition = (doc as any).lastAutoTable.finalY + 10;

    // Sección "Conocimientos"
    doc.setFontSize(14);
    doc.setTextColor(0, 51, 102);
    doc.text('Conocimientos', 10, yPosition);
    yPosition += 6;
    autoTable(doc, {
      startY: yPosition,
      head: [['Área', 'Detalles']],
      body: [
        ['Lenguajes', 'C#, Java, JavaScript, PHP, SQL, HTML, CSS'],
        ['Frameworks', 'Angular, Spring Boot, GitLab'],
        ['Herramientas', 'Control-M, Hue Editor, MobaXterm, WordPress'],
        ['Metodologías', 'SCRUM, Kanban con JIRA'],
        ['Idiomas', 'Inglés']
      ],
      theme: 'striped',
      headStyles: { fillColor: [0, 51, 102], textColor: [255, 255, 255] },
      styles: { fontSize: 10, cellPadding: 2 }
    });
    yPosition = (doc as any).lastAutoTable.finalY + 10;


    // Sección "Habilidades Blandas"
    doc.setFontSize(14);
    doc.setTextColor(0, 51, 102);
    doc.text('Habilidades Blandas', 10, yPosition);
    yPosition += 6;
    autoTable(doc, {
      startY: yPosition,
      head: [['', '', '']],
      body: [
        ['Trabajo en equipo', 'Adaptabilidad', 'Comunicación efectiva'],
        ['Resolución de problemas', 'Proactividad', 'Creatividad']
      ],
      theme: 'striped',
      headStyles: { fillColor: [0, 51, 102], textColor: [255, 255, 255] },
      styles: { fontSize: 10, cellPadding: 3 }
    });
    yPosition = (doc as any).lastAutoTable.finalY + 10;



    // Sección "Referencias"
    doc.setFontSize(14);
    doc.setTextColor(0, 51, 102);
    doc.text('Referencias', 10, yPosition);
    yPosition += 6;
    autoTable(doc, {
      startY: yPosition,
      head: [['Nombre', 'Contacto']],
      body: [
        ['Misael Iturra', '+56989666257'],
        ['Alicia Castillo', '+56994420581']
      ],
      theme: 'striped',
      headStyles: { fillColor: [0, 51, 102], textColor: [255, 255, 255] },
      styles: { fontSize: 10, cellPadding: 2 }
    });

    doc.save('CV_Oscar_Medina.pdf');
  }
}




