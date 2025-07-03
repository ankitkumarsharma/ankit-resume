import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeContainer } from './shared/home-container/home-container';
import { Loader } from "./shared/loader/loader";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeContainer, Loader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  loader = signal(true);
  ngOnInit() {
    setTimeout(() => {
      this.loader.set(false);
    }, 1000);
  }
}
