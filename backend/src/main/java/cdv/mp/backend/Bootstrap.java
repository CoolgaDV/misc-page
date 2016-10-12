package cdv.mp.backend;

import cdv.mp.backend.config.SpringApplicationConfiguration;
import cdv.mp.backend.config.SpringWebConfiguration;
import org.springframework.boot.Banner;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.annotation.Import;

import java.io.IOException;
import java.net.URISyntaxException;

/**
 * Application entry point
 *
 * @author Dmitry Coolga
 *         12.10.2016 06:58
 */
@EnableAutoConfiguration
@Import({ SpringApplicationConfiguration.class, SpringWebConfiguration.class })
public class Bootstrap {

    public static void main(String[] args) throws IOException, URISyntaxException {
        new SpringApplicationBuilder(Bootstrap.class).bannerMode(Banner.Mode.OFF).run(args);
    }

}
