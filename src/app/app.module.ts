import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainbannerComponent } from './mainbanner/mainbanner.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestmonialsComponent } from './testmonials/testmonials.component';
import { FooterComponent } from './footer/footer.component';
import { DownloadsComponent } from './downloads/downloads.component';
import {UsersService} from './services/users.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainbannerComponent,
    AboutComponent,
    PricingComponent,
    TestmonialsComponent,
    FooterComponent,
    DownloadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
