import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CONSTANT } from './core/constants/app.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('ankitBlogs', { static: false })
  blogs!: ElementRef;
  readonly myInfo = CONSTANT.myInfo;
  readonly headerMenu = CONSTANT.headerMenu;
  readonly socialLinks = CONSTANT.socialLinks;
  readonly copyright = CONSTANT.copyright;
  constructor(private toastr:ToastrService){
  }
  onTab(){
    this.blogs.nativeElement.querySelectorAll('.section-active').forEach(
      (blog:any) => {
        blog.classList.remove('section-active');
      }
    )
  }
  askYourDoubts() {
    this.toastr.success('coming soon ...', 'Thanks!');
  }

}
