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
import java.util.Map;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.client.RestTemplate;

/**
 *
 * @author dmetthey
 */
@Service
public class IhniService {

    private String ihniApiKey;
    private String ihniUrl;

    public UserInfoWrapper getIhniUser(String id,String phpSESSID) {
        HttpHeaders requestHeaders = new HttpHeaders();
        requestHeaders.add("Cookie", phpSESSID);
        HttpEntity requestEntity = new HttpEntity(null, requestHeaders);
        ResponseEntity<UserInfoWrapper> response = new RestTemplate().exchange("http://localhost:8000/api/user/" + id,HttpMethod.GET, requestEntity, UserInfoWrapper.class);
        UserInfoWrapper user = response.getBody();
        return user;
    }

    public List<UserWrapper> getAllIhniUser(String phpSESSID) {
        HttpHeaders requestHeaders = new HttpHeaders();
        requestHeaders.add("Cookie", phpSESSID);
        HttpEntity requestEntity = new HttpEntity(null, requestHeaders);
        ResponseEntity<AllUserWrapper[]> response = new RestTemplate().exchange("http://localhost:8000/api/alluser",HttpMethod.GET, requestEntity, AllUserWrapper[].class);
        AllUserWrapper[] userArray = response.getBody();
        List<UserWrapper> userList = new LinkedList();
        for(AllUserWrapper userWrapper : userArray){
            userList.add(userWrapper.getUser());
        }
        return userList;
    }
    
    public List<TeamWrapper> getAllTeam(String phpSESSID) {
                
        HttpHeaders requestHeaders = new HttpHeaders();
        requestHeaders.add("Cookie", phpSESSID);
        HttpEntity requestEntity = new HttpEntity(null, requestHeaders);
        ResponseEntity<AllTeamWrapper[]> response =  new RestTemplate().exchange("http://localhost:8000/api/team", HttpMethod.GET, requestEntity, AllTeamWrapper[].class);
//        System.out.println(response.getBody());
        AllTeamWrapper[] teamArray = response.getBody();
        List<TeamWrapper> teamList = new LinkedList();
        for (AllTeamWrapper team : teamArray) {
            teamList.add(team.getTeam());
        }
        return teamList;
    }
    
    
    public TeamInfoWrapper getIhniTeam(String id,String phpSESSID){
        HttpHeaders requestHeaders = new HttpHeaders();
        requestHeaders.add("Cookie", phpSESSID);
        HttpEntity requestEntity = new HttpEntity(null, requestHeaders);
        ResponseEntity<TeamInfoWrapper> response = new RestTemplate().exchange("http://localhost:8000/api/team/" + id , HttpMethod.GET, requestEntity, TeamInfoWrapper.class);
        TeamInfoWrapper team = response.getBody();
        return team;
    }

    public IhniService() {

    }

}
