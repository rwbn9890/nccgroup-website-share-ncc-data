import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { ContactUsComponent } from './user/contact-us/contact-us.component';
import { DestServicesComponent } from './user/dest-services/dest-services.component';

import { DestContactComponent } from './user/dest-contact/dest-contact.component';
import { DestTeamComponent } from './user/dest-team/dest-team.component';
import { DestFooterComponent } from './user/dest-footer/dest-footer.component';
import { ServiceblockComponent } from './user/serviceblock/serviceblock.component';
import { DestAboutUsComponent } from './user/dest-about-us/dest-about-us.component';
import { FeedbackviewComponent } from './user/feedbackview/feedbackview.component';
import { DestConnectComponent } from './user/dest-connect/dest-connect.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { AboutusComponent } from './user/aboutus/aboutus.component';
import { PagenotfoundComponent } from './user/pagenotfound/pagenotfound.component';
import { BranchesComponent } from './user/branches/branches.component';
import { SectionsComponent } from './user/sections/sections.component';
import { nccgroupGalleryComponent } from './user/nccgroup-gallery/nccgroup-gallery.component';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: UserhomeComponent,
    data: { title: "Home - nccgroup" }
  },
  { path: "contact-us", component: ContactUsComponent },
  { path: "ncc-services", component: DestServicesComponent },
  { path: "ncc-blog", component: DestConnectComponent },
  { path: "ncc-gallery", component: nccgroupGalleryComponent },
  { path: "ncc-connect", component: DestContactComponent },
  { path: "ncc-team", component: DestTeamComponent },
  { path: "ncc-footer", component: DestFooterComponent },
  { path: "ncc-section", component: SectionsComponent },
  { path: "ncc-service", component: ServiceblockComponent },
  { path: "ncc-aboutus", component: DestAboutUsComponent },
  { path: "ncc-feedback", component: FeedbackviewComponent },
  { path: "ncc-branches", component: BranchesComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
