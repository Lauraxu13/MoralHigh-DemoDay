import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Id1HomePageComponent } from './id1-home-page.component';

describe('Id1HomePageComponent', () => {
  let component: Id1HomePageComponent;
  let fixture: ComponentFixture<Id1HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Id1HomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Id1HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
