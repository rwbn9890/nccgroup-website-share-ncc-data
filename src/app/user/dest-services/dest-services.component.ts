import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-dest-services",
  templateUrl: "./dest-services.component.html",
  styleUrls: ["./dest-services.component.css"]
})
export class DestServicesComponent implements OnInit {
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.setTitle("Our Services - nccgroup");
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
