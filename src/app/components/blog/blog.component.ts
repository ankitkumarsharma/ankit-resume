import { Component, OnInit } from '@angular/core';
import { BLOGS } from 'src/app/core/constants/blogs.constant';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  readonly blogs = BLOGS;
  constructor() { }

  ngOnInit(): void {
  }
  getDataTabId(index:number){
    return `tab${index+1}`
  }
}
