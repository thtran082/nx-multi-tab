import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {MultitabMainStore} from "@multitab/main/shared/data-access/store";

@Component({
  selector: 'nx-multi-tab-list-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoreListShellMainComponent {
  public readonly vm$ = this.multitabMainStore.vm$;

  constructor(protected readonly multitabMainStore: MultitabMainStore) {
  }
}
