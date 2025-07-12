import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import {
  Gallery,
  GalleryItem,
  ImageItem,
  ThumbnailsPosition,
  ImageSize,
} from "@ngx-gallery/core";
import { map } from "rxjs/operators";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-nccgroup-gallery",
  templateUrl: "./nccgroup-gallery.component.html",
  styleUrls: ["./nccgroup-gallery.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class nccgroupGalleryComponent implements OnInit {
  items: GalleryItem[];
  galleryLimit: number;
  galleryLength: any;
  startPage: number;

  constructor(public gallery: Gallery, private titleService: Title) { }

  ngOnInit() {
    this.setTitle("Gallery - NCC");
    // 1. Create gallery items
    this.items = data.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    this.galleryLength = this.items.length;
    // Load items into the lightbox
    this.basicLightboxExample();

    // Load item into different lightbox instance
    // With custom gallery config
    this.withCustomGalleryConfig();

    // this.galleryLimit = 12;
    // this.startPage = 0;
  }

  // showMoreImages() {
  //   this.galleryLimit = Number(this.galleryLimit) + 9;
  // }
  // showLessImages() {
  //   this.galleryLimit = Number(this.galleryLimit) - 60;
  // }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  basicLightboxExample() {
    this.gallery.ref().load(this.items);
  }

  /**
   * Use custom gallery config with the lightbox
   */
  withCustomGalleryConfig() {
    // 2. Get a lightbox gallery ref
    const lightboxGalleryRef = this.gallery.ref("anotherLightbox");

    // (Optional) Set custom gallery config to this lightbox
    lightboxGalleryRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    // 3. Load the items into the lightbox
    lightboxGalleryRef.load(this.items);
  }
}

const data = [
  {
    srcUrl: "assets/awards/award.jpg",
    previewUrl: "assets/awards/award.jpg"
  },
  {
    srcUrl: "assets/awards/award2.jpg",
    previewUrl: "assets/awards/award2.jpg"
  },
  {
    srcUrl: "assets/awards/img1.jpg",
    previewUrl: "assets/awards/img1.jpg"
  },
  {
    srcUrl: "assets/awards/img2.jpg",
    previewUrl: "assets/awards/img2.jpg"
  },
  {
    srcUrl: "assets/awards/img3.jpg",
    previewUrl: "assets/awards/img3.jpg"
  },
  {
    srcUrl: "assets/awards/img4.jpg",
    previewUrl: "assets/awards/img4.jpg"
  },
  {
    srcUrl: "assets/awards/img5.jpg",
    previewUrl: "assets/awards/img5.jpg"
  },
  {
    srcUrl: "assets/awards/img6.jpg",
    previewUrl: "assets/awards/img6.jpg"
  },
  {
    srcUrl: "assets/awards/img7.jpg",
    previewUrl: "assets/awards/img7.jpg"
  },
  {
    srcUrl: "assets/awards/img8.jpg",
    previewUrl: "assets/awards/img8.jpg"
  },
  {
    srcUrl: "assets/awards/img9.jpg",
    previewUrl: "assets/awards/img9.jpg"
  },
  {
    srcUrl: "assets/awards/img10.jpg",
    previewUrl: "assets/awards/img10.jpg"
  },
];
