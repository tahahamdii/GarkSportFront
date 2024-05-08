import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [DashboardRoutingModule,FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
