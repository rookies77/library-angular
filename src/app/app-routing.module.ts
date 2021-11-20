import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './component/article/article.component';
import { HomeComponent } from './component/home/home.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { PostComponent } from './component/post/post.component';

const routes: Routes = [
  // { path: '', loadChildren: 'src/app/app.module#AppModule' },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '', component: HomeComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'post:id', component: PostComponent },
  { path: '**', component: NotfoundComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
