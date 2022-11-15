import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as topAlbumsActions from '../actions/top-albums.actions';
import { UserProfileRestService } from '../../services/user-profile-rest.service';
import { AlbumItem } from 'src/app/core/models/album.models';
import { SavedItem } from 'src/app/saved-store/saved-item.reducer';
import { Store } from '@ngrx/store';
import { checkSavedItems } from 'src/app/saved-store/saved-item.actions';

@Injectable()
export class TopAlbumsEffects {
  loadAlbums$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(topAlbumsActions.loadTopUserAlbums),
      concatMap(() =>
        this.restService.getUsersTopAlbums().pipe(
            map((data) => {
              let albumArray:AlbumItem[] = [];
              let albumIds:string[] = [];
              data.items.map((item)=>{
                albumArray.push(item.album)
                albumIds.push(item.album.id)
              })
              this.savedStore.dispatch(checkSavedItems({ids:albumIds, kind:'album'}))
            return topAlbumsActions.loadTopUserAlbumsSuccess({ topUserAlbums: albumArray })}),
          catchError((error) => of(topAlbumsActions.loadTopUserAlbumsFailure({ error }))) 
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private restService: UserProfileRestService,
    private savedStore: Store<SavedItem>
  ) {}
}
