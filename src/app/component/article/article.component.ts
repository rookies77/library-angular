import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

 public posts: any[] = [
    { id : 1, label : "Les Robots domineront le monde ?",
     src : "https://picsum.photos/seed/picsum/200/100",
     content: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
     },
     { id : 2, label : "Les Robots domineront le monde ?",
     src : "https://picsum.photos/seed/picsum/200/100",
     content: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
     },
     { id : 3, label : "Les Robots domineront le monde ?",
     src : "https://picsum.photos/seed/picsum/200/100",
     content: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
     },   { id : 4, label : "Les Robots domineront le monde ?",
     src : "https://picsum.photos/seed/picsum/200/100",
     content: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
     },  ]

  public comments: any[] = [
    { id : 1, post_id : 1, content : "..." },
    { id : 2, post_id : 2, content : "..." },
    { id : 3, post_id : 2, content : "..." },
    { id : 4, post_id : 2, content : "..." },
  ];

  constructor( private router: Router) { }

  ngOnInit(): void {






  }

  onClick(event: any){
console.log(event)
this.router.navigate([`post:${event}`]);
}

}
