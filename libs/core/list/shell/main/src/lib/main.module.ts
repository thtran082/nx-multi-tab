import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreListShellMainComponent } from './containers';
import { MultitabListShellMainRoutes } from './main.routing';
import { ReactiveComponentModule } from '@ngrx/component';
import { CoreListShellUiLayoutModule } from '@multitab/core-list-shell-ui-layout';

const MODULES = [CommonModule, MultitabListShellMainRoutes, ReactiveComponentModule, CoreListShellUiLayoutModule];

@NgModule({
  imports: [...MODULES],
  declarations: [CoreListShellMainComponent],
})
export class CoreListShellMainModule {}
