/**
 *
 */
class UuidApplication extends Application {

    constructor(onClose: () => void) {
        super($("#uuid-application"), onClose);
        $("#btn-generate").click(UuidApplication.generateUuid);
    }

    private static generateUuid() : void {
        $.ajax("rest/uuid.json", {
            method: "GET",
            data: {
                "braces" : true,
                "uppercase" : false,
                "hyphens" : true
            },
            success: (data: UuidResponse) => {
                console.info("data: " + data.uuid)
            }
        });
    }

}

class UuidResponse {
    uuid: string;
}