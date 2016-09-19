/**
 *
 */
abstract class Application {

    constructor(protected panel : JQuery, onClose: () => void) {
        panel.find(".close-application-btn").click(() => {
            panel.fadeOut(500, () => {
                onClose();
            });
        });
    }

    open(): void {
        this.panel.fadeIn(1000);
    }

}