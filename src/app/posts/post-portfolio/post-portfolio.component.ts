import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-post-portfolio',
  templateUrl: './post-portfolio.component.html',
  styleUrls: ['./post-portfolio.component.css']
})
export class PostPortfolioComponent implements OnInit {

  constructor(public storage: AngularFireStorage) { }

  ngOnInit(): void {
  }
}
