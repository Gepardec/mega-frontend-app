import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Entry } from '../time-violations/entry';

@Component({
  selector: 'mega-employee-ui-time-violation-alert',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatIconModule],
  templateUrl: './time-violation-alert.component.html',
  styleUrls: ['./time-violation-alert.component.scss'],
})
export class TimeViolationAlertComponent {
  @Input({ required: true }) entry!: Entry;
}
