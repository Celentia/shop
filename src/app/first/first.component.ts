import { Component } from '@angular/core';
import { ProductCategory } from '../products/models/product-category.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  name = 'Earl Grey';
  description = 'Super cool tea';
  price = 49;
  category = ProductCategory.Black;
  isAvailable = true;
}
