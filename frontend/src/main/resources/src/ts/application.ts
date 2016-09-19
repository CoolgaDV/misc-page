/**
 *
 */
abstract class Application {

    constructor(protected panel : JQuery, onClose: () => void) {
        panel.find(".close-application-btn").click(() => {
            panel.fadeOut(FADE_OUT_TIMEOUT, () => {
                onClose();
            });
        });
    }

    open(): void {
        this.panel.fadeIn(FADE_IN_TIMEOUT);
    }

}