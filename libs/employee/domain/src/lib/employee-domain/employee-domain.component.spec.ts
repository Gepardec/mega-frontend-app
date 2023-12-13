import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeDomainComponent } from './employee-domain.component';

describe('EmployeeDomainComponent', () => {
  let component: EmployeeDomainComponent;
  let fixture: ComponentFixture<EmployeeDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeDomainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
