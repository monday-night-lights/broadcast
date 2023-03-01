import { Component, Input, OnInit } from '@angular/core';
import { DraftPick } from './draft-pick';

@Component({
  selector: 'draft-pick',
  templateUrl: './draft-pick.component.html',
  styleUrls: ['./draft-pick.component.scss']
})
export class DraftPickComponent implements OnInit {
  @Input() pick: DraftPick;

  constructor() { }

  ngOnInit() {
  }

}
