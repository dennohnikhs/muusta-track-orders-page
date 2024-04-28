import { Component } from "@angular/core";
import { ProductFilterActionComponent } from "../product-filter-action/product-filter-action.component";

@Component({
  selector: "app-product-filter",
  standalone: true,
  imports: [ProductFilterActionComponent],
  templateUrl: "./product-filter.component.html",
  styleUrl: "./product-filter.component.scss",
})
export class ProductFilterComponent {}
