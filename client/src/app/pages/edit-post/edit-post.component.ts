import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component'

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [FormsModule, HeaderComponent],
  templateUrl: './edit-post.component.html',
  styles: ``
})
export class EditPostComponent {

}
