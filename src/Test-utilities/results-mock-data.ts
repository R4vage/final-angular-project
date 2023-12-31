import { Dictionary } from '@ngrx/entity';
import { MockSelector } from '@ngrx/store/testing';
import { SearchResults } from 'src/app/core/models/rest.models';
import {
  Search,
  SearchState,
} from 'src/app/search-page/search-store/search.reducer';

export const resultsMockData: SearchResults = {
  albums: {
    href: 'https://api.spotify.com/v1/search?query=searchValue&type=album&locale=en-US%2Cen%3Bq%3D0.9%2Ces-AR%3Bq%3D0.8%2Ces%3Bq%3D0.7&offset=0&limit=10',
    items: [
      {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4bZhOMj03xDyi86bcNCEpf',
            },
            href: 'https://api.spotify.com/v1/artists/4bZhOMj03xDyi86bcNCEpf',
            id: '4bZhOMj03xDyi86bcNCEpf',
            name: 'Value Select',
            type: 'artist',
            uri: 'spotify:artist:4bZhOMj03xDyi86bcNCEpf',
          },
        ],
        available_markets: [],
        external_urls: {
          spotify: 'https://open.spotify.com/album/5MaF8kh5dByHzPz7b2Gc32',
        },
        href: 'https://api.spotify.com/v1/albums/5MaF8kh5dByHzPz7b2Gc32',
        id: '5MaF8kh5dByHzPz7b2Gc32',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b27368a68680242b15d2d69ecbfd',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e0268a68680242b15d2d69ecbfd',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d0000485168a68680242b15d2d69ecbfd',
            width: 64,
          },
        ],
        name: 'Value Select',
        release_date: '2020-12-21',
        release_date_precision: 'day',
        total_tracks: 12,
        type: 'album',
        uri: 'spotify:album:5MaF8kh5dByHzPz7b2Gc32',
      },
      {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4bZhOMj03xDyi86bcNCEpf',
            },
            href: 'https://api.spotify.com/v1/artists/4bZhOMj03xDyi86bcNCEpf',
            id: '4bZhOMj03xDyi86bcNCEpf',
            name: 'Value Select',
            type: 'artist',
            uri: 'spotify:artist:4bZhOMj03xDyi86bcNCEpf',
          },
        ],
        available_markets: [],
        external_urls: {
          spotify: 'https://open.spotify.com/album/10g8ICSNshBKD7dy5anWua',
        },
        href: 'https://api.spotify.com/v1/albums/10g8ICSNshBKD7dy5anWua',
        id: '10g8ICSNshBKD7dy5anWua',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2733dba7cf1192fd9d0a10715f8',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e023dba7cf1192fd9d0a10715f8',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048513dba7cf1192fd9d0a10715f8',
            width: 64,
          },
        ],
        name: 'Perfect',
        release_date: '2022-11-01',
        release_date_precision: 'day',
        total_tracks: 9,
        type: 'album',
        uri: 'spotify:album:10g8ICSNshBKD7dy5anWua',
      },
      {
        album_type: 'single',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/67TuhPBjgVdyXrQO7y2OZ6',
            },
            href: 'https://api.spotify.com/v1/artists/67TuhPBjgVdyXrQO7y2OZ6',
            id: '67TuhPBjgVdyXrQO7y2OZ6',
            name: 'Sxul',
            type: 'artist',
            uri: 'spotify:artist:67TuhPBjgVdyXrQO7y2OZ6',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0QuTX3mzksvtwoQru6tiF8',
            },
            href: 'https://api.spotify.com/v1/artists/0QuTX3mzksvtwoQru6tiF8',
            id: '0QuTX3mzksvtwoQru6tiF8',
            name: 'soave lofi',
            type: 'artist',
            uri: 'spotify:artist:0QuTX3mzksvtwoQru6tiF8',
          },
        ],
        available_markets: [],
        external_urls: {
          spotify: 'https://open.spotify.com/album/5DeDx2RiKOrQzV4RNUGJaM',
        },
        href: 'https://api.spotify.com/v1/albums/5DeDx2RiKOrQzV4RNUGJaM',
        id: '5DeDx2RiKOrQzV4RNUGJaM',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b27399efafd020da9f96c9ff6731',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e0299efafd020da9f96c9ff6731',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d0000485199efafd020da9f96c9ff6731',
            width: 64,
          },
        ],
        name: 'Search For It',
        release_date: '2022-03-24',
        release_date_precision: 'day',
        total_tracks: 1,
        type: 'album',
        uri: 'spotify:album:5DeDx2RiKOrQzV4RNUGJaM',
      },
      {
        album_type: 'single',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4BBN286rBKyCWsSPq2cxYO',
            },
            href: 'https://api.spotify.com/v1/artists/4BBN286rBKyCWsSPq2cxYO',
            id: '4BBN286rBKyCWsSPq2cxYO',
            name: 'Sam Kim',
            type: 'artist',
            uri: 'spotify:artist:4BBN286rBKyCWsSPq2cxYO',
          },
        ],
        available_markets: [],
        external_urls: {
          spotify: 'https://open.spotify.com/album/6YrDG16bMhL1SwLDhHR5Jq',
        },
        href: 'https://api.spotify.com/v1/albums/6YrDG16bMhL1SwLDhHR5Jq',
        id: '6YrDG16bMhL1SwLDhHR5Jq',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b27391e6808e21805819dbfecb24',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e0291e6808e21805819dbfecb24',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d0000485191e6808e21805819dbfecb24',
            width: 64,
          },
        ],
        name: 'Search: WWW (Original Television Soundtrack), Pt. 4',
        release_date: '2019-06-28',
        release_date_precision: 'day',
        total_tracks: 2,
        type: 'album',
        uri: 'spotify:album:6YrDG16bMhL1SwLDhHR5Jq',
      },
      {
        album_type: 'single',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0XATRDCYuuGhk0oE7C0o5G',
            },
            href: 'https://api.spotify.com/v1/artists/0XATRDCYuuGhk0oE7C0o5G',
            id: '0XATRDCYuuGhk0oE7C0o5G',
            name: 'MAMAMOO',
            type: 'artist',
            uri: 'spotify:artist:0XATRDCYuuGhk0oE7C0o5G',
          },
        ],
        available_markets: [],
        external_urls: {
          spotify: 'https://open.spotify.com/album/2sEo75DfNQpTHUDc7Sym7A',
        },
        href: 'https://api.spotify.com/v1/albums/2sEo75DfNQpTHUDc7Sym7A',
        id: '2sEo75DfNQpTHUDc7Sym7A',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b27333ca33e36b98f02fa6be8419',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e0233ca33e36b98f02fa6be8419',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d0000485133ca33e36b98f02fa6be8419',
            width: 64,
          },
        ],
        name: 'Search: WWW (Original Television Soundtrack), Pt. 5',
        release_date: '2019-07-04',
        release_date_precision: 'day',
        total_tracks: 2,
        type: 'album',
        uri: 'spotify:album:2sEo75DfNQpTHUDc7Sym7A',
      },
      {
        album_type: 'single',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/28WCFFMetDFIT9o2Xluc31',
            },
            href: 'https://api.spotify.com/v1/artists/28WCFFMetDFIT9o2Xluc31',
            id: '28WCFFMetDFIT9o2Xluc31',
            name: 'Willow Valley',
            type: 'artist',
            uri: 'spotify:artist:28WCFFMetDFIT9o2Xluc31',
          },
        ],
        available_markets: [],
        external_urls: {
          spotify: 'https://open.spotify.com/album/11Mw9cq0JNPJ127ZmvqWKu',
        },
        href: 'https://api.spotify.com/v1/albums/11Mw9cq0JNPJ127ZmvqWKu',
        id: '11Mw9cq0JNPJ127ZmvqWKu',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273053e801af76cb6294384acb7',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02053e801af76cb6294384acb7',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851053e801af76cb6294384acb7',
            width: 64,
          },
        ],
        name: 'Search',
        release_date: '2021-06-23',
        release_date_precision: 'day',
        total_tracks: 1,
        type: 'album',
        uri: 'spotify:album:11Mw9cq0JNPJ127ZmvqWKu',
      },
      {
        album_type: 'single',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/7jWdMH4K9omZ4z2UkGkz6N',
            },
            href: 'https://api.spotify.com/v1/artists/7jWdMH4K9omZ4z2UkGkz6N',
            id: '7jWdMH4K9omZ4z2UkGkz6N',
            name: 'Scarlet House',
            type: 'artist',
            uri: 'spotify:artist:7jWdMH4K9omZ4z2UkGkz6N',
          },
        ],
        available_markets: [],
        external_urls: {
          spotify: 'https://open.spotify.com/album/5CcPAcH59wAAqrBrAtWroK',
        },
        href: 'https://api.spotify.com/v1/albums/5CcPAcH59wAAqrBrAtWroK',
        id: '5CcPAcH59wAAqrBrAtWroK',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2739e032dcf55603af45531426d',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e029e032dcf55603af45531426d',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048519e032dcf55603af45531426d',
            width: 64,
          },
        ],
        name: 'Search',
        release_date: '2022-10-21',
        release_date_precision: 'day',
        total_tracks: 1,
        type: 'album',
        uri: 'spotify:album:5CcPAcH59wAAqrBrAtWroK',
      },
      {
        album_type: 'single',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3X70idr41mOV4DTE1PM0wA',
            },
            href: 'https://api.spotify.com/v1/artists/3X70idr41mOV4DTE1PM0wA',
            id: '3X70idr41mOV4DTE1PM0wA',
            name: 'Josh Caballes',
            type: 'artist',
            uri: 'spotify:artist:3X70idr41mOV4DTE1PM0wA',
          },
        ],
        available_markets: [],
        external_urls: {
          spotify: 'https://open.spotify.com/album/64J9srVXjjXw4WajzTmzjw',
        },
        href: 'https://api.spotify.com/v1/albums/64J9srVXjjXw4WajzTmzjw',
        id: '64J9srVXjjXw4WajzTmzjw',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273698c1cb924c1bfc93ac7579f',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02698c1cb924c1bfc93ac7579f',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851698c1cb924c1bfc93ac7579f',
            width: 64,
          },
        ],
        name: 'SEARCHLIGHT (In Too Deep)',
        release_date: '2022-09-07',
        release_date_precision: 'day',
        total_tracks: 2,
        type: 'album',
        uri: 'spotify:album:64J9srVXjjXw4WajzTmzjw',
      },
      {
        album_type: 'single',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/7tt6GeP5d8BSWJw08KbJV8',
            },
            href: 'https://api.spotify.com/v1/artists/7tt6GeP5d8BSWJw08KbJV8',
            id: '7tt6GeP5d8BSWJw08KbJV8',
            name: 'Mercenary Of Death',
            type: 'artist',
            uri: 'spotify:artist:7tt6GeP5d8BSWJw08KbJV8',
          },
        ],
        available_markets: [],
        external_urls: {
          spotify: 'https://open.spotify.com/album/1gbh00JezJgq9v7ho4Waee',
        },
        href: 'https://api.spotify.com/v1/albums/1gbh00JezJgq9v7ho4Waee',
        id: '1gbh00JezJgq9v7ho4Waee',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b27381f0b0fb2c1f2b682c9395b3',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e0281f0b0fb2c1f2b682c9395b3',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d0000485181f0b0fb2c1f2b682c9395b3',
            width: 64,
          },
        ],
        name: 'Search For My Tomorrow',
        release_date: '2022-02-21',
        release_date_precision: 'day',
        total_tracks: 1,
        type: 'album',
        uri: 'spotify:album:1gbh00JezJgq9v7ho4Waee',
      },
      {
        album_type: 'album',
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0jl1GB62whNLQlOh2cZjL7',
            },
            href: 'https://api.spotify.com/v1/artists/0jl1GB62whNLQlOh2cZjL7',
            id: '0jl1GB62whNLQlOh2cZjL7',
            name: 'Search Yiu',
            type: 'artist',
            uri: 'spotify:artist:0jl1GB62whNLQlOh2cZjL7',
          },
        ],
        available_markets: [],
        external_urls: {
          spotify: 'https://open.spotify.com/album/1DkSGqBv0sFxyQ0i5ExA96',
        },
        href: 'https://api.spotify.com/v1/albums/1DkSGqBv0sFxyQ0i5ExA96',
        id: '1DkSGqBv0sFxyQ0i5ExA96',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b27300a5fecbe893c559afa1542e',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e0200a5fecbe893c559afa1542e',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d0000485100a5fecbe893c559afa1542e',
            width: 64,
          },
        ],
        name: 'Alles was ich habe',
        release_date: '2019-07-26',
        release_date_precision: 'day',
        total_tracks: 10,
        type: 'album',
        uri: 'spotify:album:1DkSGqBv0sFxyQ0i5ExA96',
      },
    ],
    limit: 10,
    next: 'https://api.spotify.com/v1/search?query=searchValue&type=album&locale=en-US%2Cen%3Bq%3D0.9%2Ces-AR%3Bq%3D0.8%2Ces%3Bq%3D0.7&offset=10&limit=10',
    offset: 0,
    previous: null,
    total: 130,
  },
  artists: {
    href: 'https://api.spotify.com/v1/search?query=searchValue&type=artist&locale=en-US%2Cen%3Bq%3D0.9%2Ces-AR%3Bq%3D0.8%2Ces%3Bq%3D0.7&offset=0&limit=10',
    items: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/4bZhOMj03xDyi86bcNCEpf',
        },
        followers: {
          href: null,
          total: 10165,
        },
        genres: [],
        href: 'https://api.spotify.com/v1/artists/4bZhOMj03xDyi86bcNCEpf',
        id: '4bZhOMj03xDyi86bcNCEpf',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab6761610000e5ebb57f7b8ffebf2137a5992515',
            width: 640,
          },
          {
            height: 320,
            url: 'https://i.scdn.co/image/ab67616100005174b57f7b8ffebf2137a5992515',
            width: 320,
          },
          {
            height: 160,
            url: 'https://i.scdn.co/image/ab6761610000f178b57f7b8ffebf2137a5992515',
            width: 160,
          },
        ],
        name: 'Value Select',
        popularity: 29,
        type: 'artist',
        uri: 'spotify:artist:4bZhOMj03xDyi86bcNCEpf',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/2eEShlidjgx1dZkg4vhZwo',
        },
        followers: {
          href: null,
          total: 26,
        },
        genres: [],
        href: 'https://api.spotify.com/v1/artists/2eEShlidjgx1dZkg4vhZwo',
        id: '2eEShlidjgx1dZkg4vhZwo',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab6761610000e5eb6cfb9be144893cf57c562112',
            width: 640,
          },
          {
            height: 320,
            url: 'https://i.scdn.co/image/ab676161000051746cfb9be144893cf57c562112',
            width: 320,
          },
          {
            height: 160,
            url: 'https://i.scdn.co/image/ab6761610000f1786cfb9be144893cf57c562112',
            width: 160,
          },
        ],
        name: 'Revalue',
        popularity: 1,
        type: 'artist',
        uri: 'spotify:artist:2eEShlidjgx1dZkg4vhZwo',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/2PtVBm9g3He9o6aUiwLvTS',
        },
        followers: {
          href: null,
          total: 192,
        },
        genres: [],
        href: 'https://api.spotify.com/v1/artists/2PtVBm9g3He9o6aUiwLvTS',
        id: '2PtVBm9g3He9o6aUiwLvTS',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab6761610000e5ebc491f8fdb3fa507fa7556304',
            width: 640,
          },
          {
            height: 320,
            url: 'https://i.scdn.co/image/ab67616100005174c491f8fdb3fa507fa7556304',
            width: 320,
          },
          {
            height: 160,
            url: 'https://i.scdn.co/image/ab6761610000f178c491f8fdb3fa507fa7556304',
            width: 160,
          },
        ],
        name: 'Value',
        popularity: 4,
        type: 'artist',
        uri: 'spotify:artist:2PtVBm9g3He9o6aUiwLvTS',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/1LYtmR38190qpMGlnBUjZf',
        },
        followers: {
          href: null,
          total: 25,
        },
        genres: [],
        href: 'https://api.spotify.com/v1/artists/1LYtmR38190qpMGlnBUjZf',
        id: '1LYtmR38190qpMGlnBUjZf',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab6761610000e5eb713b70c2ddc564957907c355',
            width: 640,
          },
          {
            height: 320,
            url: 'https://i.scdn.co/image/ab67616100005174713b70c2ddc564957907c355',
            width: 320,
          },
          {
            height: 160,
            url: 'https://i.scdn.co/image/ab6761610000f178713b70c2ddc564957907c355',
            width: 160,
          },
        ],
        name: 'FaceValue',
        popularity: 2,
        type: 'artist',
        uri: 'spotify:artist:1LYtmR38190qpMGlnBUjZf',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/6wil2xok5SoD4AJXz8vxaa',
        },
        followers: {
          href: null,
          total: 66,
        },
        genres: [],
        href: 'https://api.spotify.com/v1/artists/6wil2xok5SoD4AJXz8vxaa',
        id: '6wil2xok5SoD4AJXz8vxaa',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab6761610000e5eb16f7884131081487a5700ed2',
            width: 640,
          },
          {
            height: 320,
            url: 'https://i.scdn.co/image/ab6761610000517416f7884131081487a5700ed2',
            width: 320,
          },
          {
            height: 160,
            url: 'https://i.scdn.co/image/ab6761610000f17816f7884131081487a5700ed2',
            width: 160,
          },
        ],
        name: 'Market Value',
        popularity: 19,
        type: 'artist',
        uri: 'spotify:artist:6wil2xok5SoD4AJXz8vxaa',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/69QExauEZ1A6SpIQS0J1qa',
        },
        followers: {
          href: null,
          total: 69,
        },
        genres: [],
        href: 'https://api.spotify.com/v1/artists/69QExauEZ1A6SpIQS0J1qa',
        id: '69QExauEZ1A6SpIQS0J1qa',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273b80540fa2542e994688c8d03',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02b80540fa2542e994688c8d03',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851b80540fa2542e994688c8d03',
            width: 64,
          },
        ],
        name: 'valu',
        popularity: 1,
        type: 'artist',
        uri: 'spotify:artist:69QExauEZ1A6SpIQS0J1qa',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/1ZqIcDh9udUjTwpKfaMu2K',
        },
        followers: {
          href: null,
          total: 717,
        },
        genres: [],
        href: 'https://api.spotify.com/v1/artists/1ZqIcDh9udUjTwpKfaMu2K',
        id: '1ZqIcDh9udUjTwpKfaMu2K',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b2739d46d2e661a81555b6377de3',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e029d46d2e661a81555b6377de3',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d000048519d46d2e661a81555b6377de3',
            width: 64,
          },
        ],
        name: 'Values',
        popularity: 1,
        type: 'artist',
        uri: 'spotify:artist:1ZqIcDh9udUjTwpKfaMu2K',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/1sOg1325HMIW9Vt4uFW4Kk',
        },
        followers: {
          href: null,
          total: 515,
        },
        genres: [],
        href: 'https://api.spotify.com/v1/artists/1sOg1325HMIW9Vt4uFW4Kk',
        id: '1sOg1325HMIW9Vt4uFW4Kk',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273acc1ddfa5389150f496d805b',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02acc1ddfa5389150f496d805b',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851acc1ddfa5389150f496d805b',
            width: 64,
          },
        ],
        name: 'Evaluate Your Socialize',
        popularity: 3,
        type: 'artist',
        uri: 'spotify:artist:1sOg1325HMIW9Vt4uFW4Kk',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/36qlL2Ac90P1CNh2BbZ1n2',
        },
        followers: {
          href: null,
          total: 57,
        },
        genres: [],
        href: 'https://api.spotify.com/v1/artists/36qlL2Ac90P1CNh2BbZ1n2',
        id: '36qlL2Ac90P1CNh2BbZ1n2',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab6761610000e5eb738800b27ac3fa8f90921e29',
            width: 640,
          },
          {
            height: 320,
            url: 'https://i.scdn.co/image/ab67616100005174738800b27ac3fa8f90921e29',
            width: 320,
          },
          {
            height: 160,
            url: 'https://i.scdn.co/image/ab6761610000f178738800b27ac3fa8f90921e29',
            width: 160,
          },
        ],
        name: 'Valuence INFINITIES',
        popularity: 5,
        type: 'artist',
        uri: 'spotify:artist:36qlL2Ac90P1CNh2BbZ1n2',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/5C3XE2wcU82jmJW7RUQUG7',
        },
        followers: {
          href: null,
          total: 2,
        },
        genres: [],
        href: 'https://api.spotify.com/v1/artists/5C3XE2wcU82jmJW7RUQUG7',
        id: '5C3XE2wcU82jmJW7RUQUG7',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab67616d0000b273e985a6bd4378267b13ad0743',
            width: 640,
          },
          {
            height: 300,
            url: 'https://i.scdn.co/image/ab67616d00001e02e985a6bd4378267b13ad0743',
            width: 300,
          },
          {
            height: 64,
            url: 'https://i.scdn.co/image/ab67616d00004851e985a6bd4378267b13ad0743',
            width: 64,
          },
        ],
        name: 'Valued.',
        popularity: 1,
        type: 'artist',
        uri: 'spotify:artist:5C3XE2wcU82jmJW7RUQUG7',
      },
    ],
    limit: 10,
    next: 'https://api.spotify.com/v1/search?query=searchValue&type=artist&locale=en-US%2Cen%3Bq%3D0.9%2Ces-AR%3Bq%3D0.8%2Ces%3Bq%3D0.7&offset=10&limit=10',
    offset: 0,
    previous: null,
    total: 14,
  },
  tracks: {
    href: 'https://api.spotify.com/v1/search?query=searchValue&type=track&locale=en-US%2Cen%3Bq%3D0.9%2Ces-AR%3Bq%3D0.8%2Ces%3Bq%3D0.7&offset=0&limit=10',
    items: [
      {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/7o30ZHbzQe9mDG8LbmmSel',
              },
              href: 'https://api.spotify.com/v1/artists/7o30ZHbzQe9mDG8LbmmSel',
              id: '7o30ZHbzQe9mDG8LbmmSel',
              name: 'Elaine',
              type: 'artist',
              uri: 'spotify:artist:7o30ZHbzQe9mDG8LbmmSel',
            },
          ],
          available_markets: [],
          external_urls: {
            spotify: 'https://open.spotify.com/album/66TIYAieKO8twIekWrGUNd',
          },
          href: 'https://api.spotify.com/v1/albums/66TIYAieKO8twIekWrGUNd',
          id: '66TIYAieKO8twIekWrGUNd',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b2735a6a5368c4e61e5ab4b69a02',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e025a6a5368c4e61e5ab4b69a02',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d000048515a6a5368c4e61e5ab4b69a02',
              width: 64,
            },
          ],
          name: 'Search: WWW (Original Television Soundtrack), Pt. 2',
          release_date: '2019-06-13',
          release_date_precision: 'day',
          total_tracks: 2,
          type: 'album',
          uri: 'spotify:album:66TIYAieKO8twIekWrGUNd',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/7o30ZHbzQe9mDG8LbmmSel',
            },
            href: 'https://api.spotify.com/v1/artists/7o30ZHbzQe9mDG8LbmmSel',
            id: '7o30ZHbzQe9mDG8LbmmSel',
            name: 'Elaine',
            type: 'artist',
            uri: 'spotify:artist:7o30ZHbzQe9mDG8LbmmSel',
          },
        ],
        available_markets: [],
        disc_number: 1,
        duration_ms: 142733,
        explicit: false,
        external_ids: {
          isrc: 'KRA491900397',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/5pwmL3qNRzpujG7gtKuN3L',
        },
        href: 'https://api.spotify.com/v1/tracks/5pwmL3qNRzpujG7gtKuN3L',
        id: '5pwmL3qNRzpujG7gtKuN3L',
        is_local: false,
        name: 'Search',
        popularity: 36,
        preview_url:
          'https://p.scdn.co/mp3-preview/3f26455fd140d6439f809b25426bd12f59b2f688?cid=1a742ee646b74af4a2a648a825f35326',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:5pwmL3qNRzpujG7gtKuN3L',
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/5z8Dm6QOSwVNH9CG28xLzl',
              },
              href: 'https://api.spotify.com/v1/artists/5z8Dm6QOSwVNH9CG28xLzl',
              id: '5z8Dm6QOSwVNH9CG28xLzl',
              name: 'Altered Perspectives',
              type: 'artist',
              uri: 'spotify:artist:5z8Dm6QOSwVNH9CG28xLzl',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/5jAkNUHe2xCLAxAON1iuYW',
              },
              href: 'https://api.spotify.com/v1/artists/5jAkNUHe2xCLAxAON1iuYW',
              id: '5jAkNUHe2xCLAxAON1iuYW',
              name: 'L0<3*',
              type: 'artist',
              uri: 'spotify:artist:5jAkNUHe2xCLAxAON1iuYW',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/2JX6iA3kZCBWVohNQ5lSq6',
              },
              href: 'https://api.spotify.com/v1/artists/2JX6iA3kZCBWVohNQ5lSq6',
              id: '2JX6iA3kZCBWVohNQ5lSq6',
              name: 'SINES',
              type: 'artist',
              uri: 'spotify:artist:2JX6iA3kZCBWVohNQ5lSq6',
            },
          ],
          available_markets: [],
          external_urls: {
            spotify: 'https://open.spotify.com/album/6fGBewvgdMj4OKZqywVphx',
          },
          href: 'https://api.spotify.com/v1/albums/6fGBewvgdMj4OKZqywVphx',
          id: '6fGBewvgdMj4OKZqywVphx',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b27355a4a7c41c5db5b9c375d859',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e0255a4a7c41c5db5b9c375d859',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d0000485155a4a7c41c5db5b9c375d859',
              width: 64,
            },
          ],
          name: 'Altered Perspectives',
          release_date: '2019-06-10',
          release_date_precision: 'day',
          total_tracks: 11,
          type: 'album',
          uri: 'spotify:album:6fGBewvgdMj4OKZqywVphx',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5z8Dm6QOSwVNH9CG28xLzl',
            },
            href: 'https://api.spotify.com/v1/artists/5z8Dm6QOSwVNH9CG28xLzl',
            id: '5z8Dm6QOSwVNH9CG28xLzl',
            name: 'Altered Perspectives',
            type: 'artist',
            uri: 'spotify:artist:5z8Dm6QOSwVNH9CG28xLzl',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5jAkNUHe2xCLAxAON1iuYW',
            },
            href: 'https://api.spotify.com/v1/artists/5jAkNUHe2xCLAxAON1iuYW',
            id: '5jAkNUHe2xCLAxAON1iuYW',
            name: 'L0<3*',
            type: 'artist',
            uri: 'spotify:artist:5jAkNUHe2xCLAxAON1iuYW',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/2JX6iA3kZCBWVohNQ5lSq6',
            },
            href: 'https://api.spotify.com/v1/artists/2JX6iA3kZCBWVohNQ5lSq6',
            id: '2JX6iA3kZCBWVohNQ5lSq6',
            name: 'SINES',
            type: 'artist',
            uri: 'spotify:artist:2JX6iA3kZCBWVohNQ5lSq6',
          },
        ],
        available_markets: [],
        disc_number: 1,
        duration_ms: 303424,
        explicit: false,
        external_ids: {
          isrc: 'TCAEG1996661',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/43tZ7hjj7nZDsA6sQnrCiM',
        },
        href: 'https://api.spotify.com/v1/tracks/43tZ7hjj7nZDsA6sQnrCiM',
        id: '43tZ7hjj7nZDsA6sQnrCiM',
        is_local: false,
        name: 'Search (Root 396Hz)',
        popularity: 22,
        preview_url:
          'https://p.scdn.co/mp3-preview/8bc1c48d9a4b14871f558c568c01df1db5374eba?cid=1a742ee646b74af4a2a648a825f35326',
        track_number: 2,
        type: 'track',
        uri: 'spotify:track:43tZ7hjj7nZDsA6sQnrCiM',
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/5Ww55PkrZ1S7YNjSu1XRrj',
              },
              href: 'https://api.spotify.com/v1/artists/5Ww55PkrZ1S7YNjSu1XRrj',
              id: '5Ww55PkrZ1S7YNjSu1XRrj',
              name: 'seven7seven',
              type: 'artist',
              uri: 'spotify:artist:5Ww55PkrZ1S7YNjSu1XRrj',
            },
          ],
          available_markets: [],
          external_urls: {
            spotify: 'https://open.spotify.com/album/6IeIutcLHIbhjb3odBvi0n',
          },
          href: 'https://api.spotify.com/v1/albums/6IeIutcLHIbhjb3odBvi0n',
          id: '6IeIutcLHIbhjb3odBvi0n',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273af917a8fe8c0b8d387ba7614',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02af917a8fe8c0b8d387ba7614',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851af917a8fe8c0b8d387ba7614',
              width: 64,
            },
          ],
          name: 'Never Look Back',
          release_date: '2022-04-30',
          release_date_precision: 'day',
          total_tracks: 10,
          type: 'album',
          uri: 'spotify:album:6IeIutcLHIbhjb3odBvi0n',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5Ww55PkrZ1S7YNjSu1XRrj',
            },
            href: 'https://api.spotify.com/v1/artists/5Ww55PkrZ1S7YNjSu1XRrj',
            id: '5Ww55PkrZ1S7YNjSu1XRrj',
            name: 'seven7seven',
            type: 'artist',
            uri: 'spotify:artist:5Ww55PkrZ1S7YNjSu1XRrj',
          },
        ],
        available_markets: [],
        disc_number: 1,
        duration_ms: 60081,
        explicit: false,
        external_ids: {
          isrc: 'QZHN72291728',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/0Y2Y6dcEYcv1l0B8oUYJAI',
        },
        href: 'https://api.spotify.com/v1/tracks/0Y2Y6dcEYcv1l0B8oUYJAI',
        id: '0Y2Y6dcEYcv1l0B8oUYJAI',
        is_local: false,
        name: 'Value',
        popularity: 14,
        preview_url:
          'https://p.scdn.co/mp3-preview/8aa9d499e2c6d0d25406aee1f8b2390aa9827f73?cid=1a742ee646b74af4a2a648a825f35326',
        track_number: 10,
        type: 'track',
        uri: 'spotify:track:0Y2Y6dcEYcv1l0B8oUYJAI',
      },
      {
        album: {
          album_type: 'single',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/1iw6ZNe7cO6LGk61z3pMRJ',
              },
              href: 'https://api.spotify.com/v1/artists/1iw6ZNe7cO6LGk61z3pMRJ',
              id: '1iw6ZNe7cO6LGk61z3pMRJ',
              name: 'Subze',
              type: 'artist',
              uri: 'spotify:artist:1iw6ZNe7cO6LGk61z3pMRJ',
            },
          ],
          available_markets: [],
          external_urls: {
            spotify: 'https://open.spotify.com/album/4tbzpn9ARYcbYjbSlAgQki',
          },
          href: 'https://api.spotify.com/v1/albums/4tbzpn9ARYcbYjbSlAgQki',
          id: '4tbzpn9ARYcbYjbSlAgQki',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b27367351db8ea9c0803466f16e7',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e0267351db8ea9c0803466f16e7',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d0000485167351db8ea9c0803466f16e7',
              width: 64,
            },
          ],
          name: 'Valores',
          release_date: '2018-01-07',
          release_date_precision: 'day',
          total_tracks: 1,
          type: 'album',
          uri: 'spotify:album:4tbzpn9ARYcbYjbSlAgQki',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1iw6ZNe7cO6LGk61z3pMRJ',
            },
            href: 'https://api.spotify.com/v1/artists/1iw6ZNe7cO6LGk61z3pMRJ',
            id: '1iw6ZNe7cO6LGk61z3pMRJ',
            name: 'Subze',
            type: 'artist',
            uri: 'spotify:artist:1iw6ZNe7cO6LGk61z3pMRJ',
          },
        ],
        available_markets: [],
        disc_number: 1,
        duration_ms: 279050,
        explicit: false,
        external_ids: {
          isrc: 'ESA011800121',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/21DphSTuUgSeLM0SueHXjj',
        },
        href: 'https://api.spotify.com/v1/tracks/21DphSTuUgSeLM0SueHXjj',
        id: '21DphSTuUgSeLM0SueHXjj',
        is_local: false,
        name: 'Valores',
        popularity: 32,
        preview_url:
          'https://p.scdn.co/mp3-preview/658edabacd28d8a7503835b3820299ebf9651d74?cid=1a742ee646b74af4a2a648a825f35326',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:21DphSTuUgSeLM0SueHXjj',
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/2n15oUB6LX0EMmKAA4Rbww',
              },
              href: 'https://api.spotify.com/v1/artists/2n15oUB6LX0EMmKAA4Rbww',
              id: '2n15oUB6LX0EMmKAA4Rbww',
              name: 'Colbert Thomas',
              type: 'artist',
              uri: 'spotify:artist:2n15oUB6LX0EMmKAA4Rbww',
            },
          ],
          available_markets: [],
          external_urls: {
            spotify: 'https://open.spotify.com/album/4ypvaQO6j7W5sdsF5Zkr8b',
          },
          href: 'https://api.spotify.com/v1/albums/4ypvaQO6j7W5sdsF5Zkr8b',
          id: '4ypvaQO6j7W5sdsF5Zkr8b',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b2739d54116864dd1125282bc1ed',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e029d54116864dd1125282bc1ed',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d000048519d54116864dd1125282bc1ed',
              width: 64,
            },
          ],
          name: 'Somebody Tell Me',
          release_date: '2022-09-14',
          release_date_precision: 'day',
          total_tracks: 10,
          type: 'album',
          uri: 'spotify:album:4ypvaQO6j7W5sdsF5Zkr8b',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/2n15oUB6LX0EMmKAA4Rbww',
            },
            href: 'https://api.spotify.com/v1/artists/2n15oUB6LX0EMmKAA4Rbww',
            id: '2n15oUB6LX0EMmKAA4Rbww',
            name: 'Colbert Thomas',
            type: 'artist',
            uri: 'spotify:artist:2n15oUB6LX0EMmKAA4Rbww',
          },
        ],
        available_markets: [],
        disc_number: 1,
        duration_ms: 241053,
        explicit: true,
        external_ids: {
          isrc: 'QZNWX2235591',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/2FClZfGF1ALljXXnV7HLgl',
        },
        href: 'https://api.spotify.com/v1/tracks/2FClZfGF1ALljXXnV7HLgl',
        id: '2FClZfGF1ALljXXnV7HLgl',
        is_local: false,
        name: 'Search',
        popularity: 16,
        preview_url:
          'https://p.scdn.co/mp3-preview/07b8979304720e87f7f61fec281b0e09ded675ab?cid=1a742ee646b74af4a2a648a825f35326',
        track_number: 4,
        type: 'track',
        uri: 'spotify:track:2FClZfGF1ALljXXnV7HLgl',
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/1RwtmxzraKFWVuGPlOrY9F',
              },
              href: 'https://api.spotify.com/v1/artists/1RwtmxzraKFWVuGPlOrY9F',
              id: '1RwtmxzraKFWVuGPlOrY9F',
              name: 'Babe color',
              type: 'artist',
              uri: 'spotify:artist:1RwtmxzraKFWVuGPlOrY9F',
            },
          ],
          available_markets: [],
          external_urls: {
            spotify: 'https://open.spotify.com/album/5rvKvH0UV8KqrZKMizmShG',
          },
          href: 'https://api.spotify.com/v1/albums/5rvKvH0UV8KqrZKMizmShG',
          id: '5rvKvH0UV8KqrZKMizmShG',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273a81bdb3c52ded8e01702030e',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02a81bdb3c52ded8e01702030e',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851a81bdb3c52ded8e01702030e',
              width: 64,
            },
          ],
          name: 'determine',
          release_date: '2022-04-29',
          release_date_precision: 'day',
          total_tracks: 8,
          type: 'album',
          uri: 'spotify:album:5rvKvH0UV8KqrZKMizmShG',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1RwtmxzraKFWVuGPlOrY9F',
            },
            href: 'https://api.spotify.com/v1/artists/1RwtmxzraKFWVuGPlOrY9F',
            id: '1RwtmxzraKFWVuGPlOrY9F',
            name: 'Babe color',
            type: 'artist',
            uri: 'spotify:artist:1RwtmxzraKFWVuGPlOrY9F',
          },
        ],
        available_markets: [],
        disc_number: 1,
        duration_ms: 164491,
        explicit: false,
        external_ids: {
          isrc: 'FR96X2224711',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/3mxYCQByMcjfzrUqGofD9Y',
        },
        href: 'https://api.spotify.com/v1/tracks/3mxYCQByMcjfzrUqGofD9Y',
        id: '3mxYCQByMcjfzrUqGofD9Y',
        is_local: false,
        name: 'value',
        popularity: 16,
        preview_url:
          'https://p.scdn.co/mp3-preview/bbe1049aa817a29c9943133dda9d596f7866a548?cid=1a742ee646b74af4a2a648a825f35326',
        track_number: 6,
        type: 'track',
        uri: 'spotify:track:3mxYCQByMcjfzrUqGofD9Y',
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/23rOBipODsgo3Mw3zMF8Hf',
              },
              href: 'https://api.spotify.com/v1/artists/23rOBipODsgo3Mw3zMF8Hf',
              id: '23rOBipODsgo3Mw3zMF8Hf',
              name: 'Mundiko',
              type: 'artist',
              uri: 'spotify:artist:23rOBipODsgo3Mw3zMF8Hf',
            },
          ],
          available_markets: [],
          external_urls: {
            spotify: 'https://open.spotify.com/album/6SUhKTIgn4e3TNtP6iIBL1',
          },
          href: 'https://api.spotify.com/v1/albums/6SUhKTIgn4e3TNtP6iIBL1',
          id: '6SUhKTIgn4e3TNtP6iIBL1',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b2734b69bea433f5a69e3b9e8f89',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e024b69bea433f5a69e3b9e8f89',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d000048514b69bea433f5a69e3b9e8f89',
              width: 64,
            },
          ],
          name: 'Estrada Solitária',
          release_date: '2022-06-24',
          release_date_precision: 'day',
          total_tracks: 8,
          type: 'album',
          uri: 'spotify:album:6SUhKTIgn4e3TNtP6iIBL1',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/23rOBipODsgo3Mw3zMF8Hf',
            },
            href: 'https://api.spotify.com/v1/artists/23rOBipODsgo3Mw3zMF8Hf',
            id: '23rOBipODsgo3Mw3zMF8Hf',
            name: 'Mundiko',
            type: 'artist',
            uri: 'spotify:artist:23rOBipODsgo3Mw3zMF8Hf',
          },
        ],
        available_markets: [],
        disc_number: 1,
        duration_ms: 189361,
        explicit: false,
        external_ids: {
          isrc: 'BCF6F2100005',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/3RDd3Kx4HfPH4XbyAnknAK',
        },
        href: 'https://api.spotify.com/v1/tracks/3RDd3Kx4HfPH4XbyAnknAK',
        id: '3RDd3Kx4HfPH4XbyAnknAK',
        is_local: false,
        name: 'Valore$',
        popularity: 17,
        preview_url:
          'https://p.scdn.co/mp3-preview/006b3bfe5788cc55de31ac2bcf5ee1946fe63b96?cid=1a742ee646b74af4a2a648a825f35326',
        track_number: 6,
        type: 'track',
        uri: 'spotify:track:3RDd3Kx4HfPH4XbyAnknAK',
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/4LADVWbGgajvchOHelqZv2',
              },
              href: 'https://api.spotify.com/v1/artists/4LADVWbGgajvchOHelqZv2',
              id: '4LADVWbGgajvchOHelqZv2',
              name: 'Search',
              type: 'artist',
              uri: 'spotify:artist:4LADVWbGgajvchOHelqZv2',
            },
          ],
          available_markets: [],
          external_urls: {
            spotify: 'https://open.spotify.com/album/2IaxcsHZtgWDVfdsKlLEWG',
          },
          href: 'https://api.spotify.com/v1/albums/2IaxcsHZtgWDVfdsKlLEWG',
          id: '2IaxcsHZtgWDVfdsKlLEWG',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b27310b9c2db68a0b2ab520dd377',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e0210b9c2db68a0b2ab520dd377',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d0000485110b9c2db68a0b2ab520dd377',
              width: 64,
            },
          ],
          name: 'Rampage',
          release_date: '1992-01-31',
          release_date_precision: 'day',
          total_tracks: 10,
          type: 'album',
          uri: 'spotify:album:2IaxcsHZtgWDVfdsKlLEWG',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4LADVWbGgajvchOHelqZv2',
            },
            href: 'https://api.spotify.com/v1/artists/4LADVWbGgajvchOHelqZv2',
            id: '4LADVWbGgajvchOHelqZv2',
            name: 'Search',
            type: 'artist',
            uri: 'spotify:artist:4LADVWbGgajvchOHelqZv2',
          },
        ],
        available_markets: [],
        disc_number: 1,
        duration_ms: 365013,
        explicit: false,
        external_ids: {
          isrc: 'MYUM89200094',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/7FJ1HVxr9PMBCLFT3N4cic',
        },
        href: 'https://api.spotify.com/v1/tracks/7FJ1HVxr9PMBCLFT3N4cic',
        id: '7FJ1HVxr9PMBCLFT3N4cic',
        is_local: false,
        name: 'Berbagai Wajah',
        popularity: 14,
        preview_url: 'null',
        track_number: 3,
        type: 'track',
        uri: 'spotify:track:7FJ1HVxr9PMBCLFT3N4cic',
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/4LADVWbGgajvchOHelqZv2',
              },
              href: 'https://api.spotify.com/v1/artists/4LADVWbGgajvchOHelqZv2',
              id: '4LADVWbGgajvchOHelqZv2',
              name: 'Search',
              type: 'artist',
              uri: 'spotify:artist:4LADVWbGgajvchOHelqZv2',
            },
          ],
          available_markets: [],
          external_urls: {
            spotify: 'https://open.spotify.com/album/2G2Nv10IkdyrFb9JCBKcmm',
          },
          href: 'https://api.spotify.com/v1/albums/2G2Nv10IkdyrFb9JCBKcmm',
          id: '2G2Nv10IkdyrFb9JCBKcmm',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b273329037ec68a8818a8868baa7',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02329037ec68a8818a8868baa7',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d00004851329037ec68a8818a8868baa7',
              width: 64,
            },
          ],
          name: 'Karisma',
          release_date: '1990-01-31',
          release_date_precision: 'day',
          total_tracks: 11,
          type: 'album',
          uri: 'spotify:album:2G2Nv10IkdyrFb9JCBKcmm',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4LADVWbGgajvchOHelqZv2',
            },
            href: 'https://api.spotify.com/v1/artists/4LADVWbGgajvchOHelqZv2',
            id: '4LADVWbGgajvchOHelqZv2',
            name: 'Search',
            type: 'artist',
            uri: 'spotify:artist:4LADVWbGgajvchOHelqZv2',
          },
        ],
        available_markets: [],
        disc_number: 1,
        duration_ms: 378866,
        explicit: false,
        external_ids: {
          isrc: 'MYUM89000196',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/0irccFsVHlp5VSqpxRIl9a',
        },
        href: 'https://api.spotify.com/v1/tracks/0irccFsVHlp5VSqpxRIl9a',
        id: '0irccFsVHlp5VSqpxRIl9a',
        is_local: false,
        name: 'Dunia Milik Kita',
        popularity: 13,
        preview_url: 'null',
        track_number: 4,
        type: 'track',
        uri: 'spotify:track:0irccFsVHlp5VSqpxRIl9a',
      },
      {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/7c5278WShlxTk3vS9XoTf8',
              },
              href: 'https://api.spotify.com/v1/artists/7c5278WShlxTk3vS9XoTf8',
              id: '7c5278WShlxTk3vS9XoTf8',
              name: 'Wings',
              type: 'artist',
              uri: 'spotify:artist:7c5278WShlxTk3vS9XoTf8',
            },
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/4LADVWbGgajvchOHelqZv2',
              },
              href: 'https://api.spotify.com/v1/artists/4LADVWbGgajvchOHelqZv2',
              id: '4LADVWbGgajvchOHelqZv2',
              name: 'Search',
              type: 'artist',
              uri: 'spotify:artist:4LADVWbGgajvchOHelqZv2',
            },
          ],
          available_markets: [],
          external_urls: {
            spotify: 'https://open.spotify.com/album/2MolQE4Fz15k8GAV38t3LH',
          },
          href: 'https://api.spotify.com/v1/albums/2MolQE4Fz15k8GAV38t3LH',
          id: '2MolQE4Fz15k8GAV38t3LH',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b2738da33ed5e1b2103003a08b58',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e028da33ed5e1b2103003a08b58',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d000048518da33ed5e1b2103003a08b58',
              width: 64,
            },
          ],
          name: 'Double Trouble',
          release_date: '1992-10-12',
          release_date_precision: 'day',
          total_tracks: 11,
          type: 'album',
          uri: 'spotify:album:2MolQE4Fz15k8GAV38t3LH',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4LADVWbGgajvchOHelqZv2',
            },
            href: 'https://api.spotify.com/v1/artists/4LADVWbGgajvchOHelqZv2',
            id: '4LADVWbGgajvchOHelqZv2',
            name: 'Search',
            type: 'artist',
            uri: 'spotify:artist:4LADVWbGgajvchOHelqZv2',
          },
        ],
        available_markets: [],
        disc_number: 1,
        duration_ms: 338786,
        explicit: false,
        external_ids: {
          isrc: 'MYUM89200236',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/09Pr0OFGGSeAioakQab0LR',
        },
        href: 'https://api.spotify.com/v1/tracks/09Pr0OFGGSeAioakQab0LR',
        id: '09Pr0OFGGSeAioakQab0LR',
        is_local: false,
        name: 'Akhirnya',
        popularity: 13,
        preview_url: 'null',
        track_number: 4,
        type: 'track',
        uri: 'spotify:track:09Pr0OFGGSeAioakQab0LR',
      },
    ],
    limit: 10,
    next: 'https://api.spotify.com/v1/search?query=searchValue&type=track&locale=en-US%2Cen%3Bq%3D0.9%2Ces-AR%3Bq%3D0.8%2Ces%3Bq%3D0.7&offset=10&limit=10',
    offset: 0,
    previous: null,
    total: 333,
  },
  playlists: {
    href: 'https://api.spotify.com/v1/search?query=searchValue&type=playlist&locale=en-US%2Cen%3Bq%3D0.9%2Ces-AR%3Bq%3D0.8%2Ces%3Bq%3D0.7&offset=0&limit=10',
    items: [
      {
        collaborative: false,
        description:
          'This is Search. The essential tracks, all in one playlist.',
        external_urls: {
          spotify: 'https://open.spotify.com/playlist/37i9dQZF1DZ06evO2NnFTh',
        },
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO2NnFTh',
        id: '37i9dQZF1DZ06evO2NnFTh',
        images: [
          {
            height: null,
            url: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO2NnFTh-large.jpg',
            width: null,
          },
        ],
        name: 'This Is Search',
        owner: {
          display_name: 'Spotify',
          external_urls: {
            spotify: 'https://open.spotify.com/user/spotify',
          },
          href: 'https://api.spotify.com/v1/users/spotify',
          id: 'spotify',
          type: 'user',
          uri: 'spotify:user:spotify',
        },
        primary_color: null,
        public: null,
        snapshot_id:
          'Mjc4MDcyMjcsMDAwMDAwMDAyNDY3MzQ5YWExN2RmOWZmMTdjYWQ3ZjE3YzczZjk4ZQ==',
        tracks: {
          href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DZ06evO2NnFTh/tracks',
          total: 50,
          items: [],
        },
        type: 'playlist',
        uri: 'spotify:playlist:37i9dQZF1DZ06evO2NnFTh',
      },
    ],
    limit: 10,
    next: null,
    offset: 0,
    previous: null,
    total: 1,
  },
};

export const mockedSearchResult: Search = {
  id: 'mockValue',
  results: resultsMockData,
};

export const searchStoreMock: SearchState = {
  ids: ['mockValue'],
  entities: {
    mockValue: {
      id: 'mockValue',
      results: resultsMockData,
    },
  },
};

export const SearchStoreSelectorsMock: MockSelector[] = [
  {
    selector: 'selectSearchByValue',
    value: { id: 'mockValue', results: resultsMockData },
  },
]

export const artitstsMock = {
    artists: {
        href: 'https://api.spotify.com/v1/search?query=searchValue&type=artist&locale=en-US%2Cen%3Bq%3D0.9%2Ces-AR%3Bq%3D0.8%2Ces%3Bq%3D0.7&offset=0&limit=10',
        items: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4bZhOMj03xDyi86bcNCEpf',
            },
            followers: {
              href: null,
              total: 10165,
            },
            genres: [],
            href: 'https://api.spotify.com/v1/artists/4bZhOMj03xDyi86bcNCEpf',
            id: '4bZhOMj03xDyi86bcNCEpf',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab6761610000e5ebb57f7b8ffebf2137a5992515',
                width: 640,
              },
              {
                height: 320,
                url: 'https://i.scdn.co/image/ab67616100005174b57f7b8ffebf2137a5992515',
                width: 320,
              },
              {
                height: 160,
                url: 'https://i.scdn.co/image/ab6761610000f178b57f7b8ffebf2137a5992515',
                width: 160,
              },
            ],
            name: 'Value Select',
            popularity: 29,
            type: 'artist',
            uri: 'spotify:artist:4bZhOMj03xDyi86bcNCEpf',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/2eEShlidjgx1dZkg4vhZwo',
            },
            followers: {
              href: null,
              total: 26,
            },
            genres: [],
            href: 'https://api.spotify.com/v1/artists/2eEShlidjgx1dZkg4vhZwo',
            id: '2eEShlidjgx1dZkg4vhZwo',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab6761610000e5eb6cfb9be144893cf57c562112',
                width: 640,
              },
              {
                height: 320,
                url: 'https://i.scdn.co/image/ab676161000051746cfb9be144893cf57c562112',
                width: 320,
              },
              {
                height: 160,
                url: 'https://i.scdn.co/image/ab6761610000f1786cfb9be144893cf57c562112',
                width: 160,
              },
            ],
            name: 'Revalue',
            popularity: 1,
            type: 'artist',
            uri: 'spotify:artist:2eEShlidjgx1dZkg4vhZwo',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/2PtVBm9g3He9o6aUiwLvTS',
            },
            followers: {
              href: null,
              total: 192,
            },
            genres: [],
            href: 'https://api.spotify.com/v1/artists/2PtVBm9g3He9o6aUiwLvTS',
            id: '2PtVBm9g3He9o6aUiwLvTS',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab6761610000e5ebc491f8fdb3fa507fa7556304',
                width: 640,
              },
              {
                height: 320,
                url: 'https://i.scdn.co/image/ab67616100005174c491f8fdb3fa507fa7556304',
                width: 320,
              },
              {
                height: 160,
                url: 'https://i.scdn.co/image/ab6761610000f178c491f8fdb3fa507fa7556304',
                width: 160,
              },
            ],
            name: 'Value',
            popularity: 4,
            type: 'artist',
            uri: 'spotify:artist:2PtVBm9g3He9o6aUiwLvTS',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1LYtmR38190qpMGlnBUjZf',
            },
            followers: {
              href: null,
              total: 25,
            },
            genres: [],
            href: 'https://api.spotify.com/v1/artists/1LYtmR38190qpMGlnBUjZf',
            id: '1LYtmR38190qpMGlnBUjZf',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab6761610000e5eb713b70c2ddc564957907c355',
                width: 640,
              },
              {
                height: 320,
                url: 'https://i.scdn.co/image/ab67616100005174713b70c2ddc564957907c355',
                width: 320,
              },
              {
                height: 160,
                url: 'https://i.scdn.co/image/ab6761610000f178713b70c2ddc564957907c355',
                width: 160,
              },
            ],
            name: 'FaceValue',
            popularity: 2,
            type: 'artist',
            uri: 'spotify:artist:1LYtmR38190qpMGlnBUjZf',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/6wil2xok5SoD4AJXz8vxaa',
            },
            followers: {
              href: null,
              total: 66,
            },
            genres: [],
            href: 'https://api.spotify.com/v1/artists/6wil2xok5SoD4AJXz8vxaa',
            id: '6wil2xok5SoD4AJXz8vxaa',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab6761610000e5eb16f7884131081487a5700ed2',
                width: 640,
              },
              {
                height: 320,
                url: 'https://i.scdn.co/image/ab6761610000517416f7884131081487a5700ed2',
                width: 320,
              },
              {
                height: 160,
                url: 'https://i.scdn.co/image/ab6761610000f17816f7884131081487a5700ed2',
                width: 160,
              },
            ],
            name: 'Market Value',
            popularity: 19,
            type: 'artist',
            uri: 'spotify:artist:6wil2xok5SoD4AJXz8vxaa',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/69QExauEZ1A6SpIQS0J1qa',
            },
            followers: {
              href: null,
              total: 69,
            },
            genres: [],
            href: 'https://api.spotify.com/v1/artists/69QExauEZ1A6SpIQS0J1qa',
            id: '69QExauEZ1A6SpIQS0J1qa',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b273b80540fa2542e994688c8d03',
                width: 640,
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e02b80540fa2542e994688c8d03',
                width: 300,
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d00004851b80540fa2542e994688c8d03',
                width: 64,
              },
            ],
            name: 'valu',
            popularity: 1,
            type: 'artist',
            uri: 'spotify:artist:69QExauEZ1A6SpIQS0J1qa',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1ZqIcDh9udUjTwpKfaMu2K',
            },
            followers: {
              href: null,
              total: 717,
            },
            genres: [],
            href: 'https://api.spotify.com/v1/artists/1ZqIcDh9udUjTwpKfaMu2K',
            id: '1ZqIcDh9udUjTwpKfaMu2K',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b2739d46d2e661a81555b6377de3',
                width: 640,
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e029d46d2e661a81555b6377de3',
                width: 300,
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d000048519d46d2e661a81555b6377de3',
                width: 64,
              },
            ],
            name: 'Values',
            popularity: 1,
            type: 'artist',
            uri: 'spotify:artist:1ZqIcDh9udUjTwpKfaMu2K',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1sOg1325HMIW9Vt4uFW4Kk',
            },
            followers: {
              href: null,
              total: 515,
            },
            genres: [],
            href: 'https://api.spotify.com/v1/artists/1sOg1325HMIW9Vt4uFW4Kk',
            id: '1sOg1325HMIW9Vt4uFW4Kk',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b273acc1ddfa5389150f496d805b',
                width: 640,
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e02acc1ddfa5389150f496d805b',
                width: 300,
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d00004851acc1ddfa5389150f496d805b',
                width: 64,
              },
            ],
            name: 'Evaluate Your Socialize',
            popularity: 3,
            type: 'artist',
            uri: 'spotify:artist:1sOg1325HMIW9Vt4uFW4Kk',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/36qlL2Ac90P1CNh2BbZ1n2',
            },
            followers: {
              href: null,
              total: 57,
            },
            genres: [],
            href: 'https://api.spotify.com/v1/artists/36qlL2Ac90P1CNh2BbZ1n2',
            id: '36qlL2Ac90P1CNh2BbZ1n2',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab6761610000e5eb738800b27ac3fa8f90921e29',
                width: 640,
              },
              {
                height: 320,
                url: 'https://i.scdn.co/image/ab67616100005174738800b27ac3fa8f90921e29',
                width: 320,
              },
              {
                height: 160,
                url: 'https://i.scdn.co/image/ab6761610000f178738800b27ac3fa8f90921e29',
                width: 160,
              },
            ],
            name: 'Valuence INFINITIES',
            popularity: 5,
            type: 'artist',
            uri: 'spotify:artist:36qlL2Ac90P1CNh2BbZ1n2',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5C3XE2wcU82jmJW7RUQUG7',
            },
            followers: {
              href: null,
              total: 2,
            },
            genres: [],
            href: 'https://api.spotify.com/v1/artists/5C3XE2wcU82jmJW7RUQUG7',
            id: '5C3XE2wcU82jmJW7RUQUG7',
            images: [
              {
                height: 640,
                url: 'https://i.scdn.co/image/ab67616d0000b273e985a6bd4378267b13ad0743',
                width: 640,
              },
              {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e02e985a6bd4378267b13ad0743',
                width: 300,
              },
              {
                height: 64,
                url: 'https://i.scdn.co/image/ab67616d00004851e985a6bd4378267b13ad0743',
                width: 64,
              },
            ],
            name: 'Valued.',
            popularity: 1,
            type: 'artist',
            uri: 'spotify:artist:5C3XE2wcU82jmJW7RUQUG7',
          },
        ],
        limit: 10,
        next: 'https://api.spotify.com/v1/search?query=searchValue&type=artist&locale=en-US%2Cen%3Bq%3D0.9%2Ces-AR%3Bq%3D0.8%2Ces%3Bq%3D0.7&offset=10&limit=10',
        offset: 0,
        previous: null,
        total: 14,
      },
}