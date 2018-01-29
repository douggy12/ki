package com.qualityboc.kiback.service;

import com.qualityboc.kiback.domain.KiUser;
import com.qualityboc.kiback.repository.KiUserRepository;
import com.qualityboc.kiback.service.wrapper.UserInfoWrapper;
import com.qualityboc.kiback.service.wrapper.UserWrapper;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
 * Created by dmett on 02/01/2018.
 */
@Service
public class MixedUserService {
    @Autowired
    private KiUserRepository kiUserRepository;
    @Autowired
    private IhniService ihniService;
    private UserInfoWrapper ihniUser;
    private KiUser kiUser;

    public MixedUserService() {
    }

    public void setUser(String kiUserId) {
        this.ihniUser = ihniService.getIhniUser(kiUserId);
        Long longId = Long.valueOf(kiUserId);
        KiUser kiUser = kiUserRepository.findByIhniId(longId);
        if(kiUser != null) {
            this.kiUser = kiUser;
        }else{
            kiUser = new KiUser();
            kiUser.setIhniId(longId);
            kiUserRepository.save(kiUser);
            this.kiUser = kiUser;
        }
    }

    public UserInfoWrapper getIhniUser() {
        return ihniUser;
    }

    public KiUser getKiUser() {
        return kiUser;
    }
    
    public List<UserInfoWrapper> getIhniUserByName(String string){
        List<UserWrapper> allUser = this.ihniService.getAllIhniUser();
        List<UserInfoWrapper> rsltUser = new ArrayList<>();
        for (UserWrapper user : allUser){
            String searchArea = (user.getPrenom()+" "+user.getNom()).toLowerCase();
            if(searchArea.contains(string.toLowerCase())){
                rsltUser.add(this.ihniService.getIhniUser(user.getId().toString()));
            }
        }
        
        return rsltUser;
    }
}
