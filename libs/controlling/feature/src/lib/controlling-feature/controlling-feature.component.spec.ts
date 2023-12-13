import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControllingFeatureComponent } from './controlling-feature.component';

describe('ControllingFeatureComponent', () => {
  let component: ControllingFeatureComponent;
  let fixture: ComponentFixture<ControllingFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControllingFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ControllingFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
