import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFilterActionComponent } from './product-filter-action.component';

describe('ProductFilterActionComponent', () => {
  let component: ProductFilterActionComponent;
  let fixture: ComponentFixture<ProductFilterActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFilterActionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductFilterActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
