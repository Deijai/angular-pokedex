import { Component, OnInit } from '@angular/core';
import { PokeApiService } from './../../service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public getAll: any;

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {

    this.pokeApiService.apiListAll.subscribe(res => {
      this.getAll = res.results;
      console.log(this.getAll)
    });
  }

}
