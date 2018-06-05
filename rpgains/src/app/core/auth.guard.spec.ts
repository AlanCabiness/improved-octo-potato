import { TestBed, async, inject } from '@angular/core/testing';
import {AuthService} from './auth.service';
import { AuthGuard } from './auth.guard';
import {AngularFireAuth} from 'angularfire2/auth';
import {FirebaseApp} from 'angularfire2';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, AuthService, AngularFireAuth, FirebaseApp]
    });
  });

  /*it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));*/
});
