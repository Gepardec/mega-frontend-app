import {Component, EventEmitter, Input, Output} from '@angular/core';
import { EditorFormFieldComponent } from './editor-form-field/editor-form-field.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
    selector: 'gpx-inline-text-editor',
    templateUrl: './inline-text-editor.component.html',
    styleUrls: ['./inline-text-editor.component.scss'],
    standalone: true,
    imports: [NgIf, MatButtonModule, MatIconModule, EditorFormFieldComponent]
})
export class InlineTextEditorComponent {

  @Input() value: string = '';
  @Input() maximumLetters: number = 500;

  @Input() formFieldWidth: string = '100%'

  @Output() valueChangeEvent: EventEmitter<string> = new EventEmitter<string>();

  showCommentEditor = false;

  onStartEditing(value: string): void {
    this.value = value;
    this.showCommentEditor = true;
  }

  valueChange(value: string): void {
    this.showCommentEditor = false;

    if (this.value !== value) {
      this.valueChangeEvent.emit(value);
    }

    this.value = value;
  }
}
