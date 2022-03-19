import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreShellUiLayoutComponent } from './containers/layout/layout.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  declarations: [
    CoreShellUiLayoutComponent
  ],
  exports: [
    CoreShellUiLayoutComponent,
  ]
})
export class CoreShellUiLayoutModule {}
