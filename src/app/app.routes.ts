import { Routes } from '@angular/router';
import { Shell } from './layout/shell/shell';
import { Dashboard } from './pages/dashboard/dashboard';
import { Settings } from './pages/settings/settings';
import { Reports } from './pages/reports/reports';

export const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      { path: '', component: Dashboard },
      { path: 'settings', component: Settings },
      { path: 'reports', component: Reports },
    ],
  },
];
