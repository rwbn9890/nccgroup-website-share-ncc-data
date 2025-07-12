import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestConnectComponent } from './dest-connect.component';

describe('DestConnectComponent', () => {
  let component: DestConnectComponent;
  let fixture: ComponentFixture<DestConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
