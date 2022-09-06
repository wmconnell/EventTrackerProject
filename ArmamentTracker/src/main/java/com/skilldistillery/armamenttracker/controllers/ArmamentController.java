package com.skilldistillery.armamenttracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.armamenttracker.entities.Armament;
import com.skilldistillery.armamenttracker.services.ArmamentService;

@RestController
@RequestMapping("api")
public class ArmamentController {

	@Autowired
	private ArmamentService armServ;

	@GetMapping("armaments")
	public List<Armament> index() {
		return armServ.index();
	}

	@GetMapping("armaments/{id}")
	public Armament show(@PathVariable Integer id, HttpServletResponse res) {
		Armament arm = armServ.show(id);
		if (arm == null) {
			res.setStatus(404);
		}
		return arm;
	}

	@PostMapping("armaments")
	public Armament create(@RequestBody Armament armament, HttpServletResponse res, HttpServletRequest req) {
		armament = armServ.create(armament);
		if (armament == null) {
			res.setStatus(404);
		} else {
			res.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(armament.getId());
			res.setHeader("Location", url.toString());
		}

		return armament;
	}
	
	@PutMapping("armaments/{id}")
	public Armament update(@PathVariable Integer id, @RequestBody Armament armament, HttpServletResponse res) {
		Armament updated = null;
		updated = armServ.update(id, armament);
		
		try {
			if (updated == null) {
				res.setStatus(404);
				
			}
		} catch (Exception e) {
			res.setStatus(400);
			updated = null;
			e.printStackTrace();
		}
		return updated;
	}
	
	@DeleteMapping("armaments/{id}")
	public void delete(@PathVariable Integer id, HttpServletResponse res) {
		try {
			if (armServ.delete(id)) {
				res.setStatus(204);
			} else {
				res.setStatus(404);
			}
		} catch (Exception e) {
			res.setStatus(400);
			e.printStackTrace();
		}
		
	}

}
