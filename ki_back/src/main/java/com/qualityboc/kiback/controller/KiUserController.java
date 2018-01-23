/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualityboc.kiback.controller;


import com.qualityboc.kiback.domain.KiUser;
import com.qualityboc.kiback.repository.KiUserRepository;
import com.qualityboc.kiback.service.IhniService;
import com.qualityboc.kiback.service.MixedUserService;
import com.qualityboc.kiback.service.wrapper.UserWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;


/**
 *
 * @author dmetthey
 */
@RestController
@RequestMapping("/ihni/user")
public class KiUserController {

    @Autowired
    MixedUserService mixedUserService;
    @Autowired
    KiUserRepository kiUserRepository;

    @CrossOrigin
    @RequestMapping(value = "/{id}", method = GET)
    public MixedUserService get(@PathVariable String id) {
        mixedUserService.setUser(id);
        return mixedUserService;
    }
    @CrossOrigin
    @RequestMapping(value = "/{id}", method = PUT)
    public ResponseEntity<?> update(@PathVariable String id, @RequestBody KiUser kiUser) {
        KiUser currentUser = kiUserRepository.findByIhniId(Long.valueOf(id));
        if (currentUser == null) {
            return ResponseEntity.notFound().build();
        }
        
        currentUser.setAvatar(kiUser.getAvatar());
        currentUser.setNbEnfant(kiUser.getNbEnfant());
        kiUserRepository.save(currentUser);
        return ResponseEntity.accepted().build(); 
    }
}
