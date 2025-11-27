import { Routes } from '@angular/router';

// Pages
import { ConnexionComponent } from './pages/auth/connexion/connexion';
import { ShellComponent } from './layout/shell/shell';
import { DashboardComponent } from './pages/dashboard/dashboard';

export const routes: Routes = [
  // Page de connexion (hors layout)
  {
    path: 'connexion',
    component: ConnexionComponent,
  },

  // Layout principal + enfants
  {
    path: '',
    component: ShellComponent,
    children: [
      // Dashboard par défaut
      { path: '', component: DashboardComponent },

      // On préparera plus tard :
      // { path: 'taches', loadComponent: () => import('./pages/taches/taches').then(m => m.TachesComponent) },
    ],
  },

  // Fallback
  {
    path: '**',
    redirectTo: '',
  },
];
