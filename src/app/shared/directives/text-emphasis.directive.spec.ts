import { ElementRef, Renderer2 } from '@angular/core';
import { TextEmphasisDirective } from './text-emphasis.directive';

describe('TextEmphasisDirective', () => {
  it('should create an instance', () => {
    const rendererMock = {} as Renderer2;
    const elMock = {} as ElementRef;

    const directive = new TextEmphasisDirective(rendererMock, elMock);
    expect(directive).toBeTruthy();
  });
});
