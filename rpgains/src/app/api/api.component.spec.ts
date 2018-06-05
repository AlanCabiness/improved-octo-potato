import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { ApiComponent } from './api.component';

describe('ApiComponent', () => {
  let component: ApiComponent;
  let fixture: ComponentFixture<ApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiComponent ], imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
