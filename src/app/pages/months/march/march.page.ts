import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-march',
  templateUrl: './march.page.html',
  styleUrls: ['./march.page.scss'],
})
export class MarchPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
