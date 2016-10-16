package cdv.mp.backend.controller

import cdv.mp.backend.service.Base64Service
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

/**
 * Controller for Base64 application
 *
 * @author Dmitry Coolga
 * *         12.10.2016 07:10
 */
@RestController()
@RequestMapping("/base64")
class Base64Controller(private val service: Base64Service) {

    @RequestMapping(value = "/decode", method = arrayOf(RequestMethod.POST))
    fun decode(@RequestBody data: String): String = service.decode(data)

    @RequestMapping(value = "/encode", method = arrayOf(RequestMethod.POST))
    fun encode(@RequestBody data: String): String = service.encode(data)

}
