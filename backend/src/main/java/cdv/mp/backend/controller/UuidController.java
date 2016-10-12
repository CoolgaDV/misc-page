package cdv.mp.backend.controller;

import cdv.mp.backend.service.UuidService;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller for Uuid application
 *
 * @author Dmitry Coolga
 *         12.10.2016 07:10
 */
@RestController
public class UuidController {

    private final UuidService service;

    public UuidController(UuidService service) {
        this.service = service;
    }

}