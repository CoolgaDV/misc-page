/**
 *
 */
abstract class Application {

    constructor(protected panel : JQuery, onClose: () => void) {
        panel.find(".close-application-btn").click(() => {
            panel.hide();
            onClose();
        });
    }

    open(): void {
        this.panel.show();
    }

}