import { Component } from '@angular/core';
import { ABOUT_ME } from '../../core/constants/about-me.constant';
import { CONSTANT } from '../../core/constants/app.constant';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {
  readonly aboutMe = ABOUT_ME;
  readonly myInfo = CONSTANT.myInfo;
}
