import { Component, OnInit } from '@angular/core';

import { ActiveUserService } from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Medical System';

  constructor(public readonly userService: ActiveUserService) {}

  public ngOnInit(): void {
    this.userService.loadProfile();
  }
}
