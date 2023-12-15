import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NiceToggleButtonComponent } from './nice-toggle-button.component';

describe('NiceToggleButtonComponent', () => {
  let component: NiceToggleButtonComponent;
  let fixture: ComponentFixture<NiceToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NiceToggleButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NiceToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
