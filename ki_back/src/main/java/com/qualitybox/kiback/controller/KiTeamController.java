/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualitybox.kiback.controller;


import com.qualitybox.kiback.domain.KiTeam;
import com.qualitybox.kiback.repository.KiTeamRepository;
import com.qualitybox.kiback.service.AuthService;
import com.qualitybox.kiback.service.IhniService;
import com.qualitybox.kiback.service.MixedTeamService;
import com.qualitybox.kiback.service.wrapper.TeamInfoWrapper;
import com.qualitybox.kiback.service.wrapper.TeamWrapper;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.scheduling.annotation.Async;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;


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
    MixedTeamService mixedTeamService;
    @Autowired
    KiTeamRepository kiTeamRepository;
    @Autowired
    AuthService authService;

    @CrossOrigin
    @RequestMapping(value = "", method = GET)
    @Async
    public List<MixedTeamService> listTeam(@RequestHeader(value="Cookie") String cookieRaw) {
//        String[] cookieBag = cookieRaw.split(";");
//        String phpSESSID = "";
//        for (String cookieElem : cookieBag){
//            if(cookieElem.contains("PHPSESSID")) phpSESSID = cookieElem;
//        }
        String phpSESSID = this.authService.getPHPSESSID(cookieRaw);
        List<TeamWrapper> allTeam =  ihniService.getAllTeam(phpSESSID);
        List<MixedTeamService> allTeamJson = new ArrayList<>();
        allTeam.forEach(ihniTeam -> {
            TeamInfoWrapper teamInfo = new TeamInfoWrapper();
            teamInfo.setInfo(ihniTeam);
            allTeamJson.add(new MixedTeamService(teamInfo));
                });
        return allTeamJson;
    }

    @CrossOrigin
    @RequestMapping(value = "/{id}", method = GET)
    @Async
    public MixedTeamService getTeam(@RequestHeader(value = "Cookie") String cookieRaw,@PathVariable String id){
        String phpSESSID = this.authService.getPHPSESSID(cookieRaw);
        mixedTeamService.setTeam(id,phpSESSID);
        return mixedTeamService;
    }
    @CrossOrigin
    @RequestMapping(value = "/{id}", method = PUT)
    public ResponseEntity<?> update(@RequestHeader(value = "Cookie") String cookieRaw,@PathVariable String id, @RequestBody KiTeam kiTeam) {
        String phpSESSID = this.authService.getPHPSESSID(cookieRaw);
        KiTeam currentTeam = kiTeamRepository.findByIhniId(Long.valueOf(id));
        if (currentTeam == null) {
            return ResponseEntity.notFound().build();
        }
        if(!this.authService.isPilote(this.ihniService.getSessionUser(phpSESSID),this.ihniService.getIhniTeam(id, phpSESSID))){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
        currentTeam.setDescription(kiTeam.getDescription());
        currentTeam.setReferentIhniId(kiTeam.getReferentIhniId());
        currentTeam.setActivitySince(kiTeam.getActivitySince());
        kiTeamRepository.save(currentTeam);
        return ResponseEntity.accepted().build();
    }
    
}
