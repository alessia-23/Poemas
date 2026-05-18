import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'videojuegos',
    pathMatch: 'full'
  },
  {
    path: 'videojuegos',
    loadComponent: () =>
      import('./pages/videojuegos/videojuegos.page').then(m => m.VideojuegosPage)
  },
  {
    path: 'videojuego-form',
    loadComponent: () =>
      import('./pages/videojuego-form/videojuego-form.page').then(m => m.VideojuegoFormPage)
  },
  {
    path: 'videojuego-form/:id',
    loadComponent: () =>
      import('./pages/videojuego-form/videojuego-form.page').then(m => m.VideojuegoFormPage)
  },  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then( m => m.TabsPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'poemas',
    loadComponent: () => import('./pages/poemas/poemas.page').then( m => m.PoemasPage)
  },
  {
    path: 'multimedia',
    loadComponent: () => import('./pages/multimedia/multimedia.page').then( m => m.MultimediaPage)
  }

];