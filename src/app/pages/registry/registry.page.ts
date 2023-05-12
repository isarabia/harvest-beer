import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular'

@Component({
  selector: 'app-registry',
  templateUrl: 'registry.page.html',
  styleUrls: ['registry.page.scss']
})
export class RegistryPage implements OnInit {

  constructor(private router:Router) {

  }

  ngOnInit() {
  }

  redirigir(month : string) {
    this.router.navigate([month]);
  }
}