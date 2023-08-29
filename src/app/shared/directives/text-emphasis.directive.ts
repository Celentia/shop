import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextEmphasis]'
})
export class TextEmphasisDirective {
  @Input() appTextEmphasis = '';

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  @HostListener('click') onClick() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.appTextEmphasis);
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', '600');
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '18px');
  }
}
