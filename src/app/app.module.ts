import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider
} from "angular-6-social-login";
import{RouterModule, Routes} from '@angular/router';
import { NewComponent } from './new/new.component';
const route:Routes=[
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'new',
    component: NewComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewComponent,
    
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    RouterModule.forRoot(route)
  ],
  providers: [{
    provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider( "402622503594780")
        }]
      );
      return config;
      }