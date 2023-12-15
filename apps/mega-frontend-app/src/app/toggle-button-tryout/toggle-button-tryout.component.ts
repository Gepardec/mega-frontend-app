import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonToggleComponent } from '../../../../../libs/shared/ui/src/lib/button-toggle/button-toggle.component';

@Component({
  selector: 'mega-app-toggle-button-tryout',
  standalone: true,
  imports: [CommonModule, ButtonToggleComponent],
  templateUrl: './toggle-button-tryout.component.html',
  styleUrls: ['./toggle-button-tryout.component.scss'],
})
export class ToggleButtonTryoutComponent {
  selectableOptions = ['hello', 'world'];
  current = this.selectableOptions[1];

  handleSelectChange($event: string) {
    alert($event);
  }
}
