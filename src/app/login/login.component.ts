import { Component, OnInit } from '@angular/core';
import{ActService} from '../act.service';
import {
  AuthService,
  FacebookLoginProvider,
  
} from 'angular-6-social-login';
import{Router}from'@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private socialAuthService: AuthService ,private actobj:ActService,private route:Router) { }
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
       this.actobj.check(userData);
       this.route.navigate(['/new'])
      }
    );
  }

  ngOnInit() {
  }

}
