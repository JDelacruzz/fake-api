import { Component, inject } from '@angular/core';
import { CartProductComponent } from '../../components/cart-product/cart-product.component';
import { CartStateService } from '../../services/cart-state.service';
import { ProductItemCart } from '../../interfaces/store.interfaces';
import { CurrencyPipe } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  imports: [CartProductComponent, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export default class CartComponent {
  state = inject(CartStateService).state;

  onRemove(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás recuperar el producto eliminado',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.state.remove(id);
        Swal.fire({
          title: 'Eliminado!',
          text: 'El producto ha sido eliminado.',
          icon: 'success'
        });
      }

    })
    this.state.remove(id);
  }

  onDecrease(product: ProductItemCart) {
    this.state.update({
      product: product.product,
      quantity: product.quantity - 1,
    });
  }

  onIncrease(product: ProductItemCart) {
    this.state.update({
      product: product.product,
      quantity: product.quantity + 1,
    });
  }
}
