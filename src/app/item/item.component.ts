import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
	selector: "Item",
	moduleId: module.id,
	templateUrl: "./item.component.html"
})
export class ItemComponent implements OnInit {

	constructor(private routerExtensions: RouterExtensions) {
	}

	ngOnInit(): void {
        console.log(this.routerExtensions.router.url);
	}

	goBack(): void {
		this.routerExtensions.back();
	}
}
