import {Injectable} from "@angular/core";
import {Panel} from "./panel";

@Injectable()
export class ApplicationService {

    private activePanel: Panel = Panel.ShortcutPanel;

    switchActivePanel(panel: Panel) : void {
        this.activePanel = panel;
    }

    getActivePanel() : Panel {
        return this.activePanel;
    }

}