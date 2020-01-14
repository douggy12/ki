package com.qualitybox.kiback.service.wrapper;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@JsonSerialize(as = KiSearchWrapper.class)
public class KiSearchUserWrapper implements KiSearchWrapper{
	private UserWrapper userWrapper;
	private TeamWrapper teamWrapper;
	
	
	
	public KiSearchUserWrapper(UserWrapper userWrapper, TeamWrapper teamWrapper) {
		this.userWrapper = userWrapper;
		this.teamWrapper = teamWrapper;
	}

	@Override
	public String getLabel() {
		// TODO Auto-generated method stub
		return this.userWrapper.getPrenom()+" "+this.userWrapper.getNom();
	}

	@Override
	public String getSubLabel() {
		// TODO Auto-generated method stub
		return this.teamWrapper.getName();
	}

	@Override
	public Long getTeamId() {
		// TODO Auto-generated method stub
		return this.teamWrapper.getId();
	}

}
