import { Component, inject } from '@angular/core';
import { CartStateService } from '../../services/cart-state.service';
import { CartProductComponent } from "../../components/cart-product/cart-product.component";
import { ProductItemCart } from '../../interfaces/store.interfaces';

@Component({
  selector: 'app-cart',
  imports: [CartProductComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export default class CartComponent {
  state = inject(CartStateService).state;

  onRemove(id: number) {
    this.state.remove(id);
  }

  onDecrease(product: ProductItemCart) {
    if (product.quantity === 1) {
      this.onRemove(product.product.id);
      return;
    }
    this.state.update({
      product: product.product,
      quantity: product.quantity - 1,
    })
  }

  onIncrease(product: ProductItemCart) {
    this.state.update({
      product: product.product,
      quantity: product.quantity + 1,
    })
  }
}
