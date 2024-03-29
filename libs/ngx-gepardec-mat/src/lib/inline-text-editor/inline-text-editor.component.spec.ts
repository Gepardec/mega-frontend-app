import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTextEditorComponent } from './inline-text-editor.component';

describe('InlineTextEditorComponent', () => {
  let component: InlineTextEditorComponent;
  let fixture: ComponentFixture<InlineTextEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineTextEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InlineTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
