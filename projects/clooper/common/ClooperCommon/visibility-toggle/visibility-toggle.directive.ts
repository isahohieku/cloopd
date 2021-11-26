import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appVisibilityToggle]'
})
export class VisibilityToggleDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    // this.renderer.setAttribute(this.el.nativeElement);
}

}
