import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[gpxCustomColumn]',
  standalone: true,
})
export class CustomColumnDirective {
  @Input('gpxCustomColumn') columnName!: string;

  constructor(public templateRef: TemplateRef<any>) {}
}
