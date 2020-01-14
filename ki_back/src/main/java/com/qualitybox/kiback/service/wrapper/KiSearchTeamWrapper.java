package com.qualitybox.kiback.service.wrapper;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize(as = KiSearchWrapper.class)
public class KiSearchTeamWrapper implements KiSearchWrapper {
	TeamWrapper teamWrapper;
	
	
	public KiSearchTeamWrapper(TeamWrapper teamWrapper) {
		super();
		this.teamWrapper = teamWrapper;
	}

	@Override
	public String getLabel() {
		// TODO Auto-generated method stub
		return this.teamWrapper.getName();
	}

	@Override
	public String getSubLabel() {
		// TODO Auto-generated method stub
		return this.teamWrapper.getAgence().getNom();
	}


	@Override
	public Long getTeamId() {
		// TODO Auto-generated method stub
		return this.teamWrapper.getId();
	}

}
