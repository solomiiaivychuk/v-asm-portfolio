import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TranslateModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
