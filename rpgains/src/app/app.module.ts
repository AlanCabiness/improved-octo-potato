import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InventoryComponent} from './inventory/inventory.component';
import {LootComponent} from './loot/loot.component';
import {TrackingComponent} from './tracking/tracking.component';
import {ApiComponent} from './api/api.component';

import {AngularFireModule, FirebaseApp} from 'angularfire2';
import {AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';

import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';

import { AngularFireAuthModule } from 'angularfire2/auth';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DashboardComponent,
    InventoryComponent,
    LootComponent,
    TrackingComponent,
    ApiComponent
  ],
  imports: [
    AngularFireAuthModule,
    CoreModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    Ng2GoogleChartsModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [ApiComponent, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
