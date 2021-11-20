import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  title: string = '';
  public comments: any[] = [
    { id : 1, post_id : 1, content : "..." },
    { id : 2, post_id : 2, content : "..." },
    { id : 3, post_id : 2, content : "..." },
    { id : 4, post_id : 2, content : "..." },
  ];
  constructor(private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
  }

}
