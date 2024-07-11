import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  handleNoClick() {
    // Add your logic here
    console.log('No button clicked!');
    // For example, you might want to redirect to a different page:
    this.router.navigate(['/auth/register']);
  };
  handleYesClick() {
    // Add your logic here
    console.log('Yes button clicked!');
    // For example, you might want to redirect to a different page:
    this.router.navigate(['/auth/login']);
  }

}
