package cdv.mp.backend.service

import org.junit.Assert.*
import org.junit.Test

/**
 * Unit tests set for [UuidService]
 *
 * @author Dmitry Coolga
 * *         15.10.2016 18:54
 */
class UuidServiceTest {

    private val service: UuidService = UuidService()

    @Test
    fun testGenerateUuidWithBraces() {
        val uuid = service.generateUuid(braces = true, uppercase = false, hyphens = false)
        assertTrue("UUID $uuid should start with opening curly brace", uuid.startsWith("{"))
        assertTrue("UUID $uuid should end with closing curly brace", uuid.endsWith("}"))
    }

    @Test
    fun testGenerateUppercaseUuid() {
        val uuid = service.generateUuid(braces = false, uppercase = true, hyphens = false)
        assertTrue("UUID $uuid should be uppercase", uuid.toUpperCase() == uuid)
    }

    @Test
    fun testGenerateUuidWithHyphens() {
        val uuid = service.generateUuid(braces = false, uppercase = false, hyphens = true)
        assertTrue("UUID $uuid should contain hyphens", uuid.contains("-"))
    }

}