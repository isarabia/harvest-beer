import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-october',
  templateUrl: './october.page.html',
  styleUrls: ['./october.page.scss'],
})
export class OctoberPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
