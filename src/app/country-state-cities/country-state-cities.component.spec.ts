import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryStateCitiesComponent } from './country-state-cities.component';

describe('CountryStateCitiesComponent', () => {
  let component: CountryStateCitiesComponent;
  let fixture: ComponentFixture<CountryStateCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryStateCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryStateCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
