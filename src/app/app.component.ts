import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('ankitBlogs', { static: false })
  blogs!: ElementRef;
  constructor(){
  }
  onTab(){
    this.blogs.nativeElement.querySelectorAll('.section-active').forEach(
      (blog:any) => {
        blog.classList.remove('section-active');
      }
    )
  }

}
