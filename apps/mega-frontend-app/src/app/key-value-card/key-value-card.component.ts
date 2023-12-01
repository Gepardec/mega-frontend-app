import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mega-app-key-value-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './key-value-card.component.html',
  styleUrls: ['./key-value-card.component.scss'],
})
export class KeyValueCardComponent implements OnInit {
  @Input()
  input!: string;

  ngOnInit(): void {
    console.log(this.input);
  }
}
