package com.mts.webService.ihni;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import com.mts.web.dv.Equipe;
import com.mts.web.dv.Utilisateur;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

public class RestWebService {
	
	private final static String URL_FICHE_BY_EQUIPE = "http://localhost:3000/fiche?equipe=";
	private final static String URL_FICHE_BY_ID = "http://localhost:3000/fiche?userId=";
	private final static String URL_ALL_EQUIPE = "http://localhost:3000/equipes";
	
	ObjectMapper mapper = new ObjectMapper();
	  
	public List<Utilisateur> getFicheByEquipeId(int id){
		Client client = Client.create();
		WebResource webResource = client.resource(URL_FICHE_BY_EQUIPE+id);
		ClientResponse response = webResource.accept("application/json").get(ClientResponse.class);
		
		if (response.getStatus() != 200) {
		   throw new RuntimeException("Failed : HTTP error code : "
			+ response.getStatus());
		}
		
		
		try {
			//return mapper.readValue(response.getEntity(String.class), Fiche.class); 
			Utilisateur[] users = mapper.readValue(response.getEntity(String.class), Utilisateur[].class); 
			return new ArrayList<>(Arrays.asList(users));			
			
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	public Utilisateur getUserById(int id){
		Client client = Client.create();
		WebResource webResource = client.resource(URL_FICHE_BY_ID+id);
		ClientResponse response = webResource.accept("application/json").get(ClientResponse.class);
		
		if (response.getStatus() != 200) {
		   throw new RuntimeException("Failed : HTTP error code : "
			+ response.getStatus());
		}
		
		
		try {
			//return mapper.readValue(response.getEntity(String.class), Fiche.class); 
			Utilisateur[] users = mapper.readValue(response.getEntity(String.class), Utilisateur[].class); 
			return users.length>0?users[0]:null;
			
			
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	     
	     
	}
	
	
	public List<Equipe> getAllEquipe(){
		
		Client client = Client.create();
		WebResource webResource = client.resource(URL_ALL_EQUIPE);
		ClientResponse response = webResource.accept("application/json").get(ClientResponse.class);

		if (response.getStatus() != 200) {
		   throw new RuntimeException("Failed : HTTP error code : "
			+ response.getStatus());
		}
		
		
		try {
			Equipe[] equipes = mapper.readValue(response.getEntity(String.class), Equipe[].class); 
			return new ArrayList<>(Arrays.asList(equipes));
			
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
		
		}
}
