/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualityboc.kiback.service.wrapper;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;

/**
 *
 * @author dmetthey
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class AllUserWrapper implements Serializable{
    private UserInfoWrapper user;

    public AllUserWrapper() {
    }

    public UserInfoWrapper getUser() {
        return user;
    }

    public void setUser(UserInfoWrapper user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "AllUserWrapper{" + "user=" + user + '}';
    }
    
    
    
}
