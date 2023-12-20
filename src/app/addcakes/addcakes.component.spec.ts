import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcakesComponent } from './addcakes.component';

describe('AddcakesComponent', () => {
  let component: AddcakesComponent;
  let fixture: ComponentFixture<AddcakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddcakesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddcakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
