import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  message: any;
  regForm: FormGroup;
  token: any;
  public loggedIn: boolean;
  public user1: any;
  subscription: Subscription;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private toasterService: ToastrService,
    private modalService: NgbModal
  ) {
   
    
   
  }
  ngOnInit() {
    
  }



 
}
