/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualitybox.kiback.service.wrapper;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 *
 * @author dmetthey
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class TeamRoleWrapper {
    private TeamWrapper equipe;
    private String role;

    public TeamRoleWrapper() {
    }

    public TeamWrapper getEquipe() {
        return equipe;
    }

    public void setEquipe(TeamWrapper equipe) {
        this.equipe = equipe;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
    
    
}
