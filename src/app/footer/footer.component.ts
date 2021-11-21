import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  precedent: number = 1;
  suivant: number = 2;

  faHome = faHome;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  back() {
    this.suivant -= 1;
    this.precedent -= 1;
    if (this.precedent == 1)
      this.router.navigate(['']);
  }
  next() {
    this.suivant += 1;
    this.precedent += 1;
    if (this.suivant == 3)
      this.router.navigate(['article']);
  }
}
