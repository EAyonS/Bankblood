import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegdonantComponent } from './regdonant.component';

describe('RegdonantComponent', () => {
  let component: RegdonantComponent;
  let fixture: ComponentFixture<RegdonantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegdonantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegdonantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
