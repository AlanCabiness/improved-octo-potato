import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LootComponent } from './loot/loot.component';
import { LoginComponent } from './login/login.component';
import { TrackingComponent } from './tracking/tracking.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DashboardComponent,
    InventoryComponent,
    LootComponent,
    LoginComponent,
    TrackingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
