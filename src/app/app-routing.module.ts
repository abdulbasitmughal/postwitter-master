import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutBlankComponent } from './core/components/layout/layout-blank.component';
import { LayoutBasicComponent } from './core/components/layout/layout-basic.component';
import { RoutesAuthGuard } from './core/routes-auth.guard';

const routes: Routes = [
  // Main redirect
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  // un-authorized pages
  {
    path: '',
    component: LayoutBlankComponent,
    children: [
      {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginModule'
      },
      {
        path: 'signup',
        loadChildren: './pages/signup/signup.module#SignupModule'
      }
    ]
  },

  // for authorized pages
  {
    path: '',
    component: LayoutBasicComponent,
    canActivate: [RoutesAuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: './pages/home/home.module#HomeModule'
      },
      {
        path: 'users',
        loadChildren:
          './pages/users/users.module#UsersModule'
      },
      {
        path: 'users/:email/posts',
        loadChildren:
          './pages/user-posts/user-posts.module#UserPostsModule'
      }
    ]
  },

  // other than defined path
  { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
