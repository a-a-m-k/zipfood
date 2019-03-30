import {Component, Input, OnInit} from '@angular/core';
import {BrowserModule, BrowserTransferStateModule, DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent implements OnInit {
  @Input() patient;
  public url: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    let aloeurl = `https://maps.google.com/maps?q=${this.patient.city}+${this.patient.street}+${this.patient.house}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(aloeurl);
  }

}
