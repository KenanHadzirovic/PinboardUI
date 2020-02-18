import { Component, OnInit, Input } from '@angular/core';
import { Preference } from 'src/app/models/preference';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  
  @Input() 
  public option: Preference;

  constructor() { }

  ngOnInit() {
  }

  public isBoolean(): boolean {
    return this.option.boolValue != null;
  }

  public isColor(): boolean {
    return this.option.preferenceType.name.includes('Color');
  }

  public getType(): string {
    return this.option.preferenceType.name.includes('Size') ? 'number' : 'text';
  }
}
