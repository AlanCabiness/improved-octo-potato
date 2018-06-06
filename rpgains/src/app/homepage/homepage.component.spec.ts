import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {AuthService} from '../core/auth.service';
import { HomepageComponent } from './homepage.component';
import {by} from 'protractor';


describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Wanted to test if both login buttons appeared on front end
  //
  // it('should have login buttons if not logged in for New User', () => {
  //   expect(de.query(component.css('button'))).toEqual('New User');
  // });
  //
  // it('should have login buttons if not logged in for Existing User', () => {
  //   expect(de.query(component.css('button'))).toEqual('Existing User');
  // });


  // Wanted to test if homepage got rerouted correctly
  //
  // it('should route to homepage after signin()', fakeAsync(() => {
  //   expect(component.afterSignIn).toBe( router.navigate(['/']));
  // }));

  // Wanted to test if New User gets user data set
  //
  // it('should make new user',  () => {
  //   expect(component.updateUserData).toEqual( User {uid= user.uid,
  //       email= user.email
  //       displayName= user.displayName
  //       photoURL= user.photoURL
  //       xp=  0,
  //       eqArmor='',
  //       eqHelmet'',
  //       eqWeapon='',
  //       historyBench= {},
  //       historyCurl=  {},
  //       historySquat=  {},
  //       historyWeight={},
  //       invArmor= [''],
  //       invHelm= [''],
  //       invWeapon= [''],
  //       lastBench=  0,
  //       lastCurl=  0,
  //       lastSquat= 0,
  //       lastWeight=  0,
  //       tokens=  0});
  // });

  // Wanted to test if Existing User gets user data set to existing
  //
  // it('should make existing user data equal to saved data',  () => {
  //   expect(component.updateUserData).toEqual( User = {
  //       uid= user.uid,
  //       email= user.email
  //       displayName= user.displayName
  //       photoURL= user.photoURL
  //       xp= user.xp
  //       eqArmor= user.eqArmor
  //       eqHelmet= user.eqHelmet
  //       eqWeapon= user.eqWeapon
  //       historyBench= user.historyBench
  //       historyCurl= user.historyCurl
  //       historySquat= user.historySquat
  //       historyWeight= user.historyWeight
  //       invArmor= user.invArmor
  //       invHelm= user.invHelm
  //       invWeapon= user.invWeapon
  //       lastBench= user.lastBench
  //       lastCurl= user.lastCurl
  //       lastSquat= user.lastSquat
  //       lastWeight= user.lastWeight
  //       tokens= user.tokens
  // });

});

