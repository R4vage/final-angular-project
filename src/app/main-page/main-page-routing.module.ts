import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailResolver } from '../album-detail-page/resolvers/album-detail.resolver';
import { TrackDetailResolver } from '../track-detail-page/resolvers/track-detail.resolver';
import { LayoutComponent } from './components/layout/layout.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AlbumsResolver } from './resolvers/albums.resolver';
import { CategoriesResolver } from './resolvers/categories.resolver';
import { PlaylistsResolver } from './resolvers/playlists.resolver';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: MainPageComponent,
        resolve: {
          albums: AlbumsResolver,
          playlists: PlaylistsResolver,
          categories: CategoriesResolver,
        },
      },
      {
        path: 'track/:id',
        loadChildren: () => import('../track-detail-page/track-detail-page.module').then((m) => m.TrackDetailPageModule),
        resolve: {
          track: TrackDetailResolver,
        },
      },
      {
        path: 'album/:id',
        loadChildren: () => import('../album-detail-page/album-detail-page.module').then((m) => m.AlbumDetailPageModule),
        resolve: {
          album: AlbumDetailResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
