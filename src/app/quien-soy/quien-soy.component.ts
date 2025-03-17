import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PdfService } from '../services/pdf.service';
@Component({
  selector: 'app-quien-soy',
  imports: [],
  templateUrl: './quien-soy.component.html',
  styleUrl: './quien-soy.component.css'
  
})
export class QuienSoyComponent  implements AfterViewInit {
  @ViewChild('quienSoy', { static: false }) quienSoy!: ElementRef;

  constructor(private pdfService: PdfService) {}

  ngAfterViewInit() {
    if (this.quienSoy) {
      this.pdfService.setContentRef('quienSoy', this.quienSoy);
    }
  }
  imageUrl: string = 'assets/img/oscar.jpg'; 
}
