import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Hero } from 'src/app/interfaces/hero';
import { HEROES } from 'src/app/mock-data/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;

  constructor() {}

  ngOnInit(): void {
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
