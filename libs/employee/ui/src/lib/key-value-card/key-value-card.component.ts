import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'mega-employee-ui-key-value-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatCardModule, NgOptimizedImage],
  templateUrl: './key-value-card.component.html',
  styleUrls: ['./key-value-card.component.scss'],
})
export class KeyValueCardComponent {
  @Input({ required: true })
  data!: Record<string, string>[];

  @Input({ required: true })
  title!: string;

  @Input({ required: true })
  link!: string;

  @Input({ required: true })
  linkDisplayName!: string;
}
