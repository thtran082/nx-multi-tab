import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MultitabMainStore } from '@multitab/main/shared/data-access/store';

@Component({
  selector: 'multitab-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MultitabMainStore],
})
export class CoreShellMainComponent {
  public readonly vm$ = this.store.vm$;

  constructor(protected readonly store: MultitabMainStore) {
    // TODO:
  }
}
