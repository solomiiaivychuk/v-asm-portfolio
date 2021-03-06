import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import {MatDialog} from '@angular/material/dialog';
import {LoginDialogComponent} from '../login-dialog/login-dialog.component';
import { TranslateService } from '@ngx-translate/core';
import {LanguageDialogComponent} from '../language-dialog/language-dialog.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public showDropdown: boolean = false;

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

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent);
  }
  openLanguageDialog() {
    this.dialog.open(LanguageDialogComponent );
  }
  switchLang(lang: string) {
    console.log(lang);
    this.translate.use(lang);
  }
}
