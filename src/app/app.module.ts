import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderInterceptor } from './core/interceptors/loader/loader-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ResumeComponent,
    PortfolioComponent,
    BlogComponent,
    ContactMeComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
