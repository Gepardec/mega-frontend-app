import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { DynamicTableTestComponent } from './dynamic-table-test/dynamic-table-test.component';
import { ExpandableDynamicTableTestComponent } from './expandable-dynamic-table-test/expandable-dynamic-table-test.component';
import { FileUploadTestComponent } from './file-upload-test/file-upload-test.component';
import { FileUploadWithTableTestComponent } from './file-upload-with-table-test/file-upload-with-table-test.component';
import { InlineTextEditorTestComponent } from './inline-text-editor-test/inline-text-editor-test.component';

@Component({
  selector: 'mega-controlling-feature-controlling-page',
  standalone: true,
  imports: [
    CommonModule,
    DynamicTableTestComponent,
    ExpandableDynamicTableTestComponent,
    FileUploadTestComponent,
    FileUploadWithTableTestComponent,
    InlineTextEditorTestComponent,
    MatDividerModule,
  ],
  templateUrl: './controlling-page.component.html',
  styleUrls: ['./controlling-page.component.scss'],
})
export class ControllingPageComponent {}
