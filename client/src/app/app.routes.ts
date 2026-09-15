import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent:() => import('./pages/home/home.component').then(c => c.HomeComponent) },
  { path: 'post-details/:id', loadComponent:() => import('./pages/post-details/post-details.component').then(c => c.PostDetailsComponent) },
  { path: '**', loadComponent:() => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent) }
];
