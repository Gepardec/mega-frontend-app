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
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'mega-shared-ui-button-toggle',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule, FormsModule, MatIconModule],
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonToggleComponent {
  @Input({ required: true }) selectableOptions!: ButtonToggleOption[];
  @Input({ required: true }) selected!: ButtonToggleOption['value'];
  @Output() selectedChange = new EventEmitter<ButtonToggleOption['value']>();

  readonly ZERO_WIDTH_SPACE = '\u200B';
}

// either label or icon is required
export type ButtonToggleOption =
  | {
      label: string;
      value: string;
      icon?: string;
    }
  | {
      label?: string;
      value: string;
      icon: string;
    };
