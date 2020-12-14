import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPeopleComponent } from './post-people.component';

describe('PostPeopleComponent', () => {
  let component: PostPeopleComponent;
  let fixture: ComponentFixture<PostPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
