import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

}
