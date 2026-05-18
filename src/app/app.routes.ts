import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'tabs/inicio',
    pathMatch: 'full'
  },

  {
    path: 'tabs',
    loadComponent: () =>
      import('./tabs/tabs.page').then(m => m.TabsPage),
    children: [

      {
        path: 'inicio',
        loadComponent: () =>
          import('./pages/inicio/inicio.page').then(m => m.InicioPage)
      },

      {
        path: 'poemas',
        loadComponent: () =>
          import('./pages/poemas/poemas.page').then(m => m.PoemasPage)
      },

      {
        path: 'multimedia',
        loadComponent: () =>
          import('./pages/multimedia/multimedia.page').then(m => m.MultimediaPage)
      },

      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      }

    ]
  }

];