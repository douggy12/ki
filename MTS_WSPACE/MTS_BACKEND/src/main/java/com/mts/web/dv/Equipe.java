package com.mts.web.dv;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class Equipe {

	private int equipeId;
	private String equipeLbl;

	public int getEquipeId() {
		return equipeId;
	}

	public void setEquipeId(int equipeId) {
		this.equipeId = equipeId;
	}

	public String getEquipeLbl() {
		return equipeLbl;
	}

	public void setEquipeLbl(String equipeLbl) {
		this.equipeLbl = equipeLbl;
	}
	
	
	
}
