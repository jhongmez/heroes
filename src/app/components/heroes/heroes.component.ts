import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
  constructor( private _heroesService:HeroesService,
               private router:Router ) { 
    
  }

  ngOnInit(): void {

    //Iniciar variable con data
    this.heroes = this._heroesService.getHeroes();
    // console.log( this.heroes );

  }
  
  //Funcion que me lleva a una ruta de heroe
  verHeroe( idx:number ) {
    this.router.navigate( ['/heroe', idx] );
  }

}
