package cdv.mp.backend.service

import java.util.*

/**
 * Service for Uuid application
 *
 * @author Dmitry Coolga
 *         13.10.2016 07:20
 */
class UuidService {

    fun generateUuid(braces: Boolean, hyphens: Boolean, uppercase: Boolean): String {
        var result = UUID.randomUUID().toString()
        result = if (uppercase) result.toUpperCase() else result
        result = if (braces) "{$result}" else result
        result = if (hyphens) result else result.replace("-", "")
        return result
    }

}
