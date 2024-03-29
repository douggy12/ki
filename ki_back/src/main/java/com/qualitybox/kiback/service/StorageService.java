/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualitybox.kiback.service;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.logging.Level;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author dmetthey
 */
@Service
public class StorageService {
   String home = System.getenv("CATALINA_BASE");
    Logger log = LoggerFactory.getLogger(this.getClass().getName());
    private final Path rootLocation = Paths.get(home + "/avatar");

    public void store(MultipartFile file, String fileName) {
        if (!file.getContentType().contains("image/")) {
            throw new RuntimeException("Fail ! Le fichier n'est pas une image");
        }
//        fileName = fileName + "." + file.getContentType().replace("image/", "");
        try {
            Files.deleteIfExists(Paths.get("avatar/" + fileName));
        } catch (IOException e) {
            throw new RuntimeException("FAIL !\n" + e);
        }
        try {
            Files.copy(file.getInputStream(), this.rootLocation.resolve(fileName));
        } catch (Exception e) {
            throw new RuntimeException("FAIL !\n" + e);
        }

    }

    public Resource loadFile(String filename) {
        try {
            Path file = rootLocation.resolve(filename);
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("FAil ! ");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Fail !");
        }
    }

    public Path loadPath(String filename) {
        try {
        Path file = rootLocation.resolve(filename);
        return file;
        
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return rootLocation.resolve("def_2.jpeg");
        }

    }

    public void deleteAll() {
        FileSystemUtils.deleteRecursively(rootLocation.toFile());
    }

    public void init() {
    	
        if (Files.notExists(Paths.get("avatar"))) {
            try {
                Files.createDirectory(rootLocation);
            } catch (IOException e) {
//                throw new RuntimeException("Could not initialize storage!");
            }
        }

    }
}
