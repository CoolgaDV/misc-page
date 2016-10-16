package cdv.mp.backend.service

import org.junit.Assert.*
import org.junit.Test

/**
 * Unit tests set for [Base64Service]
 *
 * @author Dmitry Coolga
 * *         16.10.2016 21:19
 */
class Base64ServiceTest {

    private val service: Base64Service = Base64Service()

    @Test
    fun testEncode() {
        assertEquals("Zm9v", service.encode("foo"))
    }

    @Test
    fun testDecode() {
        assertEquals("foo", service.decode("Zm9v"))
    }

}