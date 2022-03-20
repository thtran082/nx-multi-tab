import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import {ListStore, StatusEnum} from "@multitab/list-store";

@Component({
  selector: 'multitab-core-list-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ListStore]
})
export class CoreListShellUiLayoutComponent implements OnInit {

  public readonly vm$ = this.store.vm$;
  public readonly StatusEnum = StatusEnum;

  constructor(
    protected readonly store: ListStore
  ) { }

  ngOnInit(): void {
  }

}
