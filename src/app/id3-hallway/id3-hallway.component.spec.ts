import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Id3HallwayComponent } from './id3-hallway.component';

xdescribe('Id3HallwayComponent', () => {
  let component: Id3HallwayComponent;
  let fixture: ComponentFixture<Id3HallwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Id3HallwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Id3HallwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
