export class Armament {

  id: number;
  name: string;
  description: string;
  weaponType: string;
  damageType: string;
  skill: string;
  weight: number;

  constructor(
    id: number = 0,
    name: string = '',
    description: string = '',
    weaponType: string = '',
    damageType: string = '',
    skill: string = '',
    weight: number = 0
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.weaponType = weaponType;
    this.damageType = damageType;
    this.skill = skill;
    this.weight = weight;
  }

}
