import { Component, OnInit } from '@angular/core';
import { PokeApiService } from './../../service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public getAll: any;
  private setAll: any;

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {

    this.pokeApiService.apiListAll.subscribe(res => {
      this.setAll = res.results;
      this.getAll = this.setAll;
      console.log(this.getAll)
    });
  }

  public getEmitSearch(search: string): void {
    const filter = this.setAll.filter( (item: any) => {
      return item.name.indexOf(search.toLowerCase()) !== -1;
    });
    console.log('OKK: ', search);

    this.getAll = filter;
  }

}
