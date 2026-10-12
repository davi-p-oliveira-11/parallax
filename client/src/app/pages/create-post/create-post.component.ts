import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../../components/header/header.component"

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [FormsModule, HeaderComponent],
  templateUrl: './create-post.component.html',
  styles: ``
})
export class CreatePostComponent {

}
