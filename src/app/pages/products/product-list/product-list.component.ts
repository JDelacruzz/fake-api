import { Component, inject } from '@angular/core';
import { CardProductComponent } from '../../../components/card-product/card-product.component';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/store.interfaces';

@Component({
  selector: 'app-product-list',
  imports: [CardProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export default class ProductListComponent {
  productService = inject(ProductService);
  products: Product[] = [];

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((resp) => {
      this.products = resp;
      console.log(this.products);
    });
  }
}
