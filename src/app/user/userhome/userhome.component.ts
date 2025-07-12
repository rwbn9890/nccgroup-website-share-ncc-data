import {
  Component,
  OnInit} from "@angular/core";
import { Subscription } from "rxjs";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-userhome",
  templateUrl: "./userhome.component.html",
  styleUrls: ["./userhome.component.css"]
})
export class UserhomeComponent implements OnInit {
  currentUser: any;
  currentUserSubscription: Subscription;
  users: any[] = [];

  constructor(
    private titleService: Title,
  ) {}

  ngOnInit() {
    this.setTitle("Home - NCC");
    //    this.loadAllUsers();
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
