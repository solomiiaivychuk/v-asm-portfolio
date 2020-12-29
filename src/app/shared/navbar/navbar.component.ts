import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import {MatDialog} from '@angular/material/dialog';
import {LoginDialogComponent} from '../login-dialog/login-dialog.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService, public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(LoginDialogComponent);
  }
}
