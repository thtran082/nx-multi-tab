import { Route, RouterModule } from '@angular/router';
import { CoreShellMainComponent } from '@core-shell';

const routes: Route[] = [
  {
    path: '',
    component: CoreShellMainComponent,
    children: [
      {
        path: '',
        redirectTo: '/list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        loadChildren: () => import('@multitab/core-list-shell-main').then(m => m.CoreListShellMainModule)
      }
    ],
  }
];

export const MultitabCoreShellMainRoutes = RouterModule.forRoot(routes);
