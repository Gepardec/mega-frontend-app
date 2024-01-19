import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatDateFormats,
} from '@angular/material/core';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { deAT } from 'date-fns/locale';
import { DatePickerCustomHeaderComponent } from './date-picker-custom-header/date-picker-custom-header.component';
import {
  DateFnsAdapter,
  MatDateFnsModule,
} from '@angular/material-date-fns-adapter';

export const MY_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'YYYY-MM',
  },
  display: {
    dateInput: 'MMMM yyyy',
    monthYearLabel: 'MMM yyyy',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM yyyy',
  },
};

@Component({
  selector: 'mega-shared-ui-datepicker-month-year',
  templateUrl: './datepicker-month-year.component.html',
  styleUrls: ['./datepicker-month-year.component.scss'],
  standalone: true,
  providers: [
    {
      provide: DateAdapter,
      useClass: DateFnsAdapter,
      deps: [MAT_DATE_LOCALE, MAT_DATE_FORMATS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: deAT },
  ],
  imports: [
    MatFormFieldModule,
    MatDateFnsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class DatepickerMonthYearComponent {
  @Input({ required: true }) date!: Date;
  @Output() dateChanged: EventEmitter<Date> = new EventEmitter<Date>();

  dateFormControl: FormControl<Date | null> = new FormControl(this.date);

  // The last month you should be able to select is the current month
  maxDate: Date = new Date();

  // This is a custom UI-component for the datepicker header
  protected readonly DatePickerCustomHeaderComponent =
    DatePickerCustomHeaderComponent;

  monthChangedHandler(newDate: Date, datepicker: MatDatepicker<Date>) {
    this.dateFormControl.setValue(newDate);
    this.dateChanged.emit(newDate);
    datepicker.close();
  }
}
