import { Component } from '@angular/core';
import { CONSTANT } from '../../core/constants/app.constant';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  readonly myInfo = CONSTANT.myInfo;
  readonly headerMenu = CONSTANT.headerMenu;
  readonly socialLinks = CONSTANT.socialLinks;
  readonly copyright = CONSTANT.copyright;
  mobileMenuOpen = false;

  onTab() {
    this.mobileMenuOpen = false;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
