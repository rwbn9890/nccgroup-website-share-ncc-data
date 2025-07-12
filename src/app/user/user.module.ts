import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { BannerComponent } from "./banner/banner.component";
import { UserhomeComponent } from "./userhome/userhome.component";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ServiceblockComponent } from "./serviceblock/serviceblock.component";
import { GalleryviewComponent } from "./galleryview/galleryview.component";
import { SocialviewComponent } from "./socialview/socialview.component";
import { FeedbackviewComponent } from "./feedbackview/feedbackview.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgxGalleryModule } from "ngx-gallery-9";

import { ContactUsComponent } from "./contact-us/contact-us.component";
import { ConnectusComponent } from "./connectus/connectus.component";
import { DestServicesComponent } from "./dest-services/dest-services.component";

import { DestContactComponent } from "./dest-contact/dest-contact.component";
import { DestTeamComponent } from "./dest-team/dest-team.component";
import { DestFooterComponent } from "./dest-footer/dest-footer.component";
import { DestAboutUsComponent } from "./dest-about-us/dest-about-us.component";
import { DestConnectComponent } from "./dest-connect/dest-connect.component";
import { SectionsComponent } from "./sections/sections.component";
import { ToastrService, ToastrModule } from "ngx-toastr";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { GalleryModule } from "@ngx-gallery/core";
import { LightboxModule } from "@ngx-gallery/lightbox";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { BranchesComponent } from "./branches/branches.component";
import { ClientSliderComponent } from "./client-slider/client-slider.component";
import { NgImageSliderModule } from 'ng-image-slider';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { nccgroupGalleryComponent } from "./nccgroup-gallery/nccgroup-gallery.component";

const routes: Routes = [];
@NgModule({
  declarations: [
    NavbarComponent,
    BannerComponent,
    SectionsComponent,
    UserhomeComponent,
    AboutusComponent,
    ServiceblockComponent,
    GalleryviewComponent,
    SocialviewComponent,
    FeedbackviewComponent,
    ContactUsComponent,
    ConnectusComponent,
    DestServicesComponent,
    nccgroupGalleryComponent,
    DestContactComponent,
    DestTeamComponent,
    DestFooterComponent,
    DestAboutUsComponent,
    DestConnectComponent,
    PagenotfoundComponent,
    BranchesComponent,

    ClientSliderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    NgxGalleryModule,
    AngularFontAwesomeModule,
    RouterModule.forChild(routes),
    ScrollingModule,
    GalleryModule,
    LightboxModule,
    NgImageSliderModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: "toast-top-right",
      preventDuplicates: false,
    }),
  ],
  providers: [ToastrService],
})
export class UserModule { }


