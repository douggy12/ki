/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualitybox.kiback.service;

import com.qualitybox.kiback.service.wrapper.TeamInfoWrapper;
import com.qualitybox.kiback.service.wrapper.UserInfoWrapper;
import com.qualitybox.kiback.service.wrapper.UserWrapper;
import org.springframework.stereotype.Service;

/**
 *
 * @author dmetthey
 */
@Service
public class AuthService {
    public String getPHPSESSID(String cookieRaw){
        String[] cookieBag = cookieRaw.split(";");
        
        for (String cookieElem : cookieBag) {
            if (cookieElem.contains("PHPSESSID")) {
                return cookieElem;
            }
        }
        return "";
    }
    
    /**
     * Vérifie si l'id du user est bien pilote de l'équipe
     * @param user
     * @param team
     * @return 
     */
    public Boolean isPilote(UserWrapper user, TeamInfoWrapper team){
        return team.getInfo().getPilote().getId().equals(user.getId());
    }
    
}
