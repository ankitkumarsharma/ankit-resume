import { Component } from '@angular/core';
import { Header } from "../header/header";

@Component({
  selector: 'home-container',
  imports: [Header],
  templateUrl: './home-container.html',
  styleUrl: './home-container.scss'
})
export class HomeContainer {
  // private toastr = inject(ToastrService);
  askYourDoubts() {
    // this.toastr.success('coming soon ...', 'Thanks!');
  }

}
