import { Injectable, signal, computed } from '@angular/core';
import { DashboardCard } from '../models/dashboard-card.model';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardService {

  private readonly _cards = signal<DashboardCard[]>([
    { title: 'Usuarios', value: 120 },
    { title: 'Procesos', value: 45 },
    { title: 'Errores', value: 3 },
    { title: 'Archivos', value: 87 }
  ]);

  readonly cards = this._cards.asReadonly();

   readonly totalValue = computed(() =>
    this._cards().reduce((acc, card) => acc + card.value, 0)
  );

  incrementCard(title: string) {
    this._cards.update((cards: DashboardCard[]) =>
      cards.map((card: DashboardCard) =>
        card.title === title ? { ...card, value: card.value  + 1 } : card
      )
    );
  }

}
