import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private contentRefs: { [key: string]: ElementRef | null } = {};

  setContentRef(key: string, ref: ElementRef) {
    this.contentRefs[key] = ref;
  }

  getContentRef(key: string): ElementRef | null {
    return this.contentRefs[key] || null;
  }
}
