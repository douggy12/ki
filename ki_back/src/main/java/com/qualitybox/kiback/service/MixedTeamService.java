package com.qualitybox.kiback.service;

import com.qualitybox.kiback.domain.KiTeam;
import com.qualitybox.kiback.repository.KiTeamRepository;
import com.qualitybox.kiback.service.wrapper.TeamInfoWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
 * Created by dmett on 02/01/2018.
 */
@Service
public class MixedTeamService {
    @Autowired
    private KiTeamRepository kiTeamRepository;
    @Autowired
    private IhniService ihniService;
    
    private TeamInfoWrapper ihniTeam;
    private KiTeam kiTeam;

    public MixedTeamService() {
    }
    
    public MixedTeamService(TeamInfoWrapper ihniTeam) {
        this.ihniTeam = ihniTeam;
    }

    public void setTeam(String kiTeamId, String phpSESSID) {
        this.ihniTeam = ihniService.getIhniTeam(kiTeamId, phpSESSID);
        Long longId = Long.valueOf(kiTeamId);
        KiTeam kiTeam = kiTeamRepository.findByIhniId(longId);
        if(kiTeam != null) {
            this.kiTeam = kiTeam;
        }else{
            kiTeam = new KiTeam();
            kiTeam.setIhniId(longId);
            kiTeamRepository.save(kiTeam);
            this.kiTeam = kiTeam;
        }
    }

    public TeamInfoWrapper getIhniTeam() {
        return ihniTeam;
    }

    public KiTeam getKiTeam() {
        return kiTeam;
    }

}
