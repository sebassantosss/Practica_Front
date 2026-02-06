import { Component, inject } from '@angular/core';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    Header,
    Sidebar,
    RouterOutlet
  ],
  templateUrl: './shell.html',
  styleUrls: ['./shell.css'],
})
export class Shell {
  layout = inject(LayoutService);
}

