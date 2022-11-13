import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AlbumItem, Albums, Artist } from '../core/models/album.models';
import { PlaylistItem } from '../core/models/playlist.models';
import { SearchResults } from '../core/models/rest.models';
import { Track } from '../core/models/track.models';
import { SearchState } from './search-store/search.reducer';
import { searchHasBeenDone, selectSearchByValue } from './search-store/search.selectors';
import { SearchRestService } from './services/search-rest.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchResults!:SearchResults;
  searchValue!:string;
  artists:Artist[] = [];
  tracks:Track[] = [];
  albums: AlbumItem[] = [];
  playlists: PlaylistItem[] = []
  constructor(private restService: SearchRestService, private route: ActivatedRoute, private store: Store<SearchState>) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: params => {this.searchValue = params['value']} 
    });
    this.store.select(selectSearchByValue(this.searchValue)).subscribe(results => {
      if(results) {
        this.artists = results.results.artists.items;
        this.albums = results.results.albums.items;
        this.tracks = results.results.tracks.items;
        this.playlists = results.results.playlists.items
      }
    });

    this.store.select(searchHasBeenDone(this.searchValue)).subscribe(boolean => console.log(boolean))
  }
}
