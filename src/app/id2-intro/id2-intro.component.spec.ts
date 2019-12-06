import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Id2IntroComponent } from './id2-intro.component';

describe('Id2IntroComponent', () => {
  let component: Id2IntroComponent;
  let fixture: ComponentFixture<Id2IntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Id2IntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Id2IntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
