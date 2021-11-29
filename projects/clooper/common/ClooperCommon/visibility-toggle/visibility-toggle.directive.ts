/* eslint-disable */
import { ElementRef, Renderer2, Input, Directive } from '@angular/core';

@Directive({
  selector: '[appVisibilityToggle]',
})
export class VisibilityToggleDirective {
  
  @Input() show: boolean = false;
  
  constructor(private renderer: Renderer2, private element: ElementRef<HTMLInputElement>) { }
}
