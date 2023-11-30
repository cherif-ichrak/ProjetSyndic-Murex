import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexesComponent } from './annexes.component';

describe('AnnexesComponent', () => {
  let component: AnnexesComponent;
  let fixture: ComponentFixture<AnnexesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnexesComponent]
    });
    fixture = TestBed.createComponent(AnnexesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
