import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestTeamComponent } from './dest-team.component';

describe('DestTeamComponent', () => {
  let component: DestTeamComponent;
  let fixture: ComponentFixture<DestTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
