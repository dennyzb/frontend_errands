import { Component } from '@angular/core';
import { faIcons } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

library.add(faEdit);

@Component({
  selector: 'app-sender-index',
  standalone: true,
  imports: [FontAwesomeModule,],
  templateUrl: './sender-index.component.html',
  styleUrl: './sender-index.component.css'
})
export class SenderIndexComponent {

}
