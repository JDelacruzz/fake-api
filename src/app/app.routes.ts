import { Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    title: 'Products',
    loadChildren: () => import('./pages/products/product.route'),
  },
  {
    path: 'users',
    title: 'Users',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/users/users.component'),
  },
  {
    path: 'login',
    title: 'Login',
    loadComponent: () => import('./pages/auth/login/login.component'),
  },
  {
    path: 'cart',
    title: 'Cart',
    loadComponent: () => import('./pages/cart/cart.component'),
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];
