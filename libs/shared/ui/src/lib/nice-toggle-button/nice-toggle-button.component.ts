import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'mega-app-nice-toggle-button',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule, FormsModule],
  templateUrl: './nice-toggle-button.component.html',
  styleUrls: ['./nice-toggle-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NiceToggleButtonComponent {
  @Input({ required: true }) selectableOptions: string[] = ['hello', 'world'];
  @Input({ required: true }) selected!: string;
  @Output() selectedChange = new EventEmitter<string>();
}
