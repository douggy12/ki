package com.mts.webService;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.mts.jpa.data.entities.Fiche;
import com.mts.service.IGlobalService;
import com.mts.web.dv.DvFiche;
import com.mts.web.dv.Utilisateur;
import com.mts.webService.ihni.RestWebService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@Scope("session")
public class FicheWebService {

	@Autowired
	IGlobalService service;
	
//	@Autowired
//	private HttpServletRequest context;
	
	RestWebService restWs = new RestWebService();
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/getAllFiche")
	@ResponseBody
	public List<Fiche> getAllFiche() {
		
		return service.getAllFiche();
        
    }
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/getFiche")
	@ResponseBody
	public Object getFiche(@RequestParam(value="id", required=false) Integer id, HttpSession session) {
		
		//HttpSession session = request.getSession();
		Integer myId= (Integer) session.getAttribute("myId");
		System.out.println(" Get Fiche myId: "+ myId + " Id to change : "+ id);
		
		if (id != null){
			Fiche fiche = service.getFicheById(id);
			Utilisateur user = restWs.getUserById(id);
			
			System.out.println("fiche demanded : " + fiche.toString());
			return new DvFiche(user,fiche);
		}else {
			return "[]";
		}
        
    }
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/getFicheByEquipeId")
	@ResponseBody
	public Object getFicheByEquipeId(@RequestParam(value="id", required=false) Integer id, HttpSession session) {
		
		System.out.println(" fiche for equipe demanded: "+ id);
		//HttpSession session = request.getSession();
		Integer myId= (Integer) session.getAttribute("myId");
		System.out.println(" Get by Equipe myId: "+ myId + " Id to change : "+ id);
		
		if (id != null){
				List<Utilisateur> users = restWs.getFicheByEquipeId(id);
				
				List<DvFiche> fiches = new ArrayList<DvFiche>();
				for(Utilisateur user: users){
					fiches.add(new DvFiche(user, service.getFicheById(id)));
				}
				
				return fiches;
				
		}else {
			return null;
		}
        
    }
	
	@CrossOrigin(origins = "http://localhost:4200",methods ={RequestMethod.PUT,RequestMethod.GET})
	@PutMapping("/putFiche/{id}")
	@ResponseBody
	public ResponseEntity updateFiche(@PathVariable Long id, @RequestBody DvFiche fiche, HttpSession session) {
		//HttpSession session = request.getSession();
		Integer myId= (Integer) session.getAttribute("myId");
		
		System.out.println(" myId: "+ myId + " Id to change : "+ id);
//		if(!myId.equals(id)){
//			return new ResponseEntity("Vous n'aves pas le droit de modifier " + id, HttpStatus.NOT_FOUND);
//
//		}
		
		System.out.println(" ##### satrting PUT FICHE ");
		System.out.println(" @@@@@ UPDATION FICHE ......... "+ fiche.toString());
		Utilisateur user = new Utilisateur(fiche);
		Fiche boFiche = service.updateFiche(new Fiche(fiche));

		if (null == fiche) {
			return new ResponseEntity("No fiche found for ID " + id, HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity(new DvFiche(user,boFiche), HttpStatus.OK);
	}
}
