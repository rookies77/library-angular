import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/providers/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: any = {
    title: '',
    src: '',
    content: '',
  }
commentaire: string = '';
commentaires: string[]= [];
  public comments: any[] = [
    { id: 1, post_id: 1, content: "..." },
    { id: 2, post_id: 2, content: "..." },
    { id: 3, post_id: 2, content: "..." },
    { id: 4, post_id: 2, content: "..." },
  ];
  constructor(private route: ActivatedRoute, private postsService: PostsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']

    this.post.title = this.postsService.getArticle(+id).label;
    this.post.src = this.postsService.getArticle(+id).src;
    this.post.content = this.postsService.getArticle(+id).content;

  }
onSubmit(f: any){

  this.commentaires.push(this.commentaire)
  this.commentaire = "";
}
}
