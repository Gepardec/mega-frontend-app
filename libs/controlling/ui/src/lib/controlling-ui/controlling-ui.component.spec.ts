import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControllingUiComponent } from './controlling-ui.component';

describe('ControllingUiComponent', () => {
  let component: ControllingUiComponent;
  let fixture: ComponentFixture<ControllingUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControllingUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ControllingUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
