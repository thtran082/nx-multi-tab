import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InlineSVGModule } from "ng-inline-svg-2";
import { HttpClientModule } from "@angular/common/http";
import { MultiTabSharedIconComponent } from './icon/icon.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    InlineSVGModule,
  ],
  exports: [MultiTabSharedIconComponent],
  declarations: [
    MultiTabSharedIconComponent
  ]
})
export class IconModule {
}
