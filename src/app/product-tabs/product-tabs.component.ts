import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductFilterComponent } from "../product-filter/product-filter.component";
import { ProductInventoryComponent } from "../product-inventory-header/product-inventory.component";
import { ProductInventoryInfoComponent } from "../product-inventory-info/product-inventory-info.component";

@Component({
  selector: "app-product-tabs",
  standalone: true,
  imports: [
    ProductFilterComponent,
    ProductInventoryComponent,
    ProductInventoryInfoComponent,
    CommonModule,
  ],
  templateUrl: "./product-tabs.component.html",
  styleUrl: "./product-tabs.component.scss",
})
export class ProductTabsComponent {
  activeTab: string = "overview";

  setTab(tabName: string) {
    this.activeTab = tabName;
  }

  isTabActive(tabName: string) {
    return this.activeTab === tabName;
  }
}
