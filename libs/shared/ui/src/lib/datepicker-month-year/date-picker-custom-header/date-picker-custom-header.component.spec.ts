import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePickerCustomHeaderComponent } from './date-picker-custom-header.component';

describe('DatePickerCustomHeaderComponent', () => {
  let component: DatePickerCustomHeaderComponent<Date>;
  let fixture: ComponentFixture<DatePickerCustomHeaderComponent<Date>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePickerCustomHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DatePickerCustomHeaderComponent<Date>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
