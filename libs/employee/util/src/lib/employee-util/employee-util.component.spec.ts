import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeUtilComponent } from './employee-util.component';

describe('EmployeeUtilComponent', () => {
  let component: EmployeeUtilComponent;
  let fixture: ComponentFixture<EmployeeUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeUtilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
