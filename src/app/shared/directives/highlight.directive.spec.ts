import { TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { ElementRef } from '@angular/core';

describe('HighlightDirective', () => {
  let elementRefMock: ElementRef;

  beforeEach(() => {
    elementRefMock = {
      nativeElement: document.createElement('div')
    };

    TestBed.configureTestingModule({
      declarations: [HighlightDirective],
      providers: [{ provide: ElementRef, useValue: elementRefMock }]
    });
  });

  it('should create an instance', () => {
    const directive = new HighlightDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
