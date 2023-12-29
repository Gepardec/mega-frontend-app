import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mega-shared-ui-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {}
