import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';

import { BlogService } from '../shared/services';
import { IBlog } from '../shared/models';
import { FilterHtmlTags } from './filter.pipe';

@Component({
  moduleId: module.id,
  selector: 'app-blog',
  templateUrl: 'blog.component.html',
  styleUrls: ['blog.component.css'],
  providers: [BlogService],
  directives: [ROUTER_DIRECTIVES],
  pipes: [FilterHtmlTags]
})
export class BlogComponent implements OnInit {

  public blogs: IBlog[];
  public status: string;

  constructor(
    private router: Router,
    private blogService: BlogService
  ) {
    this.status = 'loading';
  }

  ngOnInit() : void {
    this.blogService.getBlog().then( result => {    this.blogs = result;
    this.status = 'done';
    });
  }

}
