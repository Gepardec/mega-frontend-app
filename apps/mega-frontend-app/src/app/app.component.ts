import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DatepickerMonthYearComponent } from '../../../../libs/shared/ui/src/lib/datepicker-month-year/datepicker-month-year.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, DatepickerMonthYearComponent],
  selector: 'mega-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mega-frontend-app';

  date = new Date();

  logDate(date: Date) {
    console.log(date);
  }
}
