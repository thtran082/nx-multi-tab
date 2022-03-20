import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreListShellUiLayoutComponent } from './containers/layout/layout.component';
import {ReactiveComponentModule} from "@ngrx/component";
import { MultiTabListTableComponent } from './containers';

@NgModule({
  imports: [CommonModule, ReactiveComponentModule],
  declarations: [
    CoreListShellUiLayoutComponent,
    MultiTabListTableComponent
  ],
  exports: [CoreListShellUiLayoutComponent]
})
export class CoreListShellUiLayoutModule {}
