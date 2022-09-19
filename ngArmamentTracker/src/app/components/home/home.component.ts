import { ArmamentService } from './../../services/armament.service';
import { Component, OnInit } from '@angular/core';
import { Armament } from 'src/app/models/armament/armament';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private armamentService: ArmamentService
  ) { }

  ngOnInit(): void {
    this.reload();
  }

  newArmament: Armament = new Armament();

selected: Armament|null = null;
editArmament: Armament|null = null;

armaments: Armament[] = [];

displayTable() {
  this.selected = null;
}

displayArmament(armament: Armament) {

}

reload() {
  this.armamentService.index().subscribe(
    {
    next: (data) => {
      this.armaments = data;
    },
    error: (err) => {
      console.error('HomeComponent.reload(): error loading armaments');
      console.error(err);
    }
  }
  )
 }

 addArmament() {
  this.armamentService.create(this.newArmament).subscribe({
    next: (result) => {
      this.newArmament = new Armament();
      this.reload();
    },
    error: (nojoy) => {
      console.error('HomeComponent.create(): error creating armament');
      console.error(nojoy);
    }
  });

}

setEditArmament() {
  this.editArmament = Object.assign({}, this.selected);
}

updateArmament(updatedArmament: Armament) {
  this.armamentService.update(updatedArmament).subscribe({
    next: (result) => {
      this.selected = result;
      this.editArmament = null;
      this.reload();
    },
    error: (nojoy) => {
      console.error('HomeComponent.update(): error updating armament');
      console.error(nojoy);
    }
  });
}

updateCompleted(updatedArmament: Armament) {
  this.armamentService.update(updatedArmament).subscribe({
    next: (result) => {
      this.reload();
    },
    error: (nojoy) => {
      console.error('HomeComponent.update(): error updating armament');
      console.error(nojoy);
    }
  });
}

deleteArmament(id: number) {
  this.armamentService.destroy(id).subscribe({
    next: () => {
      this.reload();
    },
    error: (nojoy) => {
      console.error('HomeComponent.delete(): error deleting armament');
      console.error(nojoy);
    }
  });

}

}
