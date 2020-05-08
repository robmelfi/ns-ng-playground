import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SearchComponent } from "./search.component";
import { SearchDetailComponent } from "./search-detail/search-detail.component";

const routes: Routes = [
    { path: "default", component: SearchComponent },
    { path: "search-detail/:id", component: SearchDetailComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SearchRoutingModule { }
