import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoComponent } from './como.component';

describe('ComoComponent', () => {
  let component: ComoComponent;
  let fixture: ComponentFixture<ComoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
