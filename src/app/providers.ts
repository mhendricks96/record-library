import { InjectionToken } from "@angular/core";

export const lookupListToken = new InjectionToken('lookupListToken');

export const lookupLists = {
  genres: ['pop', 'rock', 'hip-hop', 'oldies', 'country', 'other'],
};
