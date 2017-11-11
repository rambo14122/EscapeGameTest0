import { NgModule } from '@angular/core';
import { GameItemComponent } from './game-item/game-item';
import { GroupItemComponent } from './group-item/group-item';
import {GroupItemComponentModule} from "./group-item/group-item.module";
import { CustomStatusBarComponent } from './custom-status-bar/custom-status-bar';
import {CustomStatusBarComponentModule} from "./custom-status-bar/custom-status-bar.module";
import { CustomTabsComponent } from './custom-tabs/custom-tabs';
import {CustomTabsComponentModule} from "./custom-tabs/custom-tabs.module";
import { LocationItemComponent } from './location-item/location-item';
import {LocationItemComponentModule} from "./location-item/location-item.module";
@NgModule({
	declarations: [GameItemComponent],
	imports: [GroupItemComponentModule,CustomStatusBarComponentModule,CustomTabsComponentModule,LocationItemComponentModule],
	exports: [GameItemComponent,GroupItemComponent,
    CustomStatusBarComponent,
    CustomTabsComponent,
    LocationItemComponent]
})
export class ComponentsModule {}
