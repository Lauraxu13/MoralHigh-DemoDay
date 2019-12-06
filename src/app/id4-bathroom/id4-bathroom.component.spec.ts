import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Id4BathroomComponent } from './id4-bathroom.component';

describe('Id4BathroomComponent', () => {
  let component: Id4BathroomComponent;
  let fixture: ComponentFixture<Id4BathroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Id4BathroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Id4BathroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
