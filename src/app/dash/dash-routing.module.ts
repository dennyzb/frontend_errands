import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SenderIndexComponent } from './sender-index/sender-index.component';
import { RunnerIndexComponent } from './runner-index/runner-index.component';
import { ArtisanIndexComponent } from './artisan-index/artisan-index.component';

const routes: Routes = [
  { path: 'sender', component: SenderIndexComponent},
  { path: 'runner', component: RunnerIndexComponent},
  { path: 'artisan', component: ArtisanIndexComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
