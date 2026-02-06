import { Component, input, output } from '@angular/core';
import { DashboardCard } from '../../../core/models/dashboard-card.model';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  templateUrl: './dashboard-card.html',
})
export class DashboardCardComponent {

  card = input.required<DashboardCard>();
  cardClick = output<void>();
}
