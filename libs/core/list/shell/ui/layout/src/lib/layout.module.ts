import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreListShellUiLayoutComponent } from "./containers/layout/layout.component";
import { ReactiveComponentModule } from "@ngrx/component";
import { MultiTabListTableComponent } from "./containers";
import { IconModule } from "@multitab/shared-icons";

@NgModule({
  declarations: [
    CoreListShellUiLayoutComponent,
    MultiTabListTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    IconModule,
  ],
  exports: [CoreListShellUiLayoutComponent]
})
export class CoreListShellUiLayoutModule {
}
