/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.qualitybox.kiback.service;

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
    
    
}
