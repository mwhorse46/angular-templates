import { NgModule } from '@angular/core';

import { ShareModule } from '../share/share.module';

import { HomeComponent } from './home.component';
import { RoutingModule } from './home.routes';

@NgModule({
  declarations: [HomeComponent],
  imports: [ShareModule, RoutingModule],
})
export class HomeModule {}
