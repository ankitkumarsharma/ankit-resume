import { Component, OnInit } from '@angular/core';
import { ABOUT_ME } from 'src/app/core/constants/about-me.constant';
import { CONSTANT } from 'src/app/core/constants/app.constant';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  readonly aboutMe = ABOUT_ME;
  readonly myInfo = CONSTANT.myInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
