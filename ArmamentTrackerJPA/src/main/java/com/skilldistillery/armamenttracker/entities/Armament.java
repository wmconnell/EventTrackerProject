package com.skilldistillery.armamenttracker.entities;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Armament {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private String description;
	
	@Column(name = "weapon_type")
	private String weaponType;
	
	@Column(name = "damage_type")
	private String damageType;
	
	private String skill;
	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getWeaponType() {
		return weaponType;
	}

	public void setWeaponType(String weaponType) {
		this.weaponType = weaponType;
	}

	public String getDamageType() {
		return damageType;
	}

	public void setDamageType(String damageType) {
		this.damageType = damageType;
	}

	public String getSkill() {
		return skill;
	}

	public void setSkill(String skill) {
		this.skill = skill;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	private double weight;

	@Override
	public String toString() {
		return "Armament [id=" + id + ", name=" + name + ", description=" + description + ", weaponType=" + weaponType
				+ ", damageType=" + damageType + ", skill=" + skill + ", weight=" + weight + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Armament other = (Armament) obj;
		return id == other.id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Armament(int id, String name, String description, String weaponType, String damageType, String skill,
			double weight) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.weaponType = weaponType;
		this.damageType = damageType;
		this.skill = skill;
		this.weight = weight;
	}

	public Armament() {
		super();
	}
	
}
