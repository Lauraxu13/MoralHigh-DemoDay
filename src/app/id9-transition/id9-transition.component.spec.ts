import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Id9TransitionComponent } from './id9-transition.component';

xdescribe('Id9TransitionComponent', () => {
  let component: Id9TransitionComponent;
  let fixture: ComponentFixture<Id9TransitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Id9TransitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Id9TransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
