import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';

const routes: Routes = [
  { path: 'profile-photo', component: ProfilePhotoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
