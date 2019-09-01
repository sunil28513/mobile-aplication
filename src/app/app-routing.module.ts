import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component'
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestmonialsComponent } from './testmonials/testmonials.component';
import { DownloadsComponent } from './downloads/downloads.component';

const routes: Routes = [
  {
    path:'',redirectTo:'',pathMatch:'full'
 },
  {
    path:'home', component:HeaderComponent
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'pricing', component:PricingComponent
  },
  {
    path:'testmonials', component:TestmonialsComponent
  },
  {
    path:'downloads', component:DownloadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
