import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreShellMainComponent } from './main/main.component';
import { MultitabCoreShellMainRoutes } from './main.routing';
import { CoreShellUiLayoutModule } from '@core-shell-ui-layout';
import { ReactiveComponentModule } from '@ngrx/component';
import { environment, APP_CONFIG_URL } from '@shared-utils-environments';

const MODULES = [
  CommonModule,
  MultitabCoreShellMainRoutes,
  CoreShellUiLayoutModule,
  ReactiveComponentModule,
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [
    CoreShellMainComponent
  ],
  providers: [
    // { }
    { provide: APP_CONFIG_URL, useValue: environment },
  ]
})
export class CoreShellMainModule {}
