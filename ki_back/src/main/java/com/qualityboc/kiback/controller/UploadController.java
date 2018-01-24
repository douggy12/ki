/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualityboc.kiback.controller;

import com.qualityboc.kiback.repository.KiUserRepository;
import com.qualityboc.kiback.service.StorageService;
import com.qualityboc.kiback.domain.KiUser;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
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

    @RequestMapping(value = "/{id}", method = GET)
    @ResponseBody
    @CrossOrigin
    public ResponseEntity<Resource> getFile(@PathVariable String id) {
        String filename = kiUserRepository.findByIhniId(Long.parseLong(id)).getAvatar();
        System.out.println(filename);
        Resource file = storageService.loadFile(filename);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
                .body(file);
    }
    @CrossOrigin
    @RequestMapping(value = "/post", method = POST)
    public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file, @RequestParam("id") String id) {
        String message = "";
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
