import { Component } from '@angular/core';
import { DashboardService } from '../../core/services/dashboard.service';
import { DashboardCardComponent } from './dashboard-card/dashboard-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DashboardCardComponent],
  templateUrl: './dashboard.html',
})
export class Dashboard {

  cards;
  total;

  constructor(private dashboardService: DashboardService) {
    this.cards = this.dashboardService.cards;
    this.total = this.dashboardService.totalValue;
  }

  onCardClick(title: string) {
    this.dashboardService.incrementCard(title);
  }
}
