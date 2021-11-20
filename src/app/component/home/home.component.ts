import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title: string = '';
  public subtitle: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.title = 'Bienvenue sur votre page d\'accueil';
    this.subtitle = 'Test Technique pour les developpeurs Angular, Reacr ou Vuejs';
  }
  redirectTo(){
    this.router.navigate(['article']);
  }
}
