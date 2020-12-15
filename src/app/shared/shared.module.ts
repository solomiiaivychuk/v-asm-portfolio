import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    NavbarComponent,
    FooterComponent,
  ],
})
export class SharedModule { }
