import { Component, animate, state, style, transition, trigger } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger(
      'animate',
      [
        state('off', style({width: '0px'})),
        state('on', style({width: '750px'})),
        transition('off <=> on', animate(500))
      ]
    )
  ]
})
export class AppComponent {
  animate = false;
}
