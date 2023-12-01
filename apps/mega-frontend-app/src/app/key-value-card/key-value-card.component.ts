import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'mega-app-key-value-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatCardModule],
  templateUrl: './key-value-card.component.html',
  styleUrls: ['./key-value-card.component.scss'],
})
export class KeyValueCardComponent {
  @Input({ required: true })
  data!: [
    {
      key: string;
      value: string;
    }
  ];

  @Input({ required: true })
  title!: string;
}
