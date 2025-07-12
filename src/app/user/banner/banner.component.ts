import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"],
})
export class BannerComponent implements OnInit {
  myInterval = 5000;
  activeSlideIndex = 0;

  slides = [
    { image: "assets/bannerImages/banner4.jpg" },

    { image: "assets/bannerImages/banner2.jpg" },
    { image: "assets/bannerImages/banner1.jpg" },
    { image: "assets/bannerImages/banner3.jpg" },

    // { image: "assets/bannerImages/banner4.jpg" },
  ];

  ngOnInit() {}
}
