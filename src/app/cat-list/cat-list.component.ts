import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { CatService } from './../shared/cat.service';
import { Cat } from './../shared/cat.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css'],
  providers: [CatService]
})
export class CatListComponent implements OnInit {

  cats: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private catService: CatService) { }

  ngOnInit() {
    this.cats = this.catService.getCats();
  }

  goToDetailPage(clickedCat) {
    this.router.navigate(['cats', clickedCat.$key]);
  }

}
