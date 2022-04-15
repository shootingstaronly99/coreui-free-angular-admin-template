import { Component, OnInit } from '@angular/core';
import { INavData } from '@coreui/angular';
import { ViloyatService } from '../shared/service/viloyat.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  navItems: INavData[] = [
    {
      name: 'Bosh sahifa',
      url: '/dashboard',
      iconComponent: { name: 'cil-speedometer' },
      badge: {
        color: 'info',
        text: 'NEW'
      }
    },
    // {
    //   title: true,
    //   name: 'Hududlar'
    // },
    // {
    //   name: 'Colors',
    //   url: '/theme/colors',
    //   iconComponent: { name: 'cil-drop' }
    // },
    // {
    //   name: 'Typography',
    //   url: '/theme/typography',
    //   linkProps: { fragment: 'someAnchor' },
    //   iconComponent: { name: 'cil-pencil' }
    // },
    // {
    //   name: 'Components',
    //   title: true
    // },
    // {
    //   name: 'Base',
    //   url: '/base',
    //   iconComponent: { name: 'cil-puzzle' },
    //   children: [
    //     {
    //       name: 'Accordion',
    //       url: '/base/accordion',
    //       children: [
    //         {
    //           name: 'Breadcrumbs',
    //           url: '/base/breadcrumbs'
    //         },
    //         {
    //           name: 'Breadcrumbs',
    //           url: '/base/breadcrumbs'
    //         },
    //         {
    //           name: 'Breadcrumbs',
    //           url: '/base/breadcrumbs'
    //         },
    //         {
    //           name: 'Breadcrumbs',
    //           url: '/base/breadcrumbs'
    //         },
    //       ]
    //     },
    //     {
    //       name: 'Breadcrumbs',
    //       url: '/base/breadcrumbs'
    //     },
    //     {
    //       name: 'Cards',
    //       url: '/base/cards'
    //     },
    //     {
    //       name: 'Carousel',
    //       url: '/base/carousel'
    //     },
    //     {
    //       name: 'Collapse',
    //       url: '/base/collapse'
    //     },
    //     {
    //       name: 'List Group',
    //       url: '/base/list-group'
    //     },
    //     {
    //       name: 'Navs & Tabs',
    //       url: '/base/navs'
    //     },
    //     {
    //       name: 'Pagination',
    //       url: '/base/pagination'
    //     },
    //     {
    //       name: 'Placeholder',
    //       url: '/base/placeholder'
    //     },
    //     {
    //       name: 'Popovers',
    //       url: '/base/popovers'
    //     },
    //     {
    //       name: 'Progress',
    //       url: '/base/progress'
    //     },
    //     {
    //       name: 'Spinners',
    //       url: '/base/spinners'
    //     },
    //     {
    //       name: 'Tables',
    //       url: '/base/tables'
    //     },
    //     {
    //       name: 'Tabs',
    //       url: '/base/tabs'
    //     },
    //     {
    //       name: 'Tooltips',
    //       url: '/base/tooltips'
    //     }
    //   ]
    // },
    // {
    //   name: 'Buttons',
    //   url: '/buttons',
    //   iconComponent: { name: 'cil-cursor' },
    //   children: [
    //     {
    //       name: 'Buttons',
    //       url: '/buttons/buttons'
    //     },
    //     {
    //       name: 'Button groups',
    //       url: '/buttons/button-groups'
    //     },
    //     {
    //       name: 'Dropdowns',
    //       url: '/buttons/dropdowns'
    //     },
    //   ]
    // },
    // {
    //   name: 'Forms',
    //   url: '/forms',
    //   iconComponent: { name: 'cil-notes' },
    //   children: [
    //     {
    //       name: 'Form Control',
    //       url: '/forms/form-control'
    //     },
    //     {
    //       name: 'Select',
    //       url: '/forms/select'
    //     },
    //     {
    //       name: 'Checks & Radios',
    //       url: '/forms/checks-radios'
    //     },
    //     {
    //       name: 'Range',
    //       url: '/forms/range'
    //     },
    //     {
    //       name: 'Input Group',
    //       url: '/forms/input-group'
    //     },
    //     {
    //       name: 'Floating Labels',
    //       url: '/forms/floating-labels'
    //     },
    //     {
    //       name: 'Layout',
    //       url: '/forms/layout'
    //     },
    //     {
    //       name: 'Validation',
    //       url: '/forms/validation'
    //     }
    //   ]
    // },
    // {
    //   name: 'Charts',
    //   url: '/charts',
    //   iconComponent: { name: 'cil-chart-pie' }
    // },
    // {
    //   name: 'Icons',
    //   iconComponent: { name: 'cil-star' },
    //   url: '/icons',
    //   children: [
    //     {
    //       name: 'CoreUI Free',
    //       url: '/icons/coreui-icons',
    //       badge: {
    //         color: 'success',
    //         text: 'FREE'
    //       }
    //     },
    //     {
    //       name: 'CoreUI Flags',
    //       url: '/icons/flags'
    //     },
    //     {
    //       name: 'CoreUI Brands',
    //       url: '/icons/brands'
    //     }
    //   ]
    // },
    // {
    //   name: 'Notifications',
    //   url: '/notifications',
    //   iconComponent: { name: 'cil-bell' },
    //   children: [
    //     {
    //       name: 'Alerts',
    //       url: '/notifications/alerts'
    //     },
    //     {
    //       name: 'Badges',
    //       url: '/notifications/badges'
    //     },
    //     {
    //       name: 'Modal',
    //       url: '/notifications/modal'
    //     },
    //     {
    //       name: 'Toast',
    //       url: '/notifications/toasts'
    //     }
    //   ]
    // },
    // {
    //   name: 'Widgets',
    //   url: '/widgets',
    //   iconComponent: { name: 'cil-calculator' },
    //   badge: {
    //     color: 'info',
    //     text: 'NEW'
    //   }
    // },

    // {
    //   name: 'Pages',
    //   url: '/login',
    //   iconComponent: { name: 'cil-star' },
    //   children: [
    //     {
    //       name: 'Login',
    //       url: '/login'
    //     },
    //     {
    //       name: 'Register',
    //       url: '/register'
    //     },
    //     {
    //       name: 'Error 404',
    //       url: '/404'
    //     },
    //     {
    //       name: 'Error 500',
    //       url: '/500'
    //     }
    //   ]
    // },
  ];
  ;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  constructor(private viloyatSerive: ViloyatService) { }

  ngOnInit(): void {
    this.viloyatSerive.getAllFull().subscribe((data: any) => {
      if (data && data[0]) {
        let viloyatlar: any[] = [{
          title: true,
          name: 'Hududlar',
        }];
        for (let v of data) {
          let tumanlar = [];
          for (let t of v.tumans) {
            let sektorlar = [];
            for (let s of t.sektors) {
              let mahallalar = [];
              for (let m of s.mahallas) {
                mahallalar.push({
                  name: m.name,
                  url: 'mahalla/' + m.id,
                  iconComponent: { name: 'cil-industry' },

                })
              }
              sektorlar.push({
                name: s.name,
                url: "sektors/" + s.id,
                iconComponent: { name: 'cil-institution' },
                children: mahallalar
              });
            }
            tumanlar.push({
              name: t.name,
              url: "tuman/" + t.id,
              iconComponent: { name: 'cil-institution' },
              children: sektorlar
            })

          }
          viloyatlar.push({
            name: v.name,
            url: 'viloyat/' + v.id,
            iconComponent: { name: 'cil-industry' },
            children: tumanlar
          })
        }
        this.navItems = [...this.navItems, ...viloyatlar];


      }
    })
  }

}
