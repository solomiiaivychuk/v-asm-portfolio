import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, LoginDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    NavbarComponent,
    FooterComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
})
export class SharedModule { }
