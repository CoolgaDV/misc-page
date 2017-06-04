import { Component } from '@angular/core';
import {ApplicationService} from "./application.service";
import {Panel} from "./panel";

@Component({
    selector: 'base64-application',
    templateUrl: 'base64-application.component.html'
})
export class Base64ApplicationComponent {

    constructor(private service: ApplicationService) { }

    isActive(): boolean {
        return this.service.getActivePanel() == Panel.Base64Application;
    }

    back(): void {
        this.service.switchActivePanel(Panel.ShortcutPanel);
    }

}