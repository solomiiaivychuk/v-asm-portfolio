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
    this.postService.getPortfolioImages().subscribe((res) => {
      const result = res as any;
      for (let record of result) {
        this.portfolioImages.push(record);
        this.storageImages.push({
          full: this.storage.refFromURL(record.full),
          thumb: this.storage.refFromURL(record.thumb)
        });
        console.log(this.storageImages);
      }
    });
  }

  openDialog(path: any) {
    this.dialog.open(PhotoComponent, {
      data: {
        fullPath: path
      }
    });
  }
}
