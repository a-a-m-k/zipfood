import { Component, Input, forwardRef } from '@angular/core';
import { 
  ControlValueAccessor, 
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppInputComponent),
      multi: true
    }
  ]
})

export class AppInputComponent implements ControlValueAccessor {
  @Input() placeholder: string;
  @Input() type: string;

  value: string;
  onChange: any;
  control: any;

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched() { } 

  onChangeValue(event) {
    this.value = event.target.value;
    this.onChange(this.value);
  }

}
