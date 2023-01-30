import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBusinessComponent } from './feed-business.component';

describe('FeedBusinessComponent', () => {
  let component: FeedBusinessComponent;
  let fixture: ComponentFixture<FeedBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
