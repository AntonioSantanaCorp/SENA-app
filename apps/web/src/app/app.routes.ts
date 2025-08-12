import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from '@web/libs/auth/services';
import { AppBaseRoutes } from './core/constants';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: AppBaseRoutes.Auth,
    loadChildren: () => import('./modules/auth/auth.routes'),
  },
  {
    path: '',
    canMatch: [() => inject(AuthService).isAuthenticated()],
    component: LayoutComponent,
    children: [
      {
        path: AppBaseRoutes.Athlete,
        loadChildren: () => import('./modules/athletes/athletes.routes'),
      },
      {
        path: AppBaseRoutes.Trainer,
        loadChildren: () => import('./modules/trainers/trainers.routes'),
      },
      { path: '', redirectTo: AppBaseRoutes.Athlete, pathMatch: 'full' },
    ],
  },
  {
    path: '',
    loadComponent: () => import('./landing/landing-page.component'),
  },
  { path: '**', redirectTo: '' },
];
