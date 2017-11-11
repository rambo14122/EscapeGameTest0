import {Component, Input} from '@angular/core';

/**
 * Generated class for the LocationItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'location-item',
  templateUrl: 'location-item.html'
})
export class LocationItemComponent {

  @Input() gameStatusPortion:any;
  constructor() {

  }
  find_rational(value) {
    var best_numer = 1;
    var best_denom = 1;
    var best_err = Math.abs(value - best_numer / best_denom);
    for (var denom = 1; best_err > 0 && denom <= 10000; denom++) {
      var numer = Math.round(value * denom);
      var err = Math.abs(value - numer / denom);
      if (err < best_err) {
        best_numer = numer;
        best_denom = denom;
        best_err = err;
      }
    }
    var result=best_numer+"/"+best_denom;
    return result;
  }

}
