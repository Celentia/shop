import { Component, Input, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { of, type Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  @Input() productID!: string;

  product$: Observable<Product | undefined> = of();

  private productsService = inject(ProductsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.product$ = this.productsService.getProduct(this.productID);
  }

  onGoBack() {
    this.router.navigate(['./../../'], { relativeTo: this.route });
  }
}
