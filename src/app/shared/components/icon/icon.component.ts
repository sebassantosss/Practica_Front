import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <span class="material-icons text-xl">
      {{ name }}
    </span>
  `,
})
export class Icon {
  @Input({ required: true }) name!: string;
}
