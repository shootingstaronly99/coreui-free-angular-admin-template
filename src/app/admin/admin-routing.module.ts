import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MahallaComponent } from './components/mahalla/mahalla.component';
import { SektorComponent } from './components/sektor/sektor.component';
import { TumanComponent } from './components/tuman/tuman.component';
import { ViloyatComponent } from './components/viloyat/viloyat.component';
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: $localize`Dashboard`
        }
      },
      {
        path: 'viloyat/:id',
        component: ViloyatComponent
      },
      {
        path: 'tuman/:id',
        component: TumanComponent
      },
      {
        path: 'sektor/:id',
        component: SektorComponent
      },
      {
        path: 'mahalla/:id',
        component: MahallaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
