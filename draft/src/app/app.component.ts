import { Component, ViewChild } from '@angular/core';
import { Player } from './Player';
import { Players } from './PlayerMock';
import { Selection } from './Selection';
import { Team } from './Team';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('auto', null) auto;
  title = '2019 MNL Draft';
  keyword = "name";

  Teams: Team[] = [
    { name: "Americans", class: "americans" },
    { name: "Tigers", class: "tigers" },
    { name: "Mighty Ducks", class: "ducks" },
    { name: "North Stars", class: "stars" },
    { name: "Golden Seals", class: "seals" },
    { name: "Whalers", class: "whalers" },
    { name: "Nordiques", class: "diques" }
  ]

  filteredPlayers: Player[] = [];

  Players: Player[] = Players;
  Selections: Selection[] = [];
  PickNumber: number;
  SelectedTeam: Team = this.Teams[0];

  KEY = 'value';
  value: any = null;

  constructor(public local: LocalStorageService, public session: SessionStorageService) {
    this.filteredPlayers = this.Players;
    this.PickNumber = 1;

    this.setDraftSelection();
  }

  setDraftSelection() {
    this.Selections = this.local.get(this.KEY);
  }

  remove() {
    this.local.remove(this.KEY);
  }

  clear() {
    this.local.clear();
  }

  setTeam(team) {
    this.SelectedTeam = this.Teams.find(x => x.class == team);
  }

  changePickNumber(val: number) {
    this.PickNumber = this.PickNumber + val;
  }

  selectEvent(item) {
    let DraftPick: Selection = new Selection();
    DraftPick.PickNumber = this.PickNumber;
    DraftPick.Pick = item;
    DraftPick.Team = this.SelectedTeam.name;
    DraftPick.className = this.SelectedTeam.class;

    this.Selections.push(DraftPick);
    this.auto.clear();
    this.PickNumber = this.PickNumber + 1;

    this.local.set(this.KEY, this.Selections)
  }

  onFocused(e) {
    // do something when input is focused
  }
}