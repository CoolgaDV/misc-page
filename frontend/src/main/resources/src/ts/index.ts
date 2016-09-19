/**
 *
 */
$(() => {

    let shortcutPanel: JQuery = $("#shortcut-panel");
    let applicationCloseHandler: () => void =
        () => shortcutPanel.fadeIn(FADE_IN_TIMEOUT);

    initApplication(
        $('#uuid-shortcut'),
        shortcutPanel,
        new UuidApplication(applicationCloseHandler));

    initApplication(
        $('#base64-shortcut'),
        shortcutPanel,
        new Base64Application(applicationCloseHandler));
});

function initApplication(shortcut: JQuery, shortcutPanel: JQuery, application: Application): void {
    shortcut.click(() => {
        shortcutPanel.fadeOut(FADE_OUT_TIMEOUT, () => {
            application.open();
        });
    });
}