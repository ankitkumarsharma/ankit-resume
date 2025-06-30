import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Home } from "./components/home/home";
import { AboutMe } from "./components/about-me/about-me";
import { Resume } from "./components/resume/resume";
import { Portfolio } from "./components/portfolio/portfolio";
import { Blog } from "./components/blog/blog";
import { ContactMe } from "./components/contact-me/contact-me";
import { CONSTANT } from './core/constants/app.constant';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly myInfo = CONSTANT.myInfo;
  readonly headerMenu = CONSTANT.headerMenu;
  readonly socialLinks = CONSTANT.socialLinks;
  readonly copyright = CONSTANT.copyright;
  mobileMenuOpen = false;
  // private toastr = inject(ToastrService);
  
  onTab(){
    this.mobileMenuOpen = false;
  }
  askYourDoubts() {
    // this.toastr.success('coming soon ...', 'Thanks!');
  }
  
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
