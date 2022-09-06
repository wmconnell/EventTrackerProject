package com.skilldistillery.armamenttracker.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.armamenttracker.entities.Armament;
import com.skilldistillery.armamenttracker.repositories.ArmamentRepository;

@Service
public class ArmamentServiceImpl implements ArmamentService {

	@Autowired
	private ArmamentRepository armRepo;

	@Override
	public List<Armament> index() {

		return armRepo.findAll();
	}

	@Override
	public Armament show(Integer id) {
		Optional<Armament> armamentOp = armRepo.findById(id);
		if (armamentOp.isPresent()) {
			Armament arm = armamentOp.get();
			return arm;
		}
		return null;
	}

	@Override
	public Armament create(Armament armament) {
		armRepo.saveAndFlush(armament);

		return armament;
	}

	@Override
	public Armament update(Integer id, Armament armament) {
		Armament existing = show(id);
		if (existing == null) {
			return null;
		}
		
		if (armament.getName() != null) {
			existing.setName(armament.getName());
		}
		if (armament.getDescription() != null) {
			existing.setDescription(armament.getDescription());
		}
		if (armament.getWeaponType() != null) {
			existing.setWeaponType(armament.getWeaponType());
		}
		if (armament.getDamageType() != null) {
			existing.setDamageType(armament.getDamageType());
		}
		if (armament.getSkill() != null) {
			existing.setSkill(armament.getSkill());
		}
		if (armament.getWeight() != 0) {
			existing.setWeight(armament.getWeight());
		}
		
		
		return armRepo.saveAndFlush(existing);

	}

	@Override
	public boolean delete(Integer id) {
		armRepo.deleteById(id);
		
		return !armRepo.existsById(id);
		
	}
}