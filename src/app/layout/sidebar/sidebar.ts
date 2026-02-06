import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutService } from '../../core/services/layout.service';
import { Icon } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, Icon],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class Sidebar {
  layout = inject(LayoutService);

  items = signal([
    { route: '/', icon: 'dashboard', label: 'Dashboard' },
    { route: '/reports', icon: 'assessment', label: 'Reportes' },
    { route: '/settings', icon: 'settings', label: 'Configuración' },
  ]);
}
