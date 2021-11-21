import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ArticleComponent } from './component/article/article.component';
import { PostComponent } from './component/article/post/post.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { PostsService } from './providers/posts.service';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    PostComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule

  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
