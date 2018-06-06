import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryComponent } from './inventory.component';
import {MatTabsModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

describe('InventoryComponent', () => {
  let component: InventoryComponent;
  let fixture: ComponentFixture<InventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryComponent ], imports: [MatTabsModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Wanted to test if showed properly obtained items
  //
  // it('armor inventory is correct',  () => {
  //   expect(component.Armorinventory).toEqual( User = {
  //      user.invArmor
  //
  // });

  // it('helmet inventory is correct',  () => {
  //   expect(component.Helmetinventory).toEqual( User = {
  //      user.invArmor
  //
  // });

  // it('weapon inventory is correct',  () => {
  //   expect(component.Weaponinventory).toEqual( User = {
  //      user.invArmor
  //
  // });

  // Wanted to test if items were equipped properly
  //
  // it('selected armor got equipped',  () => {
  //   component.onArmorButtonClick();
  //        expect(user.eqArmor).toEqual(selectedArmor);
  //     });

  // it('selected helmet got equipped',  () => {
  //   component.onHelmetButtonClick();
  //        expect(user.eqHelmet).toEqual(selectedHelmet);
  //     });

  // it('selected weapon got equipped',  () => {
  //   component.onWeaponButtonClick();
  //        expect(user.eqWeapon).toEqual(selectedWeapon);
  //     });
});
