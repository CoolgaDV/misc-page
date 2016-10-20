package cdv.mp.backend.controller

import cdv.mp.backend.service.UuidService
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

/**
 * Controller for Uuid application
 *
 * @author Dmitry Coolga
 * *         12.10.2016 07:10
 */
@RestController
@RequestMapping("/uuid")
class UuidController(private val service: UuidService) {

    @RequestMapping(value = "/generate", method = arrayOf(RequestMethod.GET))
    fun generateUuid(@RequestParam("braces") braces: Boolean,
                     @RequestParam("hyphens") hyphens: Boolean,
                     @RequestParam("uppercase") uppercase: Boolean): String {
        return service.generateUuid(braces = braces, hyphens = hyphens, uppercase = uppercase)
    }

}