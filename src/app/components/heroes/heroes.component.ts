import { Component, OnInit } from '@angular/core';

/*
* Servicios
*/
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  
  //Variables
  heroes:Heroe[] = [];
  
  //Constructor
  constructor( private _heroesService:HeroesService) { 
    
  }

  ngOnInit(): void {

    //Iniciar variable con data
    this.heroes = this._heroesService.getHeroes();
    console.log( this.heroes );

  }

}
