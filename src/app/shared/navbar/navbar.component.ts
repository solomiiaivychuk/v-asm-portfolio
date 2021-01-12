import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import {MatDialog} from '@angular/material/dialog';
import {LoginDialogComponent} from '../login-dialog/login-dialog.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth: AuthService, 
    public dialog: MatDialog,
    public translate: TranslateService
    ) { 
      translate.addLangs(['en', 'ru', 'pl', 'ua']);
      translate.setDefaultLang('en');
    }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(LoginDialogComponent);
  }

  switchLang(lang: string) {
    console.log(lang);
    this.translate.use(lang);
  }
}
