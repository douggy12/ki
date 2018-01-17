/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualityboc.kiback.controller;


import com.qualityboc.kiback.domain.KiTeam;
import com.qualityboc.kiback.repository.KiTeamRepository;
import com.qualityboc.kiback.service.IhniService;
import com.qualityboc.kiback.service.MixedTeamService;
import com.qualityboc.kiback.service.wrapper.TeamInfoWrapper;
import com.qualityboc.kiback.service.wrapper.TeamWrapper;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/ihni/team")
public class KiTeamController {
    @Autowired
    IhniService ihniService;
    @Autowired
    MixedTeamService mixedTeamService;
    @Autowired
    KiTeamRepository kiTeamRepository;

    @CrossOrigin
    @RequestMapping(value = "", method = GET)
    public List<MixedTeamService> listTeam() {
        List<TeamWrapper> allTeam =  ihniService.getAllTeam();
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
    public MixedTeamService getTeam(@PathVariable String id){
        mixedTeamService.setTeam(id);
        return mixedTeamService;
    }
    @CrossOrigin
    @RequestMapping(value = "/{id}", method = PUT)
    public ResponseEntity<?> update(@PathVariable String id, @RequestBody KiTeam kiTeam) {
        KiTeam currentTeam = kiTeamRepository.findByIhniId(Long.valueOf(id));
        if (currentTeam == null) {
            return ResponseEntity.notFound().build();
        }
        currentTeam.setDescription(kiTeam.getDescription());
        kiTeamRepository.save(currentTeam);
        return ResponseEntity.accepted().build();
    }
    
    
}
