import { Component } from '@angular/core';
import { HOME } from '../../core/constants/home.constant';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  homeData = HOME;
}
