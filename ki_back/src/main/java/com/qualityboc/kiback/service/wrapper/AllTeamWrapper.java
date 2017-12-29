/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualityboc.kiback.service.wrapper;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 *
 * @author dmetthey
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class AllTeamWrapper {
    private EquipeWrapper team;

    public AllTeamWrapper() {
    }

    public EquipeWrapper getTeam() {
        return team;
    }

    public void setTeam(EquipeWrapper team) {
        this.team = team;
    }
    
    
}
