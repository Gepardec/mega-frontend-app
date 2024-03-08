import { Route } from '@angular/router';
import { EmployeeFeatureComponent } from '@mega/employee/feature';
import { ControllingPageComponent } from '@mega/controlling/feature';

export const appRoutes: Route[] = [
  {
    path: 'mein-mega',
    component: EmployeeFeatureComponent,
  },
  {
    path: 'controlling',
    component: ControllingPageComponent,
  },
  {
    path: '',
    redirectTo: 'mein-mega',
    pathMatch: 'full',
  },
];
