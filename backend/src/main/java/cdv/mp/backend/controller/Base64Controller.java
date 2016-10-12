package cdv.mp.backend.controller;

import cdv.mp.backend.service.Base64Service;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller for Base64 application
 *
 * @author Dmitry Coolga
 *         12.10.2016 07:10
 */
@RestController
public class Base64Controller {

    private final Base64Service service;

    public Base64Controller(Base64Service service) {
        this.service = service;
    }

}
