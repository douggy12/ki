/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualityboc.kiback.service;

import com.qualityboc.kiback.service.wrapper.AllUserWrapper;
import com.qualityboc.kiback.service.wrapper.UserJson;
import com.qualityboc.kiback.service.wrapper.UserWrapper;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
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
    @Autowired
    private RestTemplate restTemplate;
    
    public UserJson getIhniUser(Long id)
    {
        UserWrapper user = restTemplate.getForObject("http://qualitybox/api/user/"+id+"?apikey=9e6babc5542e", UserWrapper.class);
        
        return user.getUser();
    }
    public List<UserJson> getAllIhniUser()
    {
        AllUserWrapper[] userArray = restTemplate.getForObject("http://qualitybox/api/alluser", AllUserWrapper[].class);
        List<UserJson> userList = new LinkedList<>();
        for(AllUserWrapper user : userArray)
        {
            userList.add(user.getUser());
        }
        return userList;
        
    }
    
}
