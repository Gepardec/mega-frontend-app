import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonToggleComponent,
  ButtonToggleOption,
} from '../../../../../libs/shared/ui/src/lib/button-toggle/button-toggle.component';

@Component({
  selector: 'mega-app-toggle-button-tryout',
  standalone: true,
  imports: [CommonModule, ButtonToggleComponent],
  templateUrl: './toggle-button-tryout.component.html',
  styleUrls: ['./toggle-button-tryout.component.scss'],
})
export class ToggleButtonTryoutComponent {
  selectableOptions: ButtonToggleOption[] = [
    { label: 'Mein MEGA', value: 'mein-mega' },
    { label: 'Controlling', value: 'controlling' },
  ];
  current = this.selectableOptions[1].value;

  selectableIconOptions: ButtonToggleOption[] = [
    { value: 'mein-mega', icon: 'percent' },
    { value: 'controlling', icon: 'watch_later' },
  ];
  currentIconVal = this.selectableIconOptions[1].value;

  selectableMixedOptions: ButtonToggleOption[] = [
    { value: 'mein-mega', icon: 'percent', label: 'Mein Mega' },
    { value: 'controlling', icon: 'watch_later' },
  ];
  currenMixedVal = this.selectableMixedOptions[1].value;

  handleSelectChange($event: string) {
    alert($event);
  }
}
