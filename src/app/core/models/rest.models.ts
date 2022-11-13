import { AlbumItem, Albums, Artist } from './album.models';
import { MainPlaylistResponse, PlaylistItem } from './playlist.models';
import { Track } from './track.models';

export interface PaginatedResponse {
  limit: number;
  next: null | number;
  offset: number;
  previous: null | number;
  total: number;
}

export interface UserAlbumsResponse extends PaginatedResponse {
  href: string;
  items: UserTopAlbumResponseItem[];
}

export interface UserTopAlbumResponseItem {
  added_at:string;
  album: AlbumItem
}

export interface UserSavedTracksResponse extends PaginatedResponse {
  href: string;
  items: ResponseTracks[];
}

export interface UserTopTracksResponse extends PaginatedResponse {
    href: string;
    items: Track[];
  }

export interface ResponseTracks {
    track: Track
    added_at: string
}

export interface UserSavedArtistsResponse {
    artists:Artists
}

export interface UserTopArtistsResponse {
    href: string;
    items: Artist[];
}

interface Artists extends PaginatedResponse{
    href:string;
    items: Artist[]
}

export interface SearchResults extends PaginatedResponse {
  albums: Albums;
  artists: UserTopArtistsResponse;
  tracks: UserTopTracksResponse;
  playlists: MainPlaylistResponse;
}