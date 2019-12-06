import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Id7ScoringComponent } from './id7-scoring.component';

describe('Id7ScoringComponent', () => {
  let component: Id7ScoringComponent;
  let fixture: ComponentFixture<Id7ScoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Id7ScoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Id7ScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
