package cdv.mp.backend.config;

import cdv.mp.backend.service.Base64Service;
import cdv.mp.backend.service.UuidService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Spring application context configuration
 *
 * @author Dmitry Coolga
 *         12.10.2016 07:11
 */
@Configuration
public class SpringApplicationConfiguration {

    @Bean
    public Base64Service getBase64Service() {
        return new Base64Service();
    }

    @Bean
    public UuidService getUuidService() {
        return new UuidService();
    }

}
