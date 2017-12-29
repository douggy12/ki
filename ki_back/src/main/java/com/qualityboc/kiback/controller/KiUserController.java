/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualityboc.kiback.controller;


import com.qualityboc.kiback.service.IhniService;
import com.qualityboc.kiback.service.wrapper.AllTeamWrapper;
import com.qualityboc.kiback.service.wrapper.AllUserWrapper;
import com.qualityboc.kiback.service.wrapper.TeamInfoWrapper;
import com.qualityboc.kiback.service.wrapper.TeamWrapper;
import com.qualityboc.kiback.service.wrapper.UserInfoWrapper;
import com.qualityboc.kiback.service.wrapper.UserWrapper;
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
    public List<UserInfoWrapper> listUser() {
        return ihniService.getAllIhniUser();
    }
    
    @RequestMapping(value = "user/{id}", method = GET)
    public UserWrapper getUser(@PathVariable String id) {      
        return ihniService.getIhniUser(id);
    }
    
    @RequestMapping(value = "team", method = GET)
    public List<TeamWrapper> listTeam() {
        List<TeamWrapper> allTeam = ihniService.getAllTeam();
               
        return allTeam;
    }
    
    @RequestMapping(value = "team/{id}", method = GET)
    public TeamInfoWrapper getTeam(@PathVariable String id){
        return ihniService.getIhniTeam(id);
    }
    
    
    
}
