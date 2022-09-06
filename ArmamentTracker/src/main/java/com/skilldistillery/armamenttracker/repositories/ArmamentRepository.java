package com.skilldistillery.armamenttracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.armamenttracker.entities.Armament;

public interface ArmamentRepository extends JpaRepository<Armament, Integer> {

}
