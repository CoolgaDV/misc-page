package cdv.mp.backend

import cdv.mp.backend.config.SpringApplicationConfiguration
import cdv.mp.backend.config.SpringWebConfiguration
import org.springframework.boot.Banner
import org.springframework.boot.actuate.system.ApplicationPidFileWriter
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.boot.builder.SpringApplicationBuilder
import org.springframework.context.annotation.Import

/**
 * Application entry point
 *
 * @author Dmitry Coolga
 *         12.10.2016 07:50
 */
@EnableAutoConfiguration
@Import(SpringApplicationConfiguration::class, SpringWebConfiguration::class)
class Bootstrap

fun main(args: Array<String>) {
    SpringApplicationBuilder(Bootstrap::class.java)
            .listeners(ApplicationPidFileWriter())
            .bannerMode(Banner.Mode.OFF)
            .run(*args)
}