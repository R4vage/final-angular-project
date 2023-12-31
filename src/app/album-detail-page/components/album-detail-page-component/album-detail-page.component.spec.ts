import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Actions } from '@ngrx/effects';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { noop, of} from 'rxjs';
import { AlbumService } from 'src/app/main-page/services/album.service';
import { MaterialModule } from 'src/app/material/material.module';
import { TracksListModule } from 'src/app/shared/modules/tracks-list/tracks-list.module';
import { AlbumTotalDurationPipe } from 'src/app/shared/pipes/album-total-duration.pipe';
import { ListArtistsPipe } from 'src/app/shared/pipes/list-artists.pipe';
import { SecondTrackMusicPipe } from 'src/app/shared/pipes/second-track-music.pipe';
import { albumWithTracksMockData } from 'src/Test-utilities/album-mock-data';
import { mockAlbumStore, savedItemsMockStore } from 'src/Test-utilities/store-mocks-data';

import { AlbumDetailPageComponent } from './album-detail-page.component';

describe('AlbumDetailPageComponent', () => {
  let component: AlbumDetailPageComponent;
  let fixture: ComponentFixture<AlbumDetailPageComponent>;
  let el: DebugElement;
  let loader: HarnessLoader;
  let router: Router;
  let albumService: AlbumService;
  let location: Location;
  let snackbar: MatSnackBar;
  let actions: Actions;
  let store : MockStore;

  const ID_ALBUM = 'testParamsAlbum';
  const ALBUM = albumWithTracksMockData;
  beforeEach(async () => {
    const albumServiceSpy = jasmine.createSpyObj(AlbumService, ['checkSavedAlbum', 'saveAlbum', 'deleteAlbum', 'changeAlbumState']);
    const snackbarSpy = jasmine.createSpyObj(MatSnackBar, ['open']);
    const actionsSpy = jasmine.createSpyObj(Actions, ['pipe'])
    albumServiceSpy.checkSavedAlbum.and.returnValue(of([true]));
    albumServiceSpy.saveAlbum.and.returnValue(of([true]));
    albumServiceSpy.deleteAlbum.and.returnValue(of([true]));
    actionsSpy.pipe.and.returnValue(of(true));
    snackbarSpy.open.and.callFake(noop);

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MaterialModule,
        NoopAnimationsModule,
        TracksListModule,
        RouterTestingModule.withRoutes([
          { path: 'album/:id', component: AlbumDetailPageComponent },
          { path: 'album', component: AlbumDetailPageComponent },
        ]),
      ],
      declarations: [AlbumDetailPageComponent, ListArtistsPipe, SecondTrackMusicPipe, AlbumTotalDurationPipe],
      providers: [
        { provide: MatSnackBar, useValue: snackbarSpy },
        {provide: Actions, useValue: actionsSpy},
        provideMockStore({
          initialState: {
            albums: mockAlbumStore,
            savedItems: savedItemsMockStore
          }
        }),
        {
          provide: AlbumService,
          useValue: albumServiceSpy,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              id: ID_ALBUM,
            }),
          },
        },
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    actions = TestBed.inject(Actions);
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(AlbumDetailPageComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    albumService = TestBed.inject(AlbumService);
    snackbar = TestBed.inject(MatSnackBar);


    router.initialNavigation();
    await router.navigate(['/album', ID_ALBUM]);

    loader = TestbedHarnessEnvironment.loader(fixture);

    fixture.detectChanges();
  });

  it('should create and redirect correctly', async () => {
    expect(component).toBeTruthy();
    expect(location.path()).toBe(`/album/${ID_ALBUM}`);
    expect(component.idAlbum).toBe(ID_ALBUM);
  });

  it('should create album information section', () => {
    const albumInformation = el.query(By.css('.album-information'));
    expect(albumInformation).toBeTruthy();
  });
  it("should show album's image", () => {
    const albumImage = el.query(By.css('.image-album'));
    expect(albumImage).toBeTruthy();
    expect(albumImage.attributes['src']).toBe(ALBUM.images[0].url);
  });
  it('should show title and artist names', () => {
    const albumTitle = el.query(By.css('.title'));
    const albumArtistsList = el.query(By.css('.artists'));

    expect(albumTitle).toBeTruthy();
    expect(albumArtistsList).toBeTruthy();
    expect(albumArtistsList.nativeElement.textContent).toBe('Blessd•2022•13 songs•00:04:15');
  });

  it('should display correctly the buttons', async () => {
    const buttons = await loader.getAllHarnesses(MatButtonHarness.with({ selector: '[mat-raised-button]' }));

    expect(buttons).toBeTruthy();
    expect(buttons.length).toBe(1);
  });

  it('should display correctly the tracks', () => {
    const tracks = el.queryAll(By.css('.track'));

    expect(tracks.length).toBe(1);

    const firstTrack = tracks[0];
    const trackIndex = firstTrack.query(By.css('.index'));
    const trackName = firstTrack.query(By.css('.track-name'));
    const trackArtist = firstTrack.query(By.css('.track-artist'));
    const trackDuration = firstTrack.query(By.css('.track-duration'));

    expect(trackIndex.nativeElement.textContent).toBe('1');
    expect(trackName.nativeElement.textContent).toContain(ALBUM.tracks.items[0].name);
    expect(trackArtist.nativeElement.textContent).toBe(ALBUM.tracks.items[0].artists[0].name +', ' +ALBUM.tracks.items[0].artists[1].name);
    expect(trackDuration.nativeElement.textContent).toBe('04:15');
  });

  it('should get image from album', () => {
    const image = component.getImage(ALBUM);
    expect(image).toBe(ALBUM.images[0].url);
  });


  it('should delete album when delete button is clicked ', async () => {
    component.isAlbumSaved = true;
    fixture.detectChanges();
    const saveButton = await loader.getHarness(MatButtonHarness.with({ selector: '[mat-raised-button]' }));
    expect(await saveButton.getText()).toBe('deleteDelete Playlist')
    await saveButton.click();
    fixture.detectChanges();
    expect(albumService.changeAlbumState).toHaveBeenCalledOnceWith(ALBUM, true)

  });

  it('should save album when save button is clicked', async () => {
    const deleteButton = await loader.getHarness(MatButtonHarness.with({ selector: '[mat-raised-button]' }));
    expect(await deleteButton.getText()).toBe('favoriteSave Playlist')
    await deleteButton.click();
    fixture.detectChanges();
    expect(albumService.changeAlbumState).toHaveBeenCalledOnceWith(ALBUM, false)
  });
});
