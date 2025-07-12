import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-dest-about-us",
  templateUrl: "./dest-about-us.component.html",
  styleUrls: ["./dest-about-us.component.css"]
})
export class DestAboutUsComponent implements OnInit {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.setTitle("About Us - nccgroup");
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
