import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPostTopComponent } from './product-post-top.component';

describe('ProductPostTopComponent', () => {
  let component: ProductPostTopComponent;
  let fixture: ComponentFixture<ProductPostTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPostTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductPostTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
