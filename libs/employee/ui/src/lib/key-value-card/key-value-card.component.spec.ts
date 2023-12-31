import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeyValueCardComponent } from './key-value-card.component';

describe('KeyValueCardComponent', () => {
  let component: KeyValueCardComponent;
  let fixture: ComponentFixture<KeyValueCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyValueCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KeyValueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
