import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeViolationsCardComponent } from './time-violations-card.component';

describe('ErrorUiComponent', () => {
  let component: TimeViolationsCardComponent;
  let fixture: ComponentFixture<TimeViolationsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeViolationsCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeViolationsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
