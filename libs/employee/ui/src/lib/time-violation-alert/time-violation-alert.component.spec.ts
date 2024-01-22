import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeViolationAlertComponent } from './time-violation-alert.component';

describe('TimeViolationAlertComponent', () => {
  let component: TimeViolationAlertComponent;
  let fixture: ComponentFixture<TimeViolationAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeViolationAlertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeViolationAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
