import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Id8LeaderboardComponent } from './id8-leaderboard.component';

xdescribe('Id8LeaderboardComponent', () => {
  let component: Id8LeaderboardComponent;
  let fixture: ComponentFixture<Id8LeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Id8LeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Id8LeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
