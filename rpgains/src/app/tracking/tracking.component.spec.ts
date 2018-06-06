import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingComponent } from './tracking.component';

describe('TrackingComponent', () => {
  let component: TrackingComponent;
  let fixture: ComponentFixture<TrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Wanted to test if submitted tracking records were being recorded
  //
  // it('weight was recorded',  () => {
  //    expect(user.lastWeight).toEqual(component.submittedWeight);
  //     });

  // it('squat was recorded',  () => {
  //    expect(user.lastSquat).toEqual(component.submittedSquat);
  //     });

  // it('bench was recorded',  () => {
  //    expect(user.lastWeight).toEqual(component.submittedbench);
  //     });

  // it('curl was recorded',  () => {
  //    expect(user.lastCurl).toEqual(component.submittedCurl);
  //     });

  // it('calorie was recorded',  () => {
  //    expect(user.lastCalorie).toEqual(component.submittedCalorie);
  //     });
});
