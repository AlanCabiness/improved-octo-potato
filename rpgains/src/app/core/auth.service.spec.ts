import {TestBed, inject} from '@angular/core/testing';
import {AngularFireAuth} from 'angularfire2/auth';
import {FirebaseApp} from 'angularfire2';
import {AuthService} from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [AuthService, AngularFireAuth, FirebaseApp],
    });
  });

  /*it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));*/
});
