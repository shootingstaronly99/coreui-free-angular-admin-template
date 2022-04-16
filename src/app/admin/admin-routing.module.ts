import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ChatComponent } from './components/chat/chat.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ElonComponent } from './components/elon/elon.component';
import { MahallaComponent } from './components/mahalla/mahalla.component';
import { RequestComponent } from './components/request/request.component';
import { SektorComponent } from './components/sektor/sektor.component';
import { SubjectComponent } from './components/subject/subject.component';
import { TashkilotComponent } from './components/tashkilot/tashkilot.component';
import { TumanComponent } from './components/tuman/tuman.component';
import { ViloyatComponent } from './components/viloyat/viloyat.component';
import { XodimComponent } from './components/xodim/xodim.component';

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
      },
      {
        path: 'tashkilot',
        component: TashkilotComponent
      },
      {
        path: 'request',
        component: RequestComponent 
      },
      {
        path: 'subject',
        component: SubjectComponent
      },
      {
        path: 'hodim',
        component: XodimComponent 
      },
      {
        path: 'chat',
        component: ChatComponent 
      },
      {
        path: 'elon',
        component: ElonComponent 
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
