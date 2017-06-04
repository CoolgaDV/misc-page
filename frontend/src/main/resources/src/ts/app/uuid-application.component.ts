import { Component } from '@angular/core';
import {ApplicationService} from "./application.service";
import {Panel} from "./panel";
import {UuidApplicationService} from "./uuid-application.service";

@Component({
    selector: 'uuid-application',
    templateUrl: 'uuid-application.component.html',
    providers: [ UuidApplicationService ]
})
export class UuidApplicationComponent {

    private uuid: string = "";

    constructor(
        private applicationService: ApplicationService,
        private uuidApplicationService: UuidApplicationService) { }

    isActive(): boolean {
        return this.applicationService.getActivePanel() == Panel.UuidApplication;
    }

    back(): void {
        this.applicationService.switchActivePanel(Panel.ShortcutPanel);
    }

    getUuid(): string {
        return this.uuid;
    }

    generateUuid(): void {
        this.uuidApplicationService.getUuid().then(uuid => {
            this.uuid = uuid.uuid;
        });
    }

}