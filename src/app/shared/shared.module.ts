import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { TextEmphasisDirective } from './directives/text-emphasis.directive';

@NgModule({
  declarations: [HighlightDirective, TextEmphasisDirective],
  imports: [CommonModule],
  exports: [HighlightDirective, TextEmphasisDirective]
})
export class SharedModule {}
