-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema armamenttrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `armamenttrackerdb` ;

-- -----------------------------------------------------
-- Schema armamenttrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `armamenttrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `armamenttrackerdb` ;

-- -----------------------------------------------------
-- Table `armament`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `armament` ;

CREATE TABLE IF NOT EXISTS `armament` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `description` TEXT NULL,
  `weapon_type` VARCHAR(45) NULL,
  `damage_type` VARCHAR(45) NULL,
  `skill` VARCHAR(200) NULL,
  `weight` DOUBLE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS armamentuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'armamentuser'@'localhost' IDENTIFIED BY 'armamentuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'armamentuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `armament`
-- -----------------------------------------------------
START TRANSACTION;
USE `armamenttrackerdb`;
INSERT INTO `armament` (`id`, `name`, `description`, `weapon_type`, `damage_type`, `skill`, `weight`) VALUES (1, 'Club', 'A thick, solid lump of wood.\nWielding this striking weapon requires no skill.\n\nA simple, primitive weapon that requires only brute strength and persistence to hammer your foe into the ground.', 'Hammer', 'Strike', 'Barbaric Roar', 3.5);
INSERT INTO `armament` (`id`, `name`, `description`, `weapon_type`, `damage_type`, `skill`, `weight`) VALUES (2, 'Curved Club', 'Hard, curved club, shaped like a crescent moon.\n\nWielded instead of a curved sword by Albinaurics lacking dexterity. The only point of similarity between the two is the shape.', 'Hammer', 'Strike', 'Barbaric Roar', 5.0);
INSERT INTO `armament` (`id`, `name`, `description`, `weapon_type`, `damage_type`, `skill`, `weight`) VALUES (3, 'Nox Flowing Hammer', 'Mace shaped like a suspended metal droplet wielded by monks of the Eternal City.\n\nForged from liquid metal from a Silver Tear, it is thoroughly tempered until hardened.', 'Hammer', 'Strike', 'Flowing Form', 6.5);
INSERT INTO `armament` (`id`, `name`, `description`, `weapon_type`, `damage_type`, `skill`, `weight`) VALUES (4, 'Dagger', 'A standard dagger with a straight blade.\n\nThough modest in reach and capacity for harm, this weapon is light enough to jab in rapid succession and delivers devastating critical hits. ', 'Dagger', 'Slash/Pierce', 'Quickstep', 1.5);
INSERT INTO `armament` (`id`, `name`, `description`, `weapon_type`, `damage_type`, `skill`, `weight`) VALUES (5, 'Scorpion\'s Stinger', 'Dagger fashioned from a great scorpion\'s tail, glistening with scarlet rot.\n\nA ceremonial tool used by heretics, crafted from the relic of a sealed outer god.', 'Dagger', 'Slash/Pierce', 'Repeating Thrust', 2.5);
INSERT INTO `armament` (`id`, `name`, `description`, `weapon_type`, `damage_type`, `skill`, `weight`) VALUES (6, 'Uchigatana', 'A katana with a long single-edged curved blade. \nA unique weapon wielded by the samurai from the Land of Reeds.\n\nThe blade, with its undulating design, boasts extraordinary sharpness, and ts slash attacks cause blood loss.', 'Katana', 'Slash/Pierce', 'Unsheathe', 5.5);
INSERT INTO `armament` (`id`, `name`, `description`, `weapon_type`, `damage_type`, `skill`, `weight`) VALUES (7, 'Moonveil', 'Katana forged of glintstone.\nMasterpiece of a Sellian swordsmith. \n\nLight enwreathes the blade when sheathed, explaining its Moonveil moniker.', 'Katana', 'Slash/Pierce', 'Transient Moonlight', 6.5);
INSERT INTO `armament` (`id`, `name`, `description`, `weapon_type`, `damage_type`, `skill`, `weight`) VALUES (8, 'Hand of Melania', 'Blade built into Malenia\'s prosthetic arm.\nThrough consecration it is resistant to rot.\n\nMalenia\'s war prosthesis symbolized her victories.\nSome claim to have seen wings when the weapon was raised aloft;\nwings of fierce determination that have never known defeat.', 'Katana', 'Slash/Pierce', 'Waterfowl Dance', 7.0);
INSERT INTO `armament` (`id`, `name`, `description`, `weapon_type`, `damage_type`, `skill`, `weight`) VALUES (9, 'Whip', 'A leather whip. Not originally used for combat, but as an instrument of pain. Though its supple attacks cannot be thwarted by parrying or even guarding, it is incapable of dealing critical hits.', 'Whip', 'Strike', 'Kick', 2.0);
INSERT INTO `armament` (`id`, `name`, `description`, `weapon_type`, `damage_type`, `skill`, `weight`) VALUES (10, 'Giant\'s Red Braid', 'Hefty whip woven from the flame-red hair of a Fire Giant.\n\nEvery giant is red of hair, and Radagon was said to have despised his own red locks. Perhaps that was a curse of their kind.', 'Whip', 'Strike', 'Flame Dance', 2.5);
INSERT INTO `armament` (`id`, `name`, `description`, `weapon_type`, `damage_type`, `skill`, `weight`) VALUES (11, 'Claymore', 'A large sword with a long, straight blade. This heavy sword is usually wielded with two hands, but for those with enough strength, one is sufficient.\n\nIn addition to the heavy sweeping attacks, it can also make a heavy piercing thrust making this a versatile weapon.', 'Greatsword', 'Standard/Pierce', 'Lion\'s Claw', 9.0);
INSERT INTO `armament` (`id`, `name`, `description`, `weapon_type`, `damage_type`, `skill`, `weight`) VALUES (12, 'Banished Knight\'s Greatsword', 'A finely-crafted greatsword intricately engraved with an ancient motif. Given to knights who, whether by misfortune or misdeed, were forced to abandon their homes. Most of these knights were sent to the fringes, where they were forced to start anew with only despair for company.', 'Greatsword', 'Standard/Pierce', 'Stamp (Upward Cut)', 10.0);
INSERT INTO `armament` (`id`, `name`, `description`, `weapon_type`, `damage_type`, `skill`, `weight`) VALUES (13, 'Marais Executioner\'s Sword', 'Storied sword of House Marais, the family of executioners who presided over the Shaded Castle. One of the legendary armaments.\nElemer of the Briar, the Bell Bearing Hunter, snatched the sword from the site of his looming execution, and furnished it with battle skills from his home of Eochaid..', 'Greatsword', 'Standard/Pierce', 'Eochaid\'s Dancing Blade', 11.5);
INSERT INTO `armament` (`id`, `name`, `description`, `weapon_type`, `damage_type`, `skill`, `weight`) VALUES (14, 'Dark Moon Greatsword', 'A Moon Greatsword, bestowed by a Carian queen upon her\nspouse to honor long-standing tradition.\nOne of the legendary armaments.\n\nRanni\'s sigil is a full moon, cold and leaden, and this sword is but a beam of its light.', 'Greatsword', 'Standard/Pierce', 'Moonlight Greatsword', 10.0);

COMMIT;

