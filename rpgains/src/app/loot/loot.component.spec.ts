import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LootComponent } from './loot.component';

describe('LootComponent', () => {
  let component: LootComponent;
  let fixture: ComponentFixture<LootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Wanted to test if rolled loot was gained
  //
  // it('rolled Armorloot was obtained',  () => {
  //   component.lootRoll();
  //        expect(user.inArmor).toContain(lootRoll.rollArmor);
  //     });

  // it('rolled Helmetloot was obtained',  () => {
  //   component.lootRoll();
  //        expect(user.inHelmet).toContain(lootRoll.rollHelmet);
  //     });

  // it('rolled Weaponloot was obtained',  () => {
  //   component.lootRoll();
  //        expect(user.inWeapon).toContain(lootRoll.rollWeapon);
  //     });
});
