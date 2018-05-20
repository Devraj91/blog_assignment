import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';
import { PostService } from './services/posts.service';


import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';
import { InstaPostComponent } from './insta-post/insta-post.component';

const routes: Routes = [
  // Important: The sequence of path is important as the router go over then in sequential manner
  // defined routes for insta and twitter
  { path: 'twitter', component: TwitterPostComponent, pathMatch: 'full'},
  { path: 'insta', component: InstaPostComponent, pathMatch: 'full'},
 ];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    TwitterPostComponent,
    InstaPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes, {useHash: true} ),
    AngularFontAwesomeModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
