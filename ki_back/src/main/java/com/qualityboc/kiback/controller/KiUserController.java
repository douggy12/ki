/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualityboc.kiback.controller;


import com.qualityboc.kiback.service.IhniService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import static org.springframework.web.bind.annotation.RequestMethod.GET;


/**
 *
 * @author dmetthey
 */
@RestController
@RequestMapping("/ihni")
public class KiUserController {
    
    @Autowired
    IhniService ihniService;
    
    @RequestMapping(value = "user", method = GET)
    public List<Object> list() {
        return ihniService.getAllIhniUser();
    }
    
    @RequestMapping(value = "user/{id}", method = GET)
    public Object get(@PathVariable String id) {      
        return ihniService.getIhniUser(id);
    }
    
    @RequestMapping(value = "team", method = GET)
    public List<Object> listTeam() {
        return ihniService.getAllTeam();
    }
    
    
    
}
