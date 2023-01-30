import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components

import { PageComponent } from './pages/page/page.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { FeedBusinessComponent } from './pages/feed-business/feed-business.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },

      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'feed-business',
        component: FeedBusinessComponent,
      },
      {
        path: 'admin-dashboard',
        component: DashbordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
