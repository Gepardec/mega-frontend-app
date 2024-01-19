import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePickerCustomHeaderComponent } from './date-picker-custom-header.component';
import { MatCalendar } from '@angular/material/datepicker';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { DateFnsAdapter } from '@angular/material-date-fns-adapter';
import { deAT } from 'date-fns/locale';
import { MY_FORMATS } from '../datepicker-month-year.component';

describe('DatePickerCustomHeaderComponent', () => {
  let component: DatePickerCustomHeaderComponent<Date>;
  let fixture: ComponentFixture<DatePickerCustomHeaderComponent<Date>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePickerCustomHeaderComponent],
      providers: [
        MatCalendar,
        {
          provide: DateAdapter,
          useClass: DateFnsAdapter,
          deps: [MAT_DATE_LOCALE, MAT_DATE_FORMATS],
        },
        { provide: MAT_DATE_LOCALE, useValue: deAT },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DatePickerCustomHeaderComponent<Date>);
    component = fixture.componentInstance;

    component['_calendar'].activeDate = new Date();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
