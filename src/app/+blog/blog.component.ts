import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';

import { BlogService } from '../shared/services';
import { IBlog } from '../shared/models';
import { FilterHtmlTags } from './filter.pipe'

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

  constructor(
    private router: Router,
    private blogService: BlogService
  ) {}

  ngOnInit() : void {
    this.blogService.getBlog().then( result => this.blogs = result);
  }

}
