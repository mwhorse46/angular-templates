import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {RoutingModule} from "./home.routes";
import {ShareModule} from "../share/share.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    ShareModule,
    RoutingModule,
  ]
})
export class HomeModule { }
