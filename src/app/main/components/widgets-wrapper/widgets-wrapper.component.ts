import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widgets-wrapper',
  templateUrl: './widgets-wrapper.component.html',
  styleUrls: ['./widgets-wrapper.component.css']
})
export class WidgetsWrapperComponent {
  
  @Input() patient;

}
