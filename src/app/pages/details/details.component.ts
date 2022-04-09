import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private url: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemonDetail: any;
  public isLoading: boolean = false;
  public isError: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
    ) { }

  ngOnInit(): void {
    this.pokemon;
  }

  get pokemon(){
    const id = this.activeRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.url}/${id}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe( res => {
      this.pokemonDetail = res;
      this.isLoading = true;
      console.log(res, this.isLoading);

    }, error => {
      this.isError = true;
    });

  }

}
