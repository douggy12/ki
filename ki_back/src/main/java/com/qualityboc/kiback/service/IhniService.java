/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualityboc.kiback.service;


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

    public Object getIhniUser(String id) {

        Object user = new RestTemplate().getForObject("http://qualitybox/api/user/" + id + "?apikey=9e6babc5542e", Object.class);

        return user;
    }

    public List<Object> getAllIhniUser() {

        List<Object> userList = new RestTemplate().getForObject("http://qualitybox/api/alluser?apikey=9e6babc5542e", List.class);

        return userList;

    }
    
    public List<Object> getAllTeam() {
        
        List<Object> teamList = new RestTemplate().getForObject("http://qualitybox/api/team?apikey=9e6babc5542e", List.class);
        
        return teamList;
    }
    
    public IhniService() {

    }

}
