import { ChangeDetectorRef, Component, Inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Subject, takeUntil } from 'rxjs';
import { MatCalendar } from '@angular/material/datepicker';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MatDateFormats,
} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'mega-shared-ui-date-picker-custom-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './date-picker-custom-header.component.html',
  styleUrls: ['./date-picker-custom-header.component.scss'],
})
export class DatePickerCustomHeaderComponent<D> implements OnDestroy {
  private _destroyed = new Subject<void>();

  constructor(
    private _calendar: MatCalendar<D>,
    private _dateAdapter: DateAdapter<D>,
    @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef
  ) {
    _calendar.stateChanges
      .pipe(takeUntil(this._destroyed))
      .subscribe(() => cdr.markForCheck());
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  get periodLabel() {
    return this._dateAdapter
      .format(
        this._calendar.activeDate,
        this._dateFormats.display.monthYearLabel
      )
      .toLocaleUpperCase();
  }

  previousClicked() {
    this._calendar.activeDate = this._dateAdapter.addCalendarYears(
      this._calendar.activeDate,
      -1
    );
  }

  nextClicked() {
    this._calendar.activeDate = this._dateAdapter.addCalendarYears(
      this._calendar.activeDate,
      1
    );
  }
}
