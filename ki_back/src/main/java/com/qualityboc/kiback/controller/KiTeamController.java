/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualityboc.kiback.controller;


import com.qualityboc.kiback.service.IhniService;
import com.qualityboc.kiback.service.MixedUserService;
import com.qualityboc.kiback.service.wrapper.TeamInfoWrapper;
import com.qualityboc.kiback.service.wrapper.TeamWrapper;
import com.qualityboc.kiback.service.wrapper.UserInfoWrapper;
import com.qualityboc.kiback.service.wrapper.UserWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;


/**
 *
 * @author dmetthey
 */
@RestController
@RequestMapping("/ihni/team")
public class KiTeamController {
    
    @Autowired
    IhniService ihniService;
    @Autowired
    MixedUserService mixedUserService;

    @RequestMapping(value = "", method = GET)
    public List<TeamWrapper> listTeam() {
        List<TeamWrapper> allTeam = ihniService.getAllTeam();
               
        return allTeam;
    }
    
    @RequestMapping(value = "/{id}", method = GET)
    public TeamInfoWrapper getTeam(@PathVariable String id){
        return ihniService.getIhniTeam(id);
    }
    
    
    
}
