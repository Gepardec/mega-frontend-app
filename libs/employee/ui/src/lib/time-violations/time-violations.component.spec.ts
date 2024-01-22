import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeViolationsComponent } from '@mega/employee/ui';

describe('ErrorUiComponent', () => {
  let component: TimeViolationsComponent;
  let fixture: ComponentFixture<TimeViolationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeViolationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TimeViolationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
