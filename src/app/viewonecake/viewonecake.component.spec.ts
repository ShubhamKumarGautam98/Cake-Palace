import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewonecakeComponent } from './viewonecake.component';

describe('ViewonecakeComponent', () => {
  let component: ViewonecakeComponent;
  let fixture: ComponentFixture<ViewonecakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewonecakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewonecakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
