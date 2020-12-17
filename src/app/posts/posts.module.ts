import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { PostService } from './post.service';
import { PostPeopleComponent } from './post-people/post-people.component';
import { PostPlacesComponent } from './post-places/post-places.component';
import { PostPortfolioComponent } from './post-portfolio/post-portfolio.component';
import { FormContactComponent } from './form-contact/form-contact.component';

const routes: Routes = [
  { path: 'portfolio', component: PostPortfolioComponent },
  { path: 'people', component: PostPeopleComponent },
  { path: 'places', component: PostPlacesComponent },
  { path: 'contact', component: FormContactComponent }
]
@NgModule({
  declarations: [
    PostPeopleComponent,
    PostPlacesComponent,
    PostPortfolioComponent,
    FormContactComponent,
  ],
  imports: [
    SharedModule, 
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [PostService],
})
export class PostsModule {}
