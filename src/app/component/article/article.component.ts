import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

 public posts: any[] = [
    { id : 1, label : "Mon titre", content : "..." },
    { id : 2, label : "Mon titre", content : "..." },
  ]

  public comments: any[] = [
    { id : 1, post_id : 1, content : "..." },
    { id : 2, post_id : 2, content : "..." },
    { id : 3, post_id : 2, content : "..." },
    { id : 4, post_id : 2, content : "..." },
  ];

  constructor() { }

  ngOnInit(): void {






  }

}
