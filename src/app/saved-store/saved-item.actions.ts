import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Kind, SavedItem } from './saved-item.reducer';

export const checkSavedItem = createAction(
  '[SavedItem/API] Check SavedItem',
  props<{id:string, kind: Kind}>()
)

export const checkSavedItems = createAction(
  '[SavedItem/API] Check SavedItems',
  props<{ids:string[], kind: Kind}>()
)

export const addSavedItem = createAction(
  '[SavedItem/API] Add SavedItem',
  props<{ id: string }>()
);

export const addSavedItemSuccess = createAction(
  '[SavedItem/API] Add SavedItem Success',
  props<{ savedItem: SavedItem }>()
);

export const addSavedItemFailure = createAction(
  '[SavedItem/API] Add SavedItem Failure',
  props<{ error: any }>()
);

export const addSavedItems = createAction(
  '[SavedItem/API] Add SavedItems',
  props<{ ids: string[], kind:Kind }>()
);

export const addSavedItemsSuccess = createAction(
  '[SavedItem/API] Add SavedItems Success',
  props<{ savedItems: SavedItem[] }>()
);

export const addSavedItemsFailure = createAction(
  '[SavedItem/API] Add SavedItems Failure',
  props<{ error: any }>()
);

export const loadSavedItems = createAction(
  '[SavedItem/API] Load SavedItems', 
  props<{ savedItems: SavedItem[] }>()
);

export const upsertSavedItem = createAction(
  '[SavedItem/API] Upsert SavedItem',
  props<{ savedItem: SavedItem }>()
);



export const upsertSavedItems = createAction(
  '[SavedItem/API] Upsert SavedItems',
  props<{ savedItems: SavedItem[] }>()
);

export const updateSavedItem = createAction(
  '[SavedItem/API] Update SavedItem',
  props<{ savedItem: Update<SavedItem> }>()
);

export const updateSavedItems = createAction(
  '[SavedItem/API] Update SavedItems',
  props<{ savedItems: Update<SavedItem>[] }>()
);

export const deleteSavedItem = createAction(
  '[SavedItem/API] Delete SavedItem',
  props<{ id: string }>()
);

export const deleteSavedItems = createAction(
  '[SavedItem/API] Delete SavedItems',
  props<{ ids: string[] }>()
);

export const clearSavedItems = createAction(
  '[SavedItem/API] Clear SavedItems'
);

export const alreadyLoaded = createAction(
  '[SavedItem/API] No Action SavedItems'
)
