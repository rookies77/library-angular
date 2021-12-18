import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './component/article/article.component';
import { HomeComponent } from './component/home/home.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { PostComponent } from './component/article/post/post.component';
// import { PostComponent } from './component/post/post.component';

const routes: Routes = [


  { path: '', component: HomeComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'article/:id', component: PostComponent },
  { path: '**', component: NotfoundComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
