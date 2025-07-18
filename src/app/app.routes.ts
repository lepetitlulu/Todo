import { Routes } from '@angular/router';
import {Login} from '../component/login/login';
import {authGuard} from '../auth-service/authguard';

export const routes: Routes = [
  { path: 'login', component: Login },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('../component/dashboard/dashboard').then(m => m.Dashboard)
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];