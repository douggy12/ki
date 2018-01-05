package com.qualityboc.kiback;

import com.qualityboc.kiback.service.wrapper.UserInfoWrapper;
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

}
