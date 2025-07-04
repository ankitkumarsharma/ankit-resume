import { Component } from '@angular/core';
import { BLOGS } from '../../core/constants/blogs.constant';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog {
  readonly blogs = BLOGS;
  tabActiveIndex:number = 0;
  
  onTabFn(index: number) {
    this.tabActiveIndex = index;
  }
}
