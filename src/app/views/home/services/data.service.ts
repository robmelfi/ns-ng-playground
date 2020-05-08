import { Injectable } from "@angular/core";
import { Item } from "~/app/shared/ui/item-list/item.model";

@Injectable({
    providedIn: "root"
})
export class DataService {

    private items = new Array<Item>(
        {
            id: 1,
            title: "Item 1",
            description: "Description for Item 1"
        },
        {
            id: 2,
            title: "Item 2",
            description: "Description for Item 2"
        },
        {
            id: 3,
            title: "Item 3",
            description: "Description for Item 3"
        },
        {
            id: 4,
            title: "Item 4",
            description: "Description for Item 4"
        },
        {
            id: 5,
            title: "Item 5",
            description: "Description for Item 5"
        },
        {
            id: 6,
            title: "Item 6",
            description: "Description for Item 6"
        },
        {
            id: 7,
            title: "Item 7",
            description: "Description for Item 7"
        },
        {
            id: 8,
            title: "Item 8",
            description: "Description for Item 8"
        },
        {
            id: 9,
            title: "Item 9",
            description: "Description for Item 9"
        },
        {
            id: 10,
            title: "Item 10",
            description: "Description for Item 10"
        },
        {
            id: 11,
            title: "Item 11",
            description: "Description for Item 11"
        },
        {
            id: 12,
            title: "Item 12",
            description: "Description for Item 12"
        },
        {
            id: 13,
            title: "Item 13",
            description: "Description for Item 13"
        },
        {
            id: 14,
            title: "Item 14",
            description: "Description for Item 14"
        },
        {
            id: 15,
            title: "Item 15",
            description: "Description for Item 15"
        },
        {
            id: 16,
            title: "Item 16",
            description: "Description for Item 16"
        },
        {
            id: 17,
            title: "Item 17",
            description: "Description for Item 17"
        },
        {
            id: 18,
            title: "Item 18",
            description: "Description for Item 18"
        },
        {
            id: 19,
            title: "Item 19",
            description: "Description for Item 19"
        },
        {
            id: 20,
            title: "Item 20",
            description: "Description for Item 20"
        }
    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id == id)[0];
    }
}
