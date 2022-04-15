import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MahallaComponent } from './mahalla.component';

const routes: Routes = [
  {
    path: '',
    component: MahallaComponent,
    children: [
        {
          path: '',
          redirectTo: 'dashboard'
        }, 
        {
          path: 'dashboard',
          component: DashboardComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MahallaRoutingModule { }
