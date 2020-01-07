/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualitybox.kiback.service.wrapper;



import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;

/**
 *
 * @author dmetthey
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class AllUserWrapper implements Serializable{
    
    private UserWrapper user;
    private String role;

    public AllUserWrapper() {
    }
    
    public UserWrapper getUser() {
        return user;
    }

    public void setInfo(UserWrapper user) {
        this.user = user;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
    
    

    @Override
    public String toString() {
        return "AllUserWrapper{" + "user=" + user + '}';
    }
    
    
    
}
