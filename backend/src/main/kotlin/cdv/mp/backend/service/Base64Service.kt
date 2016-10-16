package cdv.mp.backend.service

import java.nio.charset.Charset
import java.util.*

/**
 * Service for Base64 application
 *
 * @author Dmitry Coolga
 * *         12.10.2016 07:12
 */
open class Base64Service {

    companion object {
        private val CHARSET: Charset = Charsets.UTF_8
    }

    open fun encode(data: String): String {
        return Base64.getEncoder().encodeToString(data.toByteArray(CHARSET))
    }

    open fun decode(data: String): String {
        return String(Base64.getDecoder().decode(data), CHARSET)
    }

}
