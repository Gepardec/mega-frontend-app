import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { DatepickerMonthYearComponent } from './datepicker-month-year.component';

describe('DatepickerMonthYearComponent', () => {
  let component: DatepickerMonthYearComponent;
  let fixture: ComponentFixture<DatepickerMonthYearComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        DatepickerMonthYearComponent,
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DatepickerMonthYearComponent);
        component = fixture.componentInstance;
      });
  }));

  it('#should create', () => {
    expect(component).toBeTruthy();
  });
});
