import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { LanguageDialogComponent } from './language-dialog/language-dialog.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, LoginDialogComponent, NavbarMobileComponent, LanguageDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    FlexLayoutModule,
    MatRadioModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    NavbarComponent,
    NavbarMobileComponent,
    FooterComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatRadioModule
  ],
})
export class SharedModule { }
