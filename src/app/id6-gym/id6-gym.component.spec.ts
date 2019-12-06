import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Id6GymComponent } from './id6-gym.component';

describe('Id6GymComponent', () => {
  let component: Id6GymComponent;
  let fixture: ComponentFixture<Id6GymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Id6GymComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Id6GymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
