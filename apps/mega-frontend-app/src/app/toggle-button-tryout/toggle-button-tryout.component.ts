import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NiceToggleButtonComponent } from '../nice-toggle-button/nice-toggle-button.component';

@Component({
  selector: 'mega-app-toggle-button-tryout',
  standalone: true,
  imports: [CommonModule, NiceToggleButtonComponent],
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
