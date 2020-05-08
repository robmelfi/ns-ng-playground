import { Component, OnInit } from "@angular/core";
import { PageRoute } from "nativescript-angular/router";
import { switchMap } from 'rxjs/operators';

import { DataService } from "../services/data.service";
import { Item } from "~/app/shared/ui/item-list/item.model";

@Component({
    selector: 'app-home-detail',
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: Item;

    constructor(
        private _dataService: DataService,
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
