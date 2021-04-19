import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WorksComponent } from './works/works.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AdministrationComponent } from './administration/administration.component';
import { DashboardComponent } from './administration/dashboard/dashboard.component';
import { MessagesComponent } from './administration/messages/messages.component';
import { SitemanagerComponent } from './administration/sitemanager/sitemanager.component';
import { TasksComponent } from './administration/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    WorksComponent,
    TestimonialsComponent,
    AboutComponent,
    LoginComponent,
    AdministrationComponent,
    DashboardComponent,
    MessagesComponent,
    SitemanagerComponent,
    TasksComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    NgxPageScrollModule,
    NgxTypedJsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
