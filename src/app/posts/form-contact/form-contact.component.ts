import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {
  userForm: any;

  constructor(
    public auth: AuthService, 
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
    ) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
    // this.auth.afAuth.authState.subscribe(user => {
    //   console.log(user?.email);
    // });
    this.getFirestore();
  }

  onSubmit() {
    if (this.userForm.dirty && this.userForm.valid) {
      console.log(
        `name: ${this.userForm.value.name} 
        email: ${this.userForm.value.email} 
        message: ${this.userForm.value.message}`
      );

    }
  }
  getFirestore() {
    const apps = this.firestore.collection('form-applications').doc('0G5fegzcPkEgFDihTmgy');
    apps.get().subscribe(doc => console.log(doc.data()));
  }
}
