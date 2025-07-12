import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-dest-team",
  templateUrl: "./dest-team.component.html",
  styleUrls: ["./dest-team.component.css"]
})
export class DestTeamComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.setTitle("Our Team - NCC");
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
