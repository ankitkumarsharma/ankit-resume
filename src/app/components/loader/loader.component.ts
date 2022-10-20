import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderType } from 'src/app/core/models/app.models';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  show = false;
  subscription!: Subscription;
  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderService.loaderState.subscribe((state: LoaderType) => {
      this.show = state.show;
    });
  }

}
