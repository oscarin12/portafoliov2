import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PdfService } from '../services/pdf.service';


@Component({
  selector: 'app-experiencias',
  imports: [],
  templateUrl: './experiencias.component.html',
  styleUrl: './experiencias.component.css'
})
export class ExperienciasComponent implements AfterViewInit {
  @ViewChild('experiencia', { static: false }) experiencia!: ElementRef;

  constructor(private pdfService: PdfService) {}

  ngAfterViewInit() {
    if (this.experiencia) {
      this.pdfService.setContentRef('experiencia', this.experiencia);
    }
  }
}