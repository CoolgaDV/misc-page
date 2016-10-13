package cdv.mp.backend.controller

import cdv.mp.backend.service.Base64Service
import org.springframework.web.bind.annotation.RestController

/**
 * Controller for Base64 application
 *
 * @author Dmitry Coolga
 * *         12.10.2016 07:10
 */
@RestController
class Base64Controller(private val service: Base64Service)
