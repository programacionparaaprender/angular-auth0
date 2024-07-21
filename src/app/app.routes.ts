import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
      path:'profile',
      component: ProfileComponent,
      canActivate: [AuthGuard]
    }
];