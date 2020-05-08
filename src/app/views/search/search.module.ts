import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SharedModule } from "~/app/shared/shared.module";
import { SearchRoutingModule } from "./search-routing.module";

import { SearchComponent } from "./search.component";
import { SearchDetailComponent } from "./search-detail/search-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SearchRoutingModule,
        SharedModule
    ],
    declarations: [
        SearchComponent,
        SearchDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SearchModule { }
