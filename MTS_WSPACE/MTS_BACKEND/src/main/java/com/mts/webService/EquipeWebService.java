package com.mts.webService;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.mts.service.IGlobalService;
import com.mts.web.dv.Equipe;
import com.mts.webService.ihni.RestWebService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@Scope("session")
public class EquipeWebService {

	@Autowired
	IGlobalService service;
	
//	@Autowired
//	private HttpServletRequest context;
	
	RestWebService restWs = new RestWebService();
	
	@RequestMapping("/getEquipe")
	@ResponseBody
	public Object getEquipe(@RequestParam(value="id", required=false) Integer id) {
		if (id != null){
			return service.getEquipeById(id);
		}else {
			return service.getAllEquipe();
		}
        
    }
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/getAllEquipe")
	@ResponseBody
	public List<Equipe> getAllEquipe(@RequestParam(value="id", required=false) Integer id, HttpSession session) {
		System.out.println(" list equipe demanded ....");
		//HttpSession session = request.getSession();
		session.setAttribute("myId", 1);
		Integer myId= (Integer) session.getAttribute("myId");
		System.out.println(" Test myId: "+ myId + " Id to change : "+ id);
		
		return  restWs.getAllEquipe();
        
    }
}
