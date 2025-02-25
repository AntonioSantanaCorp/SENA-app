import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.routes') },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'area-admin',
        loadChildren: () => import('./modules/area-admin/area-admin.routes'),
      },
    ],
  },
];
