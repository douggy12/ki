/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualitybox.kiback.service;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.qualitybox.kiback.service.wrapper.AgenceWrapper;
import com.qualitybox.kiback.service.wrapper.AllTeamWrapper;
import com.qualitybox.kiback.service.wrapper.AllUserWrapper;
import com.qualitybox.kiback.service.wrapper.BuWrapper;
import com.qualitybox.kiback.service.wrapper.TeamInfoWrapper;
import com.qualitybox.kiback.service.wrapper.TeamWrapper;
import com.qualitybox.kiback.service.wrapper.UserAvatarWrapper;
import com.qualitybox.kiback.service.wrapper.UserInfoWrapper;
import com.qualitybox.kiback.service.wrapper.UserWrapper;

/**
 *
 * @author dmetthey
 */
@Service
public class IhniService {

    private String ihniApiKey;
    @Value("${ihni.url}")
    private String ihniUrl;

    public UserInfoWrapper getIhniUser(String id,String phpSESSID) {
        
        HttpHeaders requestHeaders = new HttpHeaders();
        requestHeaders.add("Cookie", phpSESSID);
        HttpEntity requestEntity = new HttpEntity(null, requestHeaders);
        ResponseEntity<UserInfoWrapper> response = new RestTemplate().exchange(this.ihniUrl + "/api/user/" + id,HttpMethod.GET, requestEntity, UserInfoWrapper.class);
        UserInfoWrapper user = response.getBody();
                
        return user;
    }
    
    public UserAvatarWrapper getUserAvatar(String id, String phpSESSID) {
        HttpHeaders requestHeaders = new HttpHeaders();
        requestHeaders.add("Cookie", phpSESSID);
        HttpEntity requestEntity = new HttpEntity(null, requestHeaders);
        ResponseEntity<UserAvatarWrapper> response = new RestTemplate().exchange(this.ihniUrl + "/api/user/" + id + "/photo",HttpMethod.GET, requestEntity, UserAvatarWrapper.class);
        UserAvatarWrapper avatar = response.getBody();
                
        return avatar;
    }

    public List<UserWrapper> getAllIhniUser(String phpSESSID) {
        HttpHeaders requestHeaders = new HttpHeaders();
        requestHeaders.add("Cookie", phpSESSID);
        HttpEntity requestEntity = new HttpEntity(null, requestHeaders);
        ResponseEntity<AllUserWrapper[]> response = new RestTemplate().exchange(this.ihniUrl + "/api/alluser",HttpMethod.GET, requestEntity, AllUserWrapper[].class);
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
        ResponseEntity<AllTeamWrapper[]> response =  new RestTemplate().exchange(this.ihniUrl + "/api/team", HttpMethod.GET, requestEntity, AllTeamWrapper[].class);
        AllTeamWrapper[] teamArray = response.getBody();
        List<TeamWrapper> teamList = new LinkedList();
        for (AllTeamWrapper team : teamArray) {
            teamList.add(team.getTeam());
        }
        return teamList;
    }
    
    public List<BuWrapper> getAllBU(String phpSESSID) {
        
        HttpHeaders requestHeaders = new HttpHeaders();
        requestHeaders.add("Cookie", phpSESSID);
        HttpEntity requestEntity = new HttpEntity(null, requestHeaders);
        ResponseEntity<BuWrapper[]> response =  new RestTemplate().exchange(this.ihniUrl + "/api/bu", HttpMethod.GET, requestEntity, BuWrapper[].class);
        BuWrapper[] teamArray = response.getBody();
        List<BuWrapper> teamList = new LinkedList();
        return teamList;
    }
    
    
    public TeamInfoWrapper getIhniTeam(String id,String phpSESSID){
        HttpHeaders requestHeaders = new HttpHeaders();
        requestHeaders.add("Cookie", phpSESSID);
        HttpEntity requestEntity = new HttpEntity(null, requestHeaders);
        ResponseEntity<TeamInfoWrapper> response = new RestTemplate().exchange(this.ihniUrl + "/api/team/" + id , HttpMethod.GET, requestEntity, TeamInfoWrapper.class);
        
        return response.getBody();
//        return team;
    }

    public UserWrapper getSessionUser(String phpSESSID) {
        HttpHeaders requestHeaders = new HttpHeaders();
        requestHeaders.add("Cookie", phpSESSID);
        HttpEntity requestEntity = new HttpEntity(null, requestHeaders);
        ResponseEntity<UserWrapper> response = new RestTemplate().exchange(this.ihniUrl + "/api/authme", HttpMethod.GET, requestEntity, UserWrapper.class);
        return response.getBody();
    }
    
    public AgenceWrapper getIhniAgence(String id,String phpSESSID){
        HttpHeaders requestHeaders = new HttpHeaders();
        requestHeaders.add("Cookie", phpSESSID);
        HttpEntity requestEntity = new HttpEntity(null, requestHeaders);
        ResponseEntity<AgenceWrapper> response = new RestTemplate().exchange(this.ihniUrl + "/api/agence/" + id , HttpMethod.GET, requestEntity, AgenceWrapper.class);
        
        return response.getBody();
        //        return team;
    }
}
