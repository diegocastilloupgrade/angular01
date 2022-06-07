import { NavigatorInterface } from './../../../models/newsInterfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss'],
})
export class MainmenuComponent implements OnInit {
  public navigatorMenu: NavigatorInterface[];
  constructor() {
    this.navigatorMenu = [
      {
        content: 'Home',
        link: '#home',
      },
      {
        content: 'Politics',
        link: '#politics',
      },
      {
        content: 'World',
        link: '#world',
      },
      {
        content: 'Bussiness',
        link: '#business',
      },
      {
        content: 'Sports',
        link: '#Sports',
      },
    ];
  }

  ngOnInit(): void {}
}
