import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appIconColor]'
})
export class PatientInfoDirective implements OnChanges {

  @Input() patientIconColor: string;

  constructor(private el: ElementRef) { }

  ngOnChanges() {
    this.setIconColor(this.patientIconColor);
  }

  setIconColor(color) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
