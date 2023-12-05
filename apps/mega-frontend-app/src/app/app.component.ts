import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { KeyValueCardComponent } from './key-value-card/key-value-card.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, KeyValueCardComponent],
  selector: 'mega-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mega-frontend-app';
}
