import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Id1HomePageComponent } from './id1-home-page.component';
import { MasterService } from '../master.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Id1HomePageComponent', () => {
  let component: Id1HomePageComponent;
  let fixture: ComponentFixture<Id1HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Id1HomePageComponent ],
      providers: [ MasterService ],
      imports: [ FormsModule,
        RouterTestingModule,
        HttpClientTestingModule ]
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
  it('should set name', () => {
    const service:MasterService=TestBed.get(MasterService)
    component.newPlayer("dequan");
    expect(service.totalScore.name="dequan");
  });
  it('should expect no empty string',()=>{
    const service:MasterService=TestBed.get(MasterService)
    component.newPlayer(" ");
    expect(service.totalScore.name="name")
  })
});
