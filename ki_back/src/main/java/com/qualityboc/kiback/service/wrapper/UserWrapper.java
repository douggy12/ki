/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualityboc.kiback.service.wrapper;

import com.qualityboc.kiback.service.wrapper.UserJson;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 *
 * @author dmetthey
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserWrapper {
    private UserJson info;
    
    public UserWrapper(){}

    public UserJson getUser() {
        return info;
    }

    public void setUser(UserJson info) {
        this.info = info;
    }

    @Override
    public String toString() {
        return "JsonUser{" + "info=" + info + '}';
    }
    
    
}