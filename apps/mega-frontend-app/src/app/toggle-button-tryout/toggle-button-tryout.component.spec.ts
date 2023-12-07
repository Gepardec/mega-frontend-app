import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleButtonTryoutComponent } from './toggle-button-tryout.component';

describe('ToggleButtonTryoutComponent', () => {
  let component: ToggleButtonTryoutComponent;
  let fixture: ComponentFixture<ToggleButtonTryoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleButtonTryoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleButtonTryoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
