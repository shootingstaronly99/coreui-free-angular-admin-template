import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { Lavozim } from './shared/model/lavozimlar';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';
import {UserRouteAccessService} from './core/user-route-access.service'
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admin',
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule),
    canActivate: [UserRouteAccessService],
    data: {
      authorities: [Lavozim.ADMIN, Lavozim.SUPER_ADMIN, Lavozim.HOKIM]
    }
  },
  {
    path: 'mahalla/:id',
    loadChildren: () => import("./mahalla/mahalla.module").then(m => m.MahallaModule),
    canActivate: [UserRouteAccessService],
    data: {
      authorities: [Lavozim.ADMIN, Lavozim.SUPER_ADMIN, Lavozim.HOKIM, Lavozim.SEKTOR, Lavozim.MAHALLA]
    }
  }


  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '',
  //   component: DefaultLayoutComponent,
  //   data: {
  //     title: 'Home'
  //   },
  //   children: [
  //     {
  //       path: 'dashboard',
  //       loadChildren: () =>
  //         import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
  //     },
  //     {
  //       path: 'theme',
  //       loadChildren: () =>
  //         import('./views/theme/theme.module').then((m) => m.ThemeModule)
  //     },
  //     {
  //       path: 'base',
  //       loadChildren: () =>
  //         import('./views/base/base.module').then((m) => m.BaseModule)
  //     },
  //     {
  //       path: 'buttons',
  //       loadChildren: () =>
  //         import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
  //     },
  //     {
  //       path: 'forms',
  //       loadChildren: () =>
  //         import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
  //     },
  //     {
  //       path: 'charts',
  //       loadChildren: () =>
  //         import('./views/charts/charts.module').then((m) => m.ChartsModule)
  //     },
  //     {
  //       path: 'icons',
  //       loadChildren: () =>
  //         import('./views/icons/icons.module').then((m) => m.IconsModule)
  //     },
  //     {
  //       path: 'notifications',
  //       loadChildren: () =>
  //         import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
  //     },
  //     {
  //       path: 'widgets',
  //       loadChildren: () =>
  //         import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
  //     },
  //     {
  //       path: 'pages',
  //       loadChildren: () =>
  //         import('./views/pages/pages.module').then((m) => m.PagesModule)
  //     },
  //   ]
  // },
  // {
  //   path: '404',
  //   component: Page404Component,
  //   data: {
  //     title: 'Page 404'
  //   }
  // },
  // {
  //   path: '500',
  //   component: Page500Component,
  //   data: {
  //     title: 'Page 500'
  //   }
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   data: {
  //     title: 'Login Page'
  //   }
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  //   data: {
  //     title: 'Register Page'
  //   }
  // },
  // {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


