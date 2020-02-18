import { Component, OnInit } from '@angular/core';
import { Preference } from 'src/app/models/preference';
import { PreferencesService } from 'src/app/services/preferences/preferences.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  public options: Preference[];

  constructor(private preferenceService: PreferencesService) { }

  ngOnInit() {
    this.preferenceService.preferenceChange.subscribe(preferences => {
      this.options = preferences;
    });
    this.options = this.preferenceService.preferences;
  }

  public cancel(): void {
    this.preferenceService.createPreferences();
  }
}
