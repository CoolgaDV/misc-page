package cdv.mp.backend.controller

import cdv.mp.backend.service.Base64Service
import org.junit.Assert.*
import org.junit.Test
import org.mockito.Mockito.*

/**
 * Unit tests set for [Base64Controller]
 *
 * @author Dmitry Coolga
 * *         16.10.2016 21:47
 */
class Base64ControllerTest {

    @Test
    fun testDecode() {
        val serviceMock = mock(Base64Service::class.java)
        `when`(serviceMock.decode("foo")).thenReturn("bar")
        assertEquals("bar", Base64Controller(serviceMock).decode("foo"))
    }

    @Test
    fun testEncode() {
        val serviceMock = mock(Base64Service::class.java)
        `when`(serviceMock.encode("foo")).thenReturn("bar")
        assertEquals("bar", Base64Controller(serviceMock).encode("foo"))
    }

}