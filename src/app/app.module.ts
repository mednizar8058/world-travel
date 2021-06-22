import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';

import { AuthService } from './service/auth.service';

const appRoutes = [
  {path : 'login', component : LoginComponent},
  {path : 'registration', component : RegisterComponent},
  {path : 'profile', component : ProfileComponent},
  {path : '', component : ContentComponent}// this path is for the default page :)
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    //injection of AuthService
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
