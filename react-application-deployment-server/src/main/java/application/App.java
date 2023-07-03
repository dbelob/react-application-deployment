package application;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class App extends SpringBootServletInitializer {
    private static final Logger log = LoggerFactory.getLogger(App.class);

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(App.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);

        if (log.isInfoEnabled()) {
            log.info("OS name: {}, OS version: {}, OS architecture: {}", System.getProperty("os.name"),
                    System.getProperty("os.version"), System.getProperty("os.arch"));
            log.info("JRE version: {}", System.getProperty("java.version"));
        }
    }
}
