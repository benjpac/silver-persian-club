import { Cat } from './../shared/cat.model';
import { CatService } from './../shared/cat.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css'],
  providers: [CatService]
})
export class CatDetailComponent implements OnInit {
  catId: string;
  catToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private catService: CatService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.catId = urlParameters['id'];
    });
    this.catToDisplay = this.catService.getCatById(this.catId);
  }

}
