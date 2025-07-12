import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialviewComponent } from './socialview.component';

describe('SocialviewComponent', () => {
  let component: SocialviewComponent;
  let fixture: ComponentFixture<SocialviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
