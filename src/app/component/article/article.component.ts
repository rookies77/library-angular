import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/providers/posts.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  posts: any[] = [];

  public comments: any[] = [
    { id: 1, post_id: 1, content: "..." },
    { id: 2, post_id: 2, content: "..." },
    { id: 3, post_id: 2, content: "..." },
    { id: 4, post_id: 2, content: "..." },
  ];

  constructor(private router: Router, private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts = this.postsService.posts;

    console.log(this.posts)

  }



  onClick(event: any) {
    console.log(event)
    this.router.navigate([`article/${event}`]);
  }

}
