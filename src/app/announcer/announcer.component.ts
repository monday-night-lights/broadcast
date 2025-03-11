import { Component, OnInit, Input } from '@angular/core';
import { Announcer } from './announcer';

@Component({
  selector: 'announcer',
  templateUrl: './announcer.component.html',
  styleUrls: ['./announcer.component.scss']
})
export class AnnouncerComponent implements OnInit {
 
  @Input() announcer: Announcer;
  @Input() hideInsta: boolean;

  ngOnInit() {
    this.hideInsta = this.hideInsta || !this.announcer.subtitle.startsWith("@");
  }
}
