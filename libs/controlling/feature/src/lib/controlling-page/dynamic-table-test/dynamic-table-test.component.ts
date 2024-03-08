import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Person, persons } from '../../testdata/person.model';
import {
  ColumnSpec,
  CustomColumnDirective,
  DynamicTableComponent,
} from '@gepardec/ngx-gepardec-mat';

@Component({
  selector: 'mega-controlling-feature-dynamic-table-test',
  templateUrl: './dynamic-table-test.component.html',
  styleUrls: ['./dynamic-table-test.component.scss'],
  standalone: true,
  imports: [MatCardModule, DynamicTableComponent, CustomColumnDirective],
})
export class DynamicTableTestComponent {
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
      width: '200px',
    },
  ];

  columnSpecsWithCustomColumn: ColumnSpec<Person>[] = [
    {
      displayedColumn: 'firstname-lastname',
      header: 'Vollständiger Name',
    },
    {
      displayedColumn: 'birthday',
      header: 'Geburtstag',
    },
    {
      displayedColumn: 'age',
      header: 'Alter',
      width: '200px',
    },
  ];
}
