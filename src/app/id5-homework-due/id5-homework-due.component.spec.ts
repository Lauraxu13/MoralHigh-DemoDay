import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Id5HomeworkDueComponent } from './id5-homework-due.component';

xdescribe('Id5HomeworkDueComponent', () => {
  let component: Id5HomeworkDueComponent;
  let fixture: ComponentFixture<Id5HomeworkDueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Id5HomeworkDueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Id5HomeworkDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
