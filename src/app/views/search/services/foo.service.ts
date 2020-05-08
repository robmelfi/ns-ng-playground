import { Injectable } from "@angular/core";
import { Item } from "~/app/shared/ui/item/item.model";

@Injectable({
    providedIn: "root"
})
export class FooService {

    private items = new Array<Item>(
        {
            id: 1,
            title: "Foo Item 1",
            description: "Description for Foo Item 1"
        },
        {
            id: 2,
            title: "Foo Item 2",
            description: "Description for Foo Item 2"
        },
        {
            id: 3,
            title: "Foo Item 3",
            description: "Description for Foo Item 3"
        },
        {
            id: 4,
            title: "ItFoo Itemem 4",
            description: "Description for Foo Item 4"
        },
        {
            id: 5,
            title: "Foo Item 5",
            description: "Description for Foo Item 5"
        },
        {
            id: 6,
            title: "Foo Item 6",
            description: "Description for Foo Item 6"
        },
        {
            id: 7,
            title: "Foo Item 7",
            description: "Description for Foo Item 7"
        },
        {
            id: 8,
            title: "Foo Item 8",
            description: "Description for Foo Item 8"
        },
        {
            id: 9,
            title: "Foo Item 9",
            description: "Description for Foo Item 9"
        },
        {
            id: 10,
            title: "Foo Item 10",
            description: "Description for Foo Item 10"
        },
        {
            id: 11,
            title: "Foo Item 11",
            description: "Description for Foo Item 11"
        },
        {
            id: 12,
            title: "Foo Item 12",
            description: "Description for Foo Item 12"
        },
        {
            id: 13,
            title: "Foo Item 13",
            description: "Description for Foo Item 13"
        },
        {
            id: 14,
            title: "Foo Item 14",
            description: "Description for Foo Item 14"
        },
        {
            id: 15,
            title: "Foo Item 15",
            description: "Description for Foo Item 15"
        },
        {
            id: 16,
            title: "Foo Item 16",
            description: "Description for Foo Item 16"
        },
        {
            id: 17,
            title: "Foo Item 17",
            description: "Description for Foo Item 17"
        },
        {
            id: 18,
            title: "Foo Item 18",
            description: "Description for Foo Item 18"
        },
        {
            id: 19,
            title: "Foo Item 19",
            description: "Description for Foo Item 19"
        },
        {
            id: 20,
            title: "Foo Item 20",
            description: "Description for Foo Item 20"
        }
    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id == id)[0];
    }
}
