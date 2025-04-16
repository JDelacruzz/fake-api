import { Component, inject, input } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/store.interfaces';
import { CurrencyPipe } from '@angular/common';
import { CartStateService } from '../../../services/cart-state.service';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export default class ProductDetailComponent {
  productService = inject(ProductService);
  cartStateService = inject(CartStateService).state;
  id = input.required<string>();
  product!: Product;
  rate = 0;

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProduct(this.id()).subscribe((resp) => {
      this.product = resp;
      console.log(this.product);
      this.rate = Math.round(this.product.rating.rate);
    });
  }

  createRange(number: number) {
    return new Array(number).fill(0).map((n, index) => index + 1);
  }

  addToCart(product: Product) {
    this.cartStateService.add({product, quantity: 1});
  }
}
