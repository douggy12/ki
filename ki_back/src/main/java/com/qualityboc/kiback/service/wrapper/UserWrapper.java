/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualityboc.kiback.service.wrapper;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

/**
 *
 * @author dmetthey
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserWrapper {
    private UserInfoWrapper info;
    private List<EquipeRoleWrapper> equipes_role;
    
    public UserWrapper(){}

    public UserInfoWrapper getInfo() {
        return info;
    }

    public void setInfo(UserInfoWrapper info) {
        this.info = info;
    }

    public List<EquipeRoleWrapper> getEquipes_role() {
        return equipes_role;
    }

    public void setEquipes_role(List<EquipeRoleWrapper> equipes_role) {
        this.equipes_role = equipes_role;
    }
    

    @Override
    public String toString() {
        return "JsonUser{" + "info=" + info + '}';
    }
    
    
}
