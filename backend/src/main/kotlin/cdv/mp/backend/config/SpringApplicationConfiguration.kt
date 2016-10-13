package cdv.mp.backend.config

import cdv.mp.backend.service.Base64Service
import cdv.mp.backend.service.UuidService
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

/**
 * Spring application context configuration
 *
 * @author Dmitry Coolga
 * *         12.10.2016 07:11
 */
@Configuration
open class SpringApplicationConfiguration {

    open val base64Service: Base64Service
        @Bean
        get() = Base64Service()

    open val uuidService: UuidService
        @Bean
        get() = UuidService()

}
