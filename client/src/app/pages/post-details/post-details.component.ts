import { NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { posts } from '../../../posts.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [NgOptimizedImage, HeaderComponent],
  templateUrl: './post-details.component.html',
  styles: ``
})
export class PostDetailsComponent implements OnInit {
  posts = posts;
  route = inject(ActivatedRoute);
  postId: any;
  postDetails: any;
  error: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.postId = params.get('id');
      const parameter = this.posts.find((post) => post.id === +this.postId);
      if(parameter) {
        this.postDetails=parameter;
      } else {
        this.error = 'post not found';
      }
    });

  }
}
