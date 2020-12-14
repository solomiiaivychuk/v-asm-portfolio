import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPlacesComponent } from './post-places.component';

describe('PostPlacesComponent', () => {
  let component: PostPlacesComponent;
  let fixture: ComponentFixture<PostPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
