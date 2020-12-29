import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input() thumblink!: string;
  @Input() fulllink!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
