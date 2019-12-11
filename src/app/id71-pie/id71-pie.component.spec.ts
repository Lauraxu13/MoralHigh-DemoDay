import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Id71PieComponent } from './id71-pie.component';

describe('Id71PieComponent', () => {
  let component: Id71PieComponent;
  let fixture: ComponentFixture<Id71PieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Id71PieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Id71PieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
