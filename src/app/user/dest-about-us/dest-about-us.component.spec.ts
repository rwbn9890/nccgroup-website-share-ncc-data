import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestAboutUsComponent } from './dest-about-us.component';

describe('DestAboutUsComponent', () => {
  let component: DestAboutUsComponent;
  let fixture: ComponentFixture<DestAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
