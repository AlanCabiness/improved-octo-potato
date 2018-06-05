import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {HomepageComponent} from '../homepage/homepage.component';
import {TrackingComponent} from '../tracking/tracking.component';
import {CustomizationComponent} from '../customization/customization.component';
import {InventoryComponent} from '../inventory/inventory.component';
import {LoginComponent} from '../login/login.component';
import {LootComponent} from '../loot/loot.component';
import {ApiComponent} from '../api/api.component';
import {RouterModule, Routes} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {MatTabsModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireModule} from 'angularfire2';
// import {environment} from '../../environments/environment';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent
      ],
      imports: [RouterTestingModule, FormsModule, AngularFireModule.initializeApp(environment.firebase)],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
