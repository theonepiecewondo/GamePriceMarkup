import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {

  constructor(private router: Router) { }

  goPage(){
    this.router.navigate(['/details'])
  }
  

  ngOnInit() {
  }

}
