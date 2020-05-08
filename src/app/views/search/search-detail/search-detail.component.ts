import { Component, OnInit } from "@angular/core";
import { PageRoute } from "nativescript-angular/router";
import { switchMap } from 'rxjs/operators';

import { Item } from "~/app/shared/ui/item/item.model";
import { FooService } from "../services/foo.service";

@Component({
    selector: "<app-search-detail>",
    templateUrl: "./search-detail.component.html"
})
export class SearchDetailComponent implements OnInit {
    item: Item;

    constructor(
        private _dataService: FooService,
        private _pageRoute: PageRoute,
    ) { }

    ngOnInit(): void {
        console.log('ngInit');
        this._pageRoute.activatedRoute
            .pipe(switchMap((activatedRoute) => activatedRoute.params))
            .forEach((params) => {
                const itemId = params.id;
                this.item = this._dataService.getItem(itemId);
            });
    }

}
