import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AvatarComponent, DatepickerMonthYearComponent } from '@mega/shared/ui';
import { UserService } from '../auth/user/user.service';
import { map } from 'rxjs';
import { User } from '../auth/model/User';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mega-app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    AvatarComponent,
    DatepickerMonthYearComponent,
    MatTooltipModule,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // TODO input sobald möglich
  dummyDate: Date = new Date();
  userService = inject(UserService);
  userInitials$ = this.userService.user$.pipe(map(this.extractInitials));

  private extractInitials(user?: User) {
    let initals = '';
    initals += user?.firstname?.trim()[0] || '';
    initals += user?.lastname?.trim()[0] || '';

    return initals;
  }
}
