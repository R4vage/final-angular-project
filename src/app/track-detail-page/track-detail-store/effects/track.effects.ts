import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map } from 'rxjs';
import { TrackService } from '../../services/track.service';
import { addTrack, loadTrack } from '../actions/tracks.actions';

@Injectable()
export class TrackEffects {
  addTrack$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadTrack),
      concatMap((action) => {
        return this.trackService.getTrack(action.id);
      }),
      catchError((err) => {
        this.router.navigateByUrl('/home');
        throw err;
      }),
      map((track) => {
        return addTrack({ track });
      })
    );
  });

  constructor(private actions$: Actions, private trackService: TrackService, private router: Router) {}
}
