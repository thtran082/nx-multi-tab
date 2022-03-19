import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'multitab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'multitab';
}
