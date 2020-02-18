import { Injectable, Output, EventEmitter } from '@angular/core';
import { Preference } from 'src/app/models/preference';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  preferences: Preference[];

  @Output() preferenceChange: EventEmitter<Preference[]> = new EventEmitter();


  constructor() { 
    this.preferences = this.createPreferences();
    this.preferenceChange.emit(this.preferences);
  }

  public createPreferences(): Preference[] {
    return [
      { preferenceId: 1, value: 'white', userId: 1, preferenceType: { preferenceTypeId: 1, name: "Background Color" }, boolValue: null },
      { preferenceId: 2, value: 'grey', userId: 1, preferenceType: { preferenceTypeId: 1, name: "Font Color" }, boolValue: null },
      { preferenceId: 3, value: '12', userId: 1, preferenceType: { preferenceTypeId: 1, name: "Font Size" }, boolValue: null },
      { preferenceId: 4, value: null, userId: 1, preferenceType: { preferenceTypeId: 2, name: "Is user online"}, boolValue: false },
      { preferenceId: 5, value: null, userId: 1, preferenceType: { preferenceTypeId: 2, name: "Is email confirmed"}, boolValue: true },
      { preferenceId: 6, value: null, userId: 1, preferenceType: { preferenceTypeId: 2, name: "Is user authenticated"}, boolValue: false },
      { preferenceId: 7, value: 'Administrator', userId: 1, preferenceType: { preferenceTypeId: 2, name: "Authenticated admin"}, boolValue: null }
    ];
  }
}
