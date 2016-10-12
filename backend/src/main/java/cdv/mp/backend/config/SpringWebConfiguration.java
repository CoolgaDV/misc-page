package cdv.mp.backend.config;

import cdv.mp.backend.controller.Base64Controller;
import cdv.mp.backend.controller.UuidController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Spring web context configuration
 *
 * @author Dmitry Coolga
 *         12.10.2016 07:11
 */
@Configuration
@EnableWebMvc
public class SpringWebConfiguration extends WebMvcConfigurerAdapter {

    @Autowired
    private SpringApplicationConfiguration applicationConfiguration;

    @Bean
    public Base64Controller getBase64Controller() {
        return new Base64Controller(applicationConfiguration.getBase64Service());
    }

    @Bean
    public UuidController getUuidController() {
        return new UuidController(applicationConfiguration.getUuidService());
    }

}
