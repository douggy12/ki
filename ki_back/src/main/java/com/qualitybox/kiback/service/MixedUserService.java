package com.qualitybox.kiback.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qualitybox.kiback.domain.KiUser;
import com.qualitybox.kiback.repository.KiUserRepository;
import com.qualitybox.kiback.service.wrapper.KiSearchWrapper;
import com.qualitybox.kiback.service.wrapper.KiSearchTeamWrapper;
import com.qualitybox.kiback.service.wrapper.KiSearchUserWrapper;
import com.qualitybox.kiback.service.wrapper.TeamRoleWrapper;
import com.qualitybox.kiback.service.wrapper.TeamWrapper;
import com.qualitybox.kiback.service.wrapper.UserInfoWrapper;
import com.qualitybox.kiback.service.wrapper.UserWrapper;


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

    public void setUser(String kiUserId, String phpSESSID) {
        this.ihniUser = ihniService.getIhniUser(kiUserId, phpSESSID);
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
    
    /**
     * Make a search from Ihni for the search field in the Ki front
     * @param term the term to search in the Ki search field. It could be a name, a lastname or team name
     * @param phpSESSID cookie
     * @return
     */
    public List<KiSearchWrapper> kiSeachByTerm(String term, String phpSESSID){

    	List<KiSearchWrapper> rsltKiSearch = new ArrayList<>();
    	
    	// Looking for the user matching the term
    	List<UserWrapper> allUser = this.ihniService.getAllIhniUser(phpSESSID);
        
        for (UserWrapper user : allUser){
        	String prenomNom = user.getPrenom()+" "+user.getNom();
            String searchArea = prenomNom.toLowerCase();
            if(searchArea.contains(term.toLowerCase())){
            	UserInfoWrapper userInfoWrapper = this.ihniService.getIhniUser(user.getId().toString(), phpSESSID);
            	for(TeamRoleWrapper teamRole : userInfoWrapper.getEquipes_role()) {
            		KiSearchUserWrapper userImp =  new KiSearchUserWrapper(user, teamRole.getEquipe());
            		
            		rsltKiSearch.add(userImp);
            	}
                
            }
        }
        
        // Looking for the teams matching the term
        List<TeamWrapper> allTeams = this.ihniService.getAllTeam(phpSESSID);
        
        for (TeamWrapper team : allTeams){
        	String teamName = team.getName();
        	String searchArea = teamName.toLowerCase();
        	if(searchArea.contains(term.toLowerCase())){
        		KiSearchTeamWrapper teamImpl = new KiSearchTeamWrapper(team);
        		rsltKiSearch.add(teamImpl);
        	}
        }
        
        return rsltKiSearch;
    }
    
}
