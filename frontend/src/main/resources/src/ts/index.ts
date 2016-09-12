/**
 *
 */
$(() => {
    initApplication($('#uuid-shortcut'), new UuidApplication());
    initApplication($('#base64-shortcut'), new Base64Application());
});

function initApplication(widget: JQuery, application: Application): void {
    widget.click(() => {
        application.start();
    });
}