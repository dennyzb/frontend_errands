
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { HomeComponent } from './public/home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './public/about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

library.add(faEdit);

export const routes: Routes = [
  { path: 'public', loadChildren: () => import('../app/public/public.module').then(m => m.PublicModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '', canActivate: [authGuard], loadChildren: () => import('./dash/dash.module').then(m => m.DashModule) },
  { path: 'dash', loadChildren: () => import('../app/dash/dash.module').then(m => m.DashModule) },
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('../app/user/user.module').then(m => m.UserModule) },
  { path: '**', component:NotfoundComponent},
  { path: 'home', component: HomeComponent }, 
  { path: 'about', component: AboutComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FontAwesomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }