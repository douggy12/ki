/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualitybox.kiback.controller;

import com.qualitybox.kiback.repository.KiUserRepository;
import com.qualitybox.kiback.service.StorageService;
import com.qualitybox.kiback.domain.KiUser;
import com.qualitybox.kiback.service.AuthService;
import com.qualitybox.kiback.service.IhniService;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author dmetthey
 */
@RestController
@RequestMapping("/img")
public class UploadController {

    @Autowired
    StorageService storageService;
    @Autowired
    KiUserRepository kiUserRepository;
    @Autowired
    AuthService authService;
    @Autowired
    IhniService ihniService;
    
    @CrossOrigin
    @RequestMapping(value = "/{id}", method = GET)
    public Map<String, String> getFile2(@PathVariable String id) throws IOException {
        String filename;
        try {
            filename = kiUserRepository.findByIhniId(Long.parseLong(id)).getAvatar();
        } catch (Exception e) {
            System.err.println("Pas de user ki trouvé, erreur : " + e.getMessage());
            filename = "def_2.jpeg";
        }

        if (filename == null) {
            filename = "def_2.jpeg";
        }

        Path file = storageService.loadPath(filename);
        String encodeImg = Base64.getEncoder().withoutPadding().encodeToString(Files.readAllBytes(file));

        Map<String, String> jsonMap = new HashMap<>();
        jsonMap.put("content", encodeImg);
        return jsonMap;

    }

    @CrossOrigin
    @RequestMapping(value = "/post", method = POST)
    public ResponseEntity<String> handleFileUpload(@RequestHeader(value = "Cookie") String cookieRaw,@RequestParam("file") MultipartFile file, @RequestParam("id") String id) {
        String message = "";
        String phpSESSID = this.authService.getPHPSESSID(cookieRaw);
        /*
        Vérification identité avant upload
        */
        if(!this.ihniService.getSessionUser(phpSESSID).getId().equals(Long.valueOf(id))){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
//        Upload et met à jour KiUser si pas d'exception'
        try {
            String fileName = "avatar_" + id + "." + file.getContentType().replace("image/", "");
            storageService.store(file, fileName);
            message = "Upload success !";
            KiUser kiUser = kiUserRepository.findByIhniId(Long.parseLong(id));
            kiUser.setAvatar(fileName);
            kiUserRepository.save(kiUser);
            return ResponseEntity.status(HttpStatus.OK).body(message);
        } catch (Exception e) {
            message = "Upload Failed " + file.getOriginalFilename() + "!" + "\n" + e;
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
        }
    }

}
