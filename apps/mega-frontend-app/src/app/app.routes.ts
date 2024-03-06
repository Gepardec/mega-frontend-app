import { Route } from '@angular/router';
import { EmployeeFeatureComponent } from '@mega/employee/feature';

export const appRoutes: Route[] = [
  {
    path: 'mein-mega',
    component: EmployeeFeatureComponent,
  },
  {
    path: '',
    redirectTo: 'mein-mega',
    pathMatch: 'full',
  },
];
