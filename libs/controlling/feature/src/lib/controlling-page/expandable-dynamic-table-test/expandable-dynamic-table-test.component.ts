import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  AttachToExpansionContentDirective,
  ColumnSpec,
  ExpandableDynamicTableComponent,
  ExpansionContentDirective,
} from '@gepardec/ngx-gepardec-mat';
import { Person, persons } from '../../testdata/person.model';

@Component({
  selector: 'mega-controlling-feature-expandable-dynamic-table-test',
  templateUrl: './expandable-dynamic-table-test.component.html',
  styleUrls: ['./expandable-dynamic-table-test.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    ExpandableDynamicTableComponent,
    MatButtonModule,
    DatePipe,
    ExpansionContentDirective,
    AttachToExpansionContentDirective,
  ],
})
export class ExpandableDynamicTableTestComponent {
  data: Person[] = persons;
  columnSpecs: ColumnSpec<Person>[] = [
    {
      displayedColumn: 'firstname',
      header: 'Vorname',
    },
    {
      displayedColumn: 'lastname',
      header: 'Nachname',
    },
    {
      displayedColumn: 'birthday',
      header: 'Geburtstag',
    },
    {
      displayedColumn: 'age',
      header: 'Alter',
    },
  ];

  constructor(private snackbar: MatSnackBar) {}

  openSnackbar(item: Person): void {
    this.snackbar.open(
      `${item.firstname} ${item.lastname} wurde geklickt!`,
      'OK',
      { duration: 2000 }
    );
  }
}
