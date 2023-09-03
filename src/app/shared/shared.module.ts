import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { TextEmphasisDirective } from './directives/text-emphasis.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [HighlightDirective, TextEmphasisDirective, OrderByPipe],
  exports: [HighlightDirective, TextEmphasisDirective, OrderByPipe, FormsModule, CommonModule]
})
export class SharedModule {}
