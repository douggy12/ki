/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualitybox.kiback.service.wrapper;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

/**
 *
 * @author dmetthey
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class TeamInfoWrapper {
    private TeamWrapper info;
    private List<AllUserWrapper> users;

    public TeamInfoWrapper() {
    }
    
    public TeamWrapper getInfo() {
        return info;
    }

    public void setInfo(TeamWrapper info) {
        this.info = info;
    }
  
    public List<AllUserWrapper> getUsers() {
        return users;
    }

    public void setUsers(List<AllUserWrapper> users) {
        this.users = users;
    }
    
    
}
