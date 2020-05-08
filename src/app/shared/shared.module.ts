import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular";

import { ItemDetailComponent } from "./ui/item-list/item-detail/item-detail.component";
import { ItemListComponent } from "./ui/item-list/item-list.component";

@NgModule({
    imports: [NativeScriptCommonModule],
    declarations: [
        ItemListComponent,
        ItemDetailComponent
    ],
    exports: [
        ItemListComponent,
        ItemDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule {}
