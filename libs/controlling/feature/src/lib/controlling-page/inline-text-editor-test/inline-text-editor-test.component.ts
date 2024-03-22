import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { InlineTextEditorComponent } from '@gepardec/ngx-gepardec-mat';

@Component({
  selector: 'mega-controlling-feature-inline-text-editor-test',
  templateUrl: './inline-text-editor-test.component.html',
  styleUrls: ['./inline-text-editor-test.component.scss'],
  standalone: true,
  imports: [MatCardModule, InlineTextEditorComponent],
})
export class InlineTextEditorTestComponent {
  valueFirstExample: string = 'text-field wants to be edited';
  valueSecondExample: string = 'edit field';

  valueChangeFirstExample(valueFirstExample: string): void {
    this.valueFirstExample = valueFirstExample;
  }

  valueChangeSecondExample(valueSecondExample: string): void {
    this.valueSecondExample = valueSecondExample;
  }
}
