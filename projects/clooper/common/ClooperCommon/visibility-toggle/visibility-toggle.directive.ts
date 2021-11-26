import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appVisibilityToggle]'
})
export class VisibilityToggleDirective {
  @HostListener('click', ['$event']) toggleView(event){
    const button = this.elem.nativeElement;
    const type = button.type;
    if (type === 'password') {
      button.type = 'text'
    } else {
      button.type = 'password';
    }
  }

  constructor(private elem: ElementRef) { }

}
