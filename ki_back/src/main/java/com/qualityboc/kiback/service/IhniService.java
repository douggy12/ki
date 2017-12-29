/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualityboc.kiback.service;

import com.qualityboc.kiback.service.wrapper.AllTeamWrapper;
import com.qualityboc.kiback.service.wrapper.AllUserWrapper;
import com.qualityboc.kiback.service.wrapper.EquipeWrapper;
import com.qualityboc.kiback.service.wrapper.UserInfoWrapper;
import com.qualityboc.kiback.service.wrapper.UserWrapper;
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

    public UserWrapper getIhniUser(String id) {

        UserWrapper user = new RestTemplate().getForObject("http://qualitybox/api/user/" + id + "?apikey=9e6babc5542e", UserWrapper.class);

        return user;
    }

    public List<UserInfoWrapper> getAllIhniUser() {

        AllUserWrapper[] userArray = new RestTemplate().getForObject("http://qualitybox/api/alluser?apikey=9e6babc5542e", AllUserWrapper[].class);

        List<UserInfoWrapper> userList = new LinkedList();
        for(AllUserWrapper userWrapper : userArray){
            userList.add(userWrapper.getUser());
        }
        

        return userList;

    }
    
    public List<AllTeamWrapper> getAllTeam() {
        
        List<AllTeamWrapper> teamList;
        teamList = new RestTemplate().getForObject("http://qualitybox/api/team?apikey=9e6babc5542e", List.class);
        
        return teamList;
    }
    
    public Object getObjUser(String id){
        Object ObjUser = new RestTemplate().getForObject("http://qualitybox/api/user/" + id + "?apikey=9e6babc5542e", Object.class);
        return ObjUser;
    }

    public IhniService() {

    }

}
