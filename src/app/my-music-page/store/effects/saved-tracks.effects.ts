import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import * as savedTrackActions from '../actions/saved-tracks.actions';
import { MyMusicPageRestService } from '../../services/my-music-page-rest.service';
import { Track } from 'src/app/core/models/track.models';
import { SavedItem } from 'src/app/saved-store/saved-item.reducer';
import { Store } from '@ngrx/store';
import { upsertSavedItems } from 'src/app/saved-store/saved-item.actions';
import { selectTotalSavedTracksCount } from '../selectors/saved-tracks.selectors';

@Injectable()
export class SavedTracksEffects {
  loadTracks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(savedTrackActions.loadSavedTracks),
      concatMap(() => {
        return this.restService.getUsersSavedTracks().pipe(
          map((data) => {
            let trackArray: Track[] = [];
            let newSavedItems: SavedItem[] = [];
            data.items.map((item) => {
              trackArray.push(item.track);
              newSavedItems.push({
                id: item.track.id,
                kind: 'track',
                isSaved: true,
              });
            });
            this.savedStore.dispatch(
              upsertSavedItems({ savedItems: newSavedItems })
            );

            return savedTrackActions.loadSavedTracksSuccess({
              tracks: trackArray,
              totalItems: data.total,
            });
          }),
          catchError((error) =>
            of(
              savedTrackActions.loadSavedTracksFailure({ error: error.message })
            )
          )
        );
      })
    );
  });

  deleteTrack$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(savedTrackActions.deleteSavedTrack),
      concatMap(() => {
        return this.savedStore.select(selectTotalSavedTracksCount).pipe(
          filter((itemsCount) => {
            return itemsCount.totalItems > 9 && itemsCount.currentItems < 10;
          }),
          map(() => {
            return savedTrackActions.loadSavedTracks();
          }),
          catchError((error) =>
            of(
              savedTrackActions.loadSavedTracksFailure({ error: error.message })
            )
          )
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private restService: MyMusicPageRestService,
    private savedStore: Store
  ) {}
}
