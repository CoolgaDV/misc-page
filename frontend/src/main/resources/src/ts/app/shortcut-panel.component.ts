import { Component } from '@angular/core';
import {ApplicationService} from "./application.service";
import {Panel} from "./panel";

@Component({
    selector: 'shortcut-panel',
    templateUrl: 'shortcut-panel.component.html'
})
export class ShortcutPanelComponent {

    constructor(private service: ApplicationService) { }

    openUuidApplication() {
        this.service.switchActivePanel(Panel.UuidApplication);
    }

    openBase64Application() {
        this.service.switchActivePanel(Panel.Base64Application);
    }

    isActive(): boolean {
        return this.service.getActivePanel() == Panel.ShortcutPanel;
    }

}
