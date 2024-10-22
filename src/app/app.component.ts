import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent {
  title = 'angular18';

  appName = signal('Angular 18 Tutorial');

  constructor() {
    setTimeout(() => {
      this.title = 'angular 17 is old now';
      this.appName.set('Angular 18.1 new feature');
    }, 3000);
  }
}
