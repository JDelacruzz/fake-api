import { Component, inject } from '@angular/core';
import { CartStateService } from '../../services/cart-state.service';
import { CartProductComponent } from "../../components/cart-product/cart-product.component";

@Component({
  selector: 'app-cart',
  imports: [CartProductComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export default class CartComponent {
  state = inject(CartStateService).state;
}
