import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Id2IntroComponent } from './id2-intro.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MasterService } from '../services/master.service';

xdescribe('Id2IntroComponent', () => {
  let component: Id2IntroComponent;
  let fixture: ComponentFixture<Id2IntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Id2IntroComponent ],
      providers: [ MasterService ],
      imports: [ FormsModule,
        RouterTestingModule,
        HttpClientTestingModule ]
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
  // it('set body to the service ',()=>{

  // })
});
