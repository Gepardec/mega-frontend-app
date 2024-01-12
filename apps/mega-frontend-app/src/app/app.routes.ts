import { Route } from '@angular/router';
import { EmployeeFeatureComponent } from '@mega/employee/feature';
import { LoginComponent } from '../login/login.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: EmployeeFeatureComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
