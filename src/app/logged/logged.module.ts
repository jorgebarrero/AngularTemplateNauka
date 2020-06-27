import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Vendor
import { MaterialModule } from './../material.module';

// Local
import { LoggedRoutingModule } from './logged-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BeachComponent } from './components/beach/beach.component';


@NgModule({
  declarations: [SidenavComponent, ToolbarComponent, DashboardComponent, BeachComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LoggedRoutingModule
  ]
})
export class LoggedModule { }
