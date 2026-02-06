import { Injectable, signal } from '@angular/core';
import { NavigationItem } from '../models/navigation-item.model';

@Injectable({ providedIn: 'root' })
export class NavigationService {

  readonly items = signal<NavigationItem[]>([
    {
      label: 'Dashboard',
      route: '/',
      icon: 'dashboard',
    },
    {
      label: 'Settings',
      route: '/settings',
      icon: 'settings',
    },
  ]);
}
