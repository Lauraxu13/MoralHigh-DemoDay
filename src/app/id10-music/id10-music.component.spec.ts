import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Id10MusicComponent } from './id10-music.component';

describe('Id10MusicComponent', () => {
  let component: Id10MusicComponent;
  let fixture: ComponentFixture<Id10MusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Id10MusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Id10MusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
