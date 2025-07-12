import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestContactComponent } from './dest-contact.component';

describe('DestContactComponent', () => {
  let component: DestContactComponent;
  let fixture: ComponentFixture<DestContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
