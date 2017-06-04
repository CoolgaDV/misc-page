import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApplicationComponent }  from './application.component';
import {ShortcutPanelComponent} from "./shortcut-panel.component";
import {UuidApplicationComponent} from "./uuid-application.component";
import {Base64ApplicationComponent} from "./base64-application.component";
import {ApplicationService} from "./application.service";

@NgModule({
    imports: [ BrowserModule ],
    declarations: [
        ApplicationComponent,
        ShortcutPanelComponent,
        UuidApplicationComponent,
        Base64ApplicationComponent
    ],
    bootstrap: [ ApplicationComponent ],
    providers: [ ApplicationService ]
})
export class ApplicationModule { }