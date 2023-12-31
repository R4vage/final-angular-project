import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFlexComponent } from './card-flex.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TrackCardComponent } from './components/track-card/track-card.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { MatIconModule } from '@angular/material/icon';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { PlaylistCardComponent } from './components/playlist-card/playlist-card.component';
import { RouterModule } from '@angular/router';
import { TrackService } from 'src/app/track-detail-page/services/track.service';

@NgModule({
  declarations: [
    CardFlexComponent,
    TrackCardComponent,
    ArtistCardComponent,
    AlbumCardComponent,
    PlaylistCardComponent,
  ],
  imports: [
    CommonModule,

    RouterModule,
    MatCardModule,
    MatTooltipModule,
    MatIconModule,
  ],
  exports: [
    CardFlexComponent,
    TrackCardComponent,
    ArtistCardComponent,
    AlbumCardComponent,
    PlaylistCardComponent,
  ],
  providers: [TrackService],
})
export class CardFlexModule {}
