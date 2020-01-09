/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualitybox.kiback.controller;


import static org.springframework.web.bind.annotation.RequestMethod.GET;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qualitybox.kiback.repository.KiTeamRepository;
import com.qualitybox.kiback.service.AuthService;
import com.qualitybox.kiback.service.IhniService;
import com.qualitybox.kiback.service.MixedTeamService;
import com.qualitybox.kiback.service.wrapper.BuWrapper;


/**
 *
 * @author dmetthey
 */
@RestController
@RequestMapping("/ihni/bu")
public class KiBuController {
    @Autowired
    IhniService ihniService;
    @Autowired
    MixedTeamService mixedTeamService;
    @Autowired
    KiTeamRepository kiTeamRepository;
    @Autowired
    AuthService authService;

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "", method = GET)
    @Async
    public List<BuWrapper> listTeam(@RequestHeader(value="Cookie") String cookieRaw) {
        String phpSESSID = this.authService.getPHPSESSID(cookieRaw);
        List<BuWrapper> allBu =  ihniService.getAllBU(phpSESSID);
        
        return allBu;
    }
}
