import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Entry } from './entry';

@Component({
  selector: 'mega-employee-ui-error-ui',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatChipsModule],
  templateUrl: './error-ui.component.html',
  styleUrls: ['./error-ui.component.scss'],
})
export class ErrorUiComponent {

  @Input({ required: true })
  title!: string;

  @Input({required: true})
  entries!: Entry[]

}
