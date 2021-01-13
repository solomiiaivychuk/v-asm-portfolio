import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-language-dialog',
  templateUrl: './language-dialog.component.html',
  styleUrls: ['./language-dialog.component.css']
})
export class LanguageDialogComponent implements OnInit {

  constructor(public dialog: MatDialog, public translate: TranslateService) { 
    translate.addLangs(['en', 'ru', 'pl', 'ua']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    this.dialog.closeAll();
  }
}
