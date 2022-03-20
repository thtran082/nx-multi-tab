import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { IUser, ListStore } from '@multitab/list-store';
import { BackgroundColorEnum, IconStyleEnum, TextColorEnum } from "@multitab/shared-enums";

@Component({
  selector: 'multitab-core-list-layout-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ListStore],
})
export class MultiTabListTableComponent implements OnInit {
  @Input() public data: IUser[] = [];

  public IconStyle = IconStyleEnum;
  public TextColorEnum = TextColorEnum;
  public BackgroundColorEnum = BackgroundColorEnum;

  constructor() {
  }

  ngOnInit(): void {
  }

  public onClick(url: string): void {
    window.open(url);
  }

}
