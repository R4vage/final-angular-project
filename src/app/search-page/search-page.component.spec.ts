import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SearchPageComponent } from './search-page.component';
import { searchStoreMock } from 'src/Test-utilities/results-mock-data';
import { HarnessLoader } from '@angular/cdk/testing';
import { DebugElement } from '@angular/core';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import * as fromSearchActions from './search-store/search.selectors';
import { RouterTestingModule } from '@angular/router/testing';
import { savedItemsMockStore } from 'src/Test-utilities/store-mocks-data';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;
  let loader: HarnessLoader;
  let store: MockStore;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchPageComponent],
      providers: [
        provideMockStore({
          initialState: {
            savedItems: savedItemsMockStore,
            searches: searchStoreMock,
          },
        }),
      ],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchPageComponent);
    store = TestBed.inject(MockStore);
    loader = TestbedHarnessEnvironment.loader(fixture);
    debug = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
