import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControllingUtilComponent } from './controlling-util.component';

describe('ControllingUtilComponent', () => {
  let component: ControllingUtilComponent;
  let fixture: ComponentFixture<ControllingUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControllingUtilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ControllingUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
