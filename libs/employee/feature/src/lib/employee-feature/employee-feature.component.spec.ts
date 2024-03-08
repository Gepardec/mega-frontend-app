import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeFeatureComponent } from './employee-feature.component';
import { TestingModule } from '@mega/testing';

describe('EmployeeFeatureComponent', () => {
  let component: EmployeeFeatureComponent;
  let fixture: ComponentFixture<EmployeeFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeFeatureComponent, TestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
