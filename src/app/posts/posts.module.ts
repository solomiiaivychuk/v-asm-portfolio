import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { SharedModule } from '../shared/shared.module';
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
    RouterModule.forChild(routes)
  ],
  providers: [PostService],
})
export class PostsModule {}
