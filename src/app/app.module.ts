import { BrowserModule, HammerGestureConfig, Title } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserModule } from "./user/user.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppMaterialModule } from "./app-material/app-material.module";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";

export class CustomHammerConfig extends HammerGestureConfig  {
  overrides = {
      pinch: { enable: false },
      rotate: { enable: false }
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxSpinnerModule
  ],
  providers: [
    Title,
    NgxSpinnerService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: HammerGestureConfig, useClass: CustomHammerConfig 
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

