import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  MatDatepicker,
  MatDatepickerInputEvent,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatDateFormats,
  NativeDateModule,
} from '@angular/material/core';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { DatePickerCustomHeaderComponent } from '../date-picker-custom-header/date-picker-custom-header.component';

export const MY_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'YYYY-MM',
  },
  display: {
    dateInput: 'MMMM YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'mega-shared-ui-datepicker-month-year',
  templateUrl: './datepicker-month-year.component.html',
  styleUrls: ['./datepicker-month-year.component.scss'],
  standalone: true,
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }],
  imports: [
    MatFormFieldModule,
    NativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class DatepickerMonthYearComponent {
  @Input({ required: true }) date!: Date;
  @Output() dateChanged: EventEmitter<Date> = new EventEmitter<Date>();

  dateFormControl = new FormControl(this.date);
  maxDate: Date = new Date();

  monthChangedHandler(
    normalizedMonthAndYear: Date,
    datepicker: MatDatepicker<Date>
  ) {
    this.dateFormControl.setValue(normalizedMonthAndYear);
    this.dateChanged.emit(normalizedMonthAndYear);
    datepicker.close();
  }

  protected readonly DatePickerCustomHeaderComponent =
    DatePickerCustomHeaderComponent;
}
