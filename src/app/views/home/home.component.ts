import { Component, OnInit } from "@angular/core";

import { DataService } from "./services/data.service";
import { Item } from "~/app/shared/ui/item-list/item.model";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<Item>;

    constructor(
        private _itemService: DataService,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }

    onSelectedItem(id: number): void {
        this._routerExtensions.navigate([{ outlets: { homeTab: ['home', 'item-detail', id] } }],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
    }
}
