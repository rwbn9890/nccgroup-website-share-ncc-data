import { Component, OnInit, PLATFORM_ID, Inject } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { isPlatformBrowser } from "@angular/common";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-dest-connect",
  templateUrl: "./dest-connect.component.html",
  styleUrls: ["./dest-connect.component.css"]
})
export class DestConnectComponent implements OnInit {
  private twitter: any;

  constructor(
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    this.setTitle("Connect Us - nccgroup");
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
