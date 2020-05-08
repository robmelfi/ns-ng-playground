import { Input, Component } from "@angular/core";

import { Item } from "../item.model";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {
    @Input() item: Item;
}
