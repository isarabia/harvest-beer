import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-redirect-back',
  templateUrl: './redirect-back.component.html',
  styleUrls: ['./redirect-back.component.scss'],
})
export class RedirectBackComponent implements OnInit {

  @Input() url : string;

  constructor(
    private navController: NavController) {
  }

  ngOnInit() {}

  redirect() {
    this.navController.back();
  }

}
