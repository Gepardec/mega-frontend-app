import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Entry, TimeViolationsCardComponent } from '@mega/employee/ui';

@Component({
  selector: 'mega-employee-feature-employee-feature',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    TimeViolationsCardComponent,
  ],
  templateUrl: './employee-feature.component.html',
  styleUrls: ['./employee-feature.component.scss'],
})
export class EmployeeFeatureComponent {
  dummyEntries: Entry[] = [
    {
      msg: 'Arbeitszeit wurde überschritten',
      dates: [new Date(), new Date()],
    },
    {
      msg: 'Pause nicht eingehalten',
      dates: [new Date(), new Date()],
    },
  ];
}
