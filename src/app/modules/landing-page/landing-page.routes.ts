import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { ContentComponent } from "../landingPage/content/content.component";


export const landingRoutes: Routes = [
  {
     path:"",
     component: ContentComponent,

  }
];

