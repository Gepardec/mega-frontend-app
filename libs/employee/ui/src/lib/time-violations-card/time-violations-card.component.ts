import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Entry } from './entry';
import { TimeViolationAlertComponent } from '../time-violation-alert/time-violation-alert.component';

@Component({
  selector: 'mega-employee-ui-time-violations-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    TimeViolationAlertComponent,
  ],
  templateUrl: './time-violations-card.component.html',
  styleUrls: ['./time-violations-card.component.scss'],
})
export class TimeViolationsCardComponent {
  @Input({ required: true })
  title!: string;

  @Input({ required: true })
  entries!: Entry[];
}
