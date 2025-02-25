import { Route } from '@angular/router';

export default [
  {
    path: '',
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./pages/athletes-list/athletes-list.component'),
      },
      {
        path: 'edit',
        loadComponent: () =>
          import('./pages/athlete-details/athlete-details.component'),
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./pages/athlete-details/athlete-details.component'),
      },
    ],
  },
] satisfies Route[];
