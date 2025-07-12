import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"]
})
export class ContactUsComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.setTitle("Contact Us - NCC");
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
