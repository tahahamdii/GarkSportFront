import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { LayoutRoutingModule } from './layout-routing.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [FormsModule,LayoutRoutingModule, HttpClientModule, AngularSvgIconModule.forRoot()],
})
export class LayoutModule {}
