import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { posts } from '../../../posts.model';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, CommonModule],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  posts = posts;
}
