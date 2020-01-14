package com.qualitybox.kiback.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qualitybox.kiback.domain.KiUser;
import com.qualitybox.kiback.repository.KiUserRepository;
import com.qualitybox.kiback.service.wrapper.UserInfoWrapper;
import com.qualitybox.kiback.service.wrapper.UserWrapper;


/**
 * Created by dmett on 02/01/2018.
 */
@Service
public class SearchService {
    @Autowired
    private KiUserRepository kiUserRepository;
    @Autowired
    private IhniService ihniService;
    private UserInfoWrapper ihniUser;
    private KiUser kiUser;

    public SearchService() {
    }

    
    public List<UserInfoWrapper> getIhniUserByName(String string, String phpSESSID){

    	List<UserWrapper> allUser = this.ihniService.getAllIhniUser(phpSESSID);
        List<UserInfoWrapper> rsltUser = new ArrayList<>();
        for (UserWrapper user : allUser){
            String searchArea = (user.getPrenom()+" "+user.getNom()).toLowerCase();
            if(searchArea.contains(string.toLowerCase())){
                rsltUser.add(this.ihniService.getIhniUser(user.getId().toString(), phpSESSID));
            }
        }
        
        return rsltUser;
    }
}
