import { Component } from '@angular/core';
import {ApplicationService} from "./application.service";
import {Panel} from "./panel";

@Component({
    selector: 'uuid-application',
    templateUrl: 'uuid-application.component.html'
})
export class UuidApplicationComponent {

    constructor(private service: ApplicationService) { }

    isActive(): boolean {
        return this.service.getActivePanel() == Panel.UuidApplication;
    }

    back(): void {
        this.service.switchActivePanel(Panel.ShortcutPanel);
    }

}