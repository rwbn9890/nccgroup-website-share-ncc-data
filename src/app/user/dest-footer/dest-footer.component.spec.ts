import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestFooterComponent } from './dest-footer.component';

describe('DestFooterComponent', () => {
  let component: DestFooterComponent;
  let fixture: ComponentFixture<DestFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
