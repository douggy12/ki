/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualitybox.kiback.controller;


import com.qualitybox.kiback.domain.KiUser;
import com.qualitybox.kiback.repository.KiUserRepository;
import com.qualitybox.kiback.service.AuthService;
import com.qualitybox.kiback.service.IhniService;
import com.qualitybox.kiback.service.MixedUserService;
import com.qualitybox.kiback.service.wrapper.UserInfoWrapper;
import com.qualitybox.kiback.service.wrapper.UserWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.scheduling.annotation.Async;

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
    @Autowired
    AuthService authService;
    @Autowired
    IhniService ihniService;
    

    @CrossOrigin
    @RequestMapping(value = "/{id}", method = GET)
    @Async
    public MixedUserService get(@PathVariable String id,@RequestHeader(value = "Cookie") String cookieRaw) {
        String phpSESSID = this.authService.getPHPSESSID(cookieRaw);
        mixedUserService.setUser(id, phpSESSID);
        return mixedUserService;
    }
    @CrossOrigin
    @RequestMapping(value = "/{id}", method = PUT)
    @Async
    public ResponseEntity<?> update(@RequestHeader(value = "Cookie") String cookieRaw,@PathVariable String id, @RequestBody KiUser kiUser) {
        KiUser currentUser = kiUserRepository.findByIhniId(Long.valueOf(id));
        if (currentUser == null) {
            return ResponseEntity.notFound().build();
        }
        
        if(!kiUser.getIhniId().equals(this.ihniService.getSessionUser(cookieRaw).getId())){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
        currentUser.setAvatar(kiUser.getAvatar());
        currentUser.setNbEnfant(kiUser.getNbEnfant());
        currentUser.setTeamH(kiUser.getTeamH()); 
        kiUserRepository.save(currentUser);
        return ResponseEntity.accepted().build(); 
    }
    @CrossOrigin
    @RequestMapping(value = "", method = GET)
    @Async
    public List<UserInfoWrapper> getByName (@RequestParam("term") String string, @RequestHeader(value = "Cookie") String cookieRaw) {
        String phpSESSID = this.authService.getPHPSESSID(cookieRaw);
        return this.mixedUserService.getIhniUserByName(string, phpSESSID);
    }

    @CrossOrigin
    @RequestMapping(value = "/authme", method = GET)
    @Async
    public UserWrapper authme(@RequestHeader(value = "Cookie") String cookieRaw) {
        return this.ihniService.getSessionUser(cookieRaw);
    }
    
}
