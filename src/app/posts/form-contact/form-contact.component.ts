import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

  userForm: any;
  admin: Boolean = false;
  applications: any = [];

  constructor(
    public auth: AuthService, 
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
    public dialog: MatDialog,
    private snack: MatSnackBar,
    ) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
    //this.auth.afAuth.authState.subscribe(user => {
    //  console.log(user == undefined);
    //});
    //this.getFirestore();
  }

  onSubmit() {
    if (this.userForm.dirty && this.userForm.valid) {
        this.firestore.collection('form-applications').add({
          name: this.userForm.value.name,
          email: this.userForm.value.email,
          message: this.userForm.value.message,
          published: Date.now()
        }).then(res => {
            console.log('success', res);
            this.userForm.reset();
            this.snack.open('Thank you for contacting!', 'close');
          });
    }
  }
  getFirestore() {
    const apps = this.firestore.collection('form-applications');
    apps.get().subscribe(docs => docs.forEach(doc => this.applications.push(doc.data())));
  }
}
