import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreListShellMainComponent } from './containers';
import { MultitabListShellMainRoutes } from './main.routing';
import { ReactiveComponentModule } from '@ngrx/component';

const MODULES = [CommonModule, MultitabListShellMainRoutes, ReactiveComponentModule];

@NgModule({
  imports: [...MODULES],
  declarations: [CoreListShellMainComponent],
})
export class CoreListShellMainModule {}
