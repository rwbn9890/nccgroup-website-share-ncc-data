import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { nccgroupGalleryComponent } from './nccgroup-gallery.component';



describe('nccgroupGalleryComponent', () => {
  let component: nccgroupGalleryComponent;
  let fixture: ComponentFixture<nccgroupGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [nccgroupGalleryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(nccgroupGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
