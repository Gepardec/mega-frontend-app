import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControllingDomainComponent } from './controlling-domain.component';

describe('ControllingDomainComponent', () => {
  let component: ControllingDomainComponent;
  let fixture: ComponentFixture<ControllingDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControllingDomainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ControllingDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
