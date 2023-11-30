import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoArticleComponent } from './info-article.component';

describe('InfoArticleComponent', () => {
  let component: InfoArticleComponent;
  let fixture: ComponentFixture<InfoArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoArticleComponent]
    });
    fixture = TestBed.createComponent(InfoArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
