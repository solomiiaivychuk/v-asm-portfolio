import { Component, OnInit, Inject, Input, Output } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input() thumb!: string;
  @Input() full!: string;
  @Inject(MAT_DIALOG_DATA) public data!: any;
  public path = this.data.fullPath;

  constructor() { }

  ngOnInit(): void {
    
  }

}
