package com.qualityboc.kiback;

import com.qualityboc.kiback.service.wrapper.UserWrapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class KibackApplication {

    private static final Logger log = LoggerFactory.getLogger(KibackApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(KibackApplication.class, args);
	}
        @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder) {
        return builder.build();
    }

    @Bean
    public CommandLineRunner run(RestTemplate restTemplate) throws Exception {
        return args -> {
            UserWrapper user = restTemplate.getForObject("http://qualitybox/api/user/2?apikey=9e6babc5542e", UserWrapper.class);
            log.info(user.toString()); 
        };
    }
}
