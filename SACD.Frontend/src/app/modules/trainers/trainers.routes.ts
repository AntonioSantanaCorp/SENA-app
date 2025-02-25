import { Route } from '@angular/router';

export default [
  {
    path: '',
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./pages/trainers-list/trainers-list.component'),
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./pages/trainer-details/trainer-details.component'),
      },
    ],
  },
] satisfies Route[];
