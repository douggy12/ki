/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualityboc.kiback.service;

import com.qualityboc.kiback.service.wrapper.AllTeamWrapper;
import com.qualityboc.kiback.service.wrapper.AllUserWrapper;
import com.qualityboc.kiback.service.wrapper.TeamInfoWrapper;
import com.qualityboc.kiback.service.wrapper.TeamWrapper;
import com.qualityboc.kiback.service.wrapper.UserWrapper;
import com.qualityboc.kiback.service.wrapper.UserInfoWrapper;
import java.util.Arrays;
import java.util.LinkedList;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 *
 * @author dmetthey
 */
@Service
public class IhniService {

    private String ihniApiKey;
    private String ihniUrl;

    public UserInfoWrapper getIhniUser(String id) {
        UserInfoWrapper user = new RestTemplate().getForObject("http://qualitybox/api/user/" + id + "?apikey=9e6babc5542e", UserInfoWrapper.class);
        return user;
    }

    public List<UserWrapper> getAllIhniUser() {
        AllUserWrapper[] userArray = new RestTemplate().getForObject("http://qualitybox/api/alluser?apikey=9e6babc5542e", AllUserWrapper[].class);
        List<UserWrapper> userList = new LinkedList();
        for(AllUserWrapper userWrapper : userArray){
            userList.add(userWrapper.getUser());
        }
        return userList;
    }
    
    public List<TeamWrapper> getAllTeam() {        
        AllTeamWrapper[] teamArray = new RestTemplate().getForObject("http://qualitybox/api/team?apikey=9e6babc5542e", AllTeamWrapper[].class);
        List<TeamWrapper> teamList = new LinkedList();
        for(AllTeamWrapper team : teamArray){
            teamList.add(team.getTeam());
        }
        return teamList;
    }
    
    public TeamInfoWrapper getIhniTeam(String id){
        TeamInfoWrapper team = new RestTemplate().getForObject("http://qualitybox/api/team/" + id + "?apikey=9e6babc5542e", TeamInfoWrapper.class);
        return team;
    }

    public IhniService() {

    }

}
