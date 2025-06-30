import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeContainer } from './shared/home-container/home-container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeContainer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
