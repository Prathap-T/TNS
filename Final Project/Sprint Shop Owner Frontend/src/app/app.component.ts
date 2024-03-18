import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShopownerComponent } from "./shopowner/shopowner.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ShopownerComponent]
})
export class AppComponent {
  title = 'PlacementFrontend';
}
