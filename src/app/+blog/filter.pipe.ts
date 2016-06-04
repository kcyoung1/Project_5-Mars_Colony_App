import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTags'
})

export class FilterHtmlTags implements PipeTransform {
  transform(post: string): string {

      post = post.replace(/<(?:.|)*?>/gm, '');
      post = post.replace(/\n/g, ' ');
      post = post.replace('[&hellip;]', '[...]');
      post = post.replace(/&#8217;/g, "'");

      return post;
  }
}
