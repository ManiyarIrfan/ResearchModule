import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NavbarsComponent } from "./navbars/navbars.component";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NavbarsComponent
    ],
    exports: [
        NavbarsComponent
    ]
})

export class SharedComponentModule { }