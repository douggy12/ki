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
public class UserInfoWrapper {
    private UserWrapper info;
    private List<TeamRoleWrapper> equipes_role;
    
    public UserInfoWrapper(){}

    public UserWrapper getInfo() {
        return info;
    }

    public void setInfo(UserWrapper info) {
        this.info = info;
    }

    public List<TeamRoleWrapper> getEquipes_role() {
        return equipes_role;
    }

    public void setEquipes_role(List<TeamRoleWrapper> equipes_role) {
        this.equipes_role = equipes_role;
    }
    

    @Override
    public String toString() {
        return "JsonUser{" + "info=" + info + '}';
    }
    
    
}
