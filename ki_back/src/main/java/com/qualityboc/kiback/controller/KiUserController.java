/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualityboc.kiback.controller;


import com.qualityboc.kiback.service.IhniService;
import com.qualityboc.kiback.service.wrapper.AllUserWrapper;
import com.qualityboc.kiback.service.wrapper.UserInfoWrapper;
import com.qualityboc.kiback.service.wrapper.UserWrapper;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

/**
 *
 * @author dmetthey
 */
@RestController
@RequestMapping("/ihni")
public class KiUserController {
    
    @Autowired
    IhniService ihniService;
    
    @RequestMapping(method = GET)
    public List<UserInfoWrapper> list() {
        return ihniService.getAllIhniUser();
    }
    
    @RequestMapping(value = "/{id}", method = GET)
    public UserWrapper get(@PathVariable String id) {      
        return ihniService.getIhniUser(id);
    }
    
    @RequestMapping(value = "/{id}", method = PUT)
    public ResponseEntity<?> put(@PathVariable String id, @RequestBody Object input) {
        return null;
    }
    
    @RequestMapping(value = "/{id}", method = POST)
    public ResponseEntity<?> post(@PathVariable String id, @RequestBody Object input) {
        return null;
    }
    
    @RequestMapping(value = "/{id}", method = DELETE)
    public ResponseEntity<Object> delete(@PathVariable String id) {
        return null;
    }
    
}
