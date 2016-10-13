package cdv.mp.backend.config

import cdv.mp.backend.controller.Base64Controller
import cdv.mp.backend.controller.UuidController
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.EnableWebMvc
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter

/**
 * Spring web context configuration
 *
 * @author Dmitry Coolga
 * *         12.10.2016 07:11
 */
@Configuration
@EnableWebMvc
open class SpringWebConfiguration : WebMvcConfigurerAdapter() {

    @Autowired
    private lateinit var applicationConfiguration: SpringApplicationConfiguration

    open val base64Controller: Base64Controller
        @Bean
        get() = Base64Controller(applicationConfiguration.base64Service)

    open val uuidController: UuidController
        @Bean
        get() = UuidController(applicationConfiguration.uuidService)

}
