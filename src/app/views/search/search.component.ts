import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { FooService } from "./services/foo.service";
import { Item } from "~/app/shared/ui/item/item.model";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    items: Array<Item>;

    constructor(
        private _fooService: FooService,
        private _routerExt: RouterExtensions
    ) {}

    ngOnInit(): void {
        this.items = this._fooService.getItems();
    }

    onSelectedItem(id: number): void {
        this._routerExt.navigate([{ outlets: { searchTab: ['search', 'search-detail', id] } }],
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
