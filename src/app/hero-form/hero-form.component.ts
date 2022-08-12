import { Component, OnInit } from '@angular/core';
import { HeroForm } from '../heroform';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent  { 

  powers = [ 'Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  model = new HeroForm(18, "DPR IAN", this.powers[0], "DPR GANGSTA");

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new HeroForm(42, '', '');
  }

}
