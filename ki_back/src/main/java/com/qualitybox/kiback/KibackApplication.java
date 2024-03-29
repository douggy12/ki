package com.qualitybox.kiback;

import com.qualitybox.kiback.service.StorageService;
import java.io.File;
import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class KibackApplication implements CommandLineRunner{

    private static final Logger log = LoggerFactory.getLogger(KibackApplication.class);

    public static void main(String[] args) {
        
        SpringApplication.run(KibackApplication.class, args);
    }
    @Override
    public void run(String... arg) throws Exception {
//        storageService.deleteAll();
/*        storageService.init();*/
    }
}
