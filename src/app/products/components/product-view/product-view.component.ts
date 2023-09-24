import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductsPromiseService } from '../../services/products-promise.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  @Input() productID!: string;

  product$!: Promise<Product>;

  private productsService = inject(ProductsPromiseService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.product$ = this.productsService.getProduct(this.productID);
  }

  onGoBack() {
    this.router.navigate(['./../../'], { relativeTo: this.route });
  }
}
