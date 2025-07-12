import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestServicesComponent } from './dest-services.component';

describe('DestServicesComponent', () => {
  let component: DestServicesComponent;
  let fixture: ComponentFixture<DestServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
