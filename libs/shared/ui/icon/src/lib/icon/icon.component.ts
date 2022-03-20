import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { BackgroundColorEnum, ColorMode, IconStyleEnum, TextColorEnum } from "@multitab/shared-enums";

@Component({
  selector: 'multitab-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MultiTabSharedIconComponent implements OnInit {
  @Input() public icon!: IconStyleEnum;
  @Input() public color: TextColorEnum | BackgroundColorEnum = TextColorEnum.Primary1;
  @Input() public mode: ColorMode = ColorMode.Text;

  constructor() {
  }

  ngOnInit(): void {
  }
}
