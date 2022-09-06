package com.skilldistillery.armamenttracker.services;

import java.util.List;

import com.skilldistillery.armamenttracker.entities.Armament;

public interface ArmamentService {

	List<Armament> index();
	
	Armament show(Integer id);
	Armament create(Armament armament);
	Armament update(Integer id, Armament armament);
	boolean delete(Integer id);
}
