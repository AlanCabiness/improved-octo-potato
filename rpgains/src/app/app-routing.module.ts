import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomepageComponent} from './homepage/homepage.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InventoryComponent} from './inventory/inventory.component';
import {LoginComponent} from './login/login.component';
import {LootComponent} from './loot/loot.component';
import {TrackingComponent} from './tracking/tracking.component';
import {CustomizationComponent} from './customization/customization.component';

const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'loot', component: LootComponent},
  {path: 'tracking', component: TrackingComponent},
  {path: 'customization', component: CustomizationComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
