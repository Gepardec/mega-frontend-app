import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[gpxExpansionContent]',
  standalone: true,
})
export class ExpansionContentDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
