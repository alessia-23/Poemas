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
  }
];