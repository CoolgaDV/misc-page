/**
 *
 */
$(() => {
    initApplication($('#123'), new UuidApplication());
    initApplication($('#123'), new Base64Application());
});

function initApplication(widget: JQuery, application: Application): void {
    widget.click(() => {
        application.start();
    });
}