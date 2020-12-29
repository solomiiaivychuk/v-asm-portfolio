import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AuthService} from '../../core/auth.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  loginForm: any;
  constructor(
    public auth: AuthService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private snack: MatSnackBar
) { 
  this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
}

  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.loginForm.value.email, this.loginForm.value.password).then((res: any) => {
      this.snack.open(res, "close", {duration: 2000})
      this.dialog.closeAll();
    }).catch((error) => {
      this.snack.open(error, "close", {duration: 2000})
      this.dialog.closeAll();
    });
  }

}
