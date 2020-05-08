import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "./item.model";

@Component({
    selector: 'app-itemlist',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
    @Input() items: Item;
    @Output() idSelectedItem = new EventEmitter<number>();

    onItemTap(id: number) {
        this.idSelectedItem.emit(id);
    }
}
