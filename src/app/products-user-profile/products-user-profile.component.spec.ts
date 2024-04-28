import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsUserProfileComponent } from './products-user-profile.component';

describe('ProductsUserProfileComponent', () => {
  let component: ProductsUserProfileComponent;
  let fixture: ComponentFixture<ProductsUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsUserProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
