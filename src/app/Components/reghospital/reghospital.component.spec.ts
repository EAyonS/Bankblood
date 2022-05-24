import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReghospitalComponent } from './reghospital.component';

describe('ReghospitalComponent', () => {
  let component: ReghospitalComponent;
  let fixture: ComponentFixture<ReghospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReghospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReghospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
