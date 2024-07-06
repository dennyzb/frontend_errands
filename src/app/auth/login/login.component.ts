import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SocialAuthService } from "@abacritt/angularx-social-login";

export interface iSocialAuth {
  user: { first_name: string, last_name: string, email: string },
  access_token: string,
  refresh_token: string,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user!: any;
  loggedIn!: boolean;
  error!: any;
  busy!: boolean;

  password!: string;
  username!: string;

  constructor(private socialAuth: SocialAuthService, private authService: AuthService, private http: HttpClient, private route: Router,) { }

 
  ngOnInit(){this.socialAuth.authState.subscribe((res: any) => {
    console.log(res)
    this.authService.socialLogin(res.idToken)
      .subscribe({
        next: (loginRes: any) => {
          console.log('User payload from Google: ', loginRes)
        },
        error: (error: any) => {
          console.log("Something ain't right!", `The error is: ${error.error.message}`)
        }
      })
  });

  }
  
}


