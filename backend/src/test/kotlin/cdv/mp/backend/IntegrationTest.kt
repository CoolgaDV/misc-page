package cdv.mp.backend

import org.junit.Assert.assertEquals
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.test.IntegrationTest
import org.springframework.boot.test.SpringApplicationConfiguration
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner
import org.springframework.test.context.web.WebAppConfiguration
import org.springframework.web.client.RestTemplate

/**
 * Set of integration tests for REST API
 *
 * @author Dmitry Coolga
 *         16.10.2016 22:28
 */
@RunWith(SpringJUnit4ClassRunner::class)
@SpringApplicationConfiguration(classes = arrayOf(Bootstrap::class))
@WebAppConfiguration
@IntegrationTest("server.port:0")
class IntegrationTest {

    /** Injects port number of application  */
    @Value("\${local.server.port}")
    private var port: Int = 0

    private val template = RestTemplate()

    @Test
    fun testDecode() {
        assertEquals("foo", template.postForEntity(url("base64/decode"), "Zm9v", String::class.java).body)
    }

    @Test
    fun testEncode() {
        assertEquals("Zm9v", template.postForEntity(url("base64/encode"), "foo", String::class.java).body)
    }

    private fun url(postfix: String) = "http://localhost:$port/$postfix"

}