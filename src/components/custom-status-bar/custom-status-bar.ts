import { Component,Input } from '@angular/core';

/**
 * Generated class for the CustomStatusBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-status-bar',
  templateUrl: 'custom-status-bar.html'
})

export class CustomStatusBarComponent {
  @Input() progressBarWidth:any;
  constructor() {
  }

}
