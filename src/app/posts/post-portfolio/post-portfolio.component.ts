import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import {PostService} from '../post.service';
import {MatDialog} from '@angular/material/dialog';
import {PhotoComponent} from '../photo/photo.component';
@Component({
  selector: 'app-post-portfolio',
  templateUrl: './post-portfolio.component.html',
  styleUrls: ['./post-portfolio.component.css']
})
export class PostPortfolioComponent implements OnInit {

  portfolioImages: any[] = [];
  storageImages: any[] = [];

  constructor(
    public storage: AngularFireStorage,
    public postService: PostService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    })
  }

  openDialog(path: any) {
    this.dialog.open(PhotoComponent, {
      data: {
        fullPath: path
      }
    });
  }
}
